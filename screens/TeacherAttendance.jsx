import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function TeacherAttendance() {
  const [teachers, setTeachers] = useState([
    {id: '1', name: 'Mr. John Doe'},
    {id: '2', name: 'Ms. Jane Smith'},
    {id: '3', name: 'Mr. Samuel Green'},
  ]); // Demo data for teachers
  const [attendance, setAttendance] = useState({});

  // Uncomment for Firebase data
  // useEffect(() => {
  //   firestore()
  //     .collection('teachers')
  //     .get()
  //     .then(querySnapshot => {
  //       const teachersData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         teachersData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setTeachers(teachersData);
  //     });
  // }, []);

  const handleAttendance = (teacherId, status) => {
    setAttendance({...attendance, [teacherId]: status});
  };

  const handleSaveAttendance = () => {
    // Simulated save attendance action for demo purposes
    Alert.alert('Attendance saved successfully');
    // Uncomment for Firebase usage
    // const today = new Date().toISOString().split('T')[0];
    // const batch = firestore().batch();
    // Object.keys(attendance).forEach(teacherId => {
    //   const ref = firestore()
    //     .collection('teacherAttendance')
    //     .doc(`${teacherId}_${today}`);
    //   batch.set(ref, {teacherId, date: today, status: attendance[teacherId]});
    // });
    // batch
    //   .commit()
    //   .then(() => {
    //     Alert.alert('Attendance saved successfully');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error saving attendance', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Teacher Attendance</Text>
      <FlatList
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.teacher}>
            <Text style={styles.teacherName}>{item.name}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id] === 'Present' && styles.selectedButton,
                ]}
                onPress={() => handleAttendance(item.id, 'Present')}>
                <Text style={styles.buttonText}>Present</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.attendanceButton,
                  attendance[item.id] === 'Absent' && styles.selectedButton,
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
    textAlign: 'center',
  },
  teacher: {
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
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  attendanceButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
