import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function Attendance() {
  const [students, setStudents] = useState([
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Smith'},
    {id: '3', name: 'Samuel Johnson'},
  ]); // Demo data for students
  const [attendance, setAttendance] = useState({});

  const handleAttendance = (studentId, status) => {
    setAttendance({...attendance, [studentId]: status});
  };

  const handleSaveAttendance = () => {
    const today = new Date().toISOString().split('T')[0];

    // Simulate saving the attendance data
    // You can replace this with actual Firestore batch save logic
    Alert.alert(
      'Attendance Saved',
      `Attendance for ${today} has been saved successfully!`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Mark Attendance</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.student}>
            <Text style={styles.studentName}>{item.name}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id] === 'Present' && styles.presentButton,
                ]}
                onPress={() => handleAttendance(item.id, 'Present')}>
                <Text style={styles.buttonText}>Present</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id] === 'Absent' && styles.absentButton,
                ]}
                onPress={() => handleAttendance(item.id, 'Absent')}>
                <Text style={styles.buttonText}>Absent</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveAttendance}>
        <Text style={styles.saveButtonText}>Save Attendance</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  student: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  attendanceButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginLeft: 10,
  },
  presentButton: {
    backgroundColor: '#4caf50', // Green for "Present"
  },
  absentButton: {
    backgroundColor: '#f44336', // Red for "Absent"
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
