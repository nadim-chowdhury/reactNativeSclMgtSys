import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment when using Firebase

export default function AttendanceReports() {
  const [attendanceReports, setAttendanceReports] = useState([
    {
      id: '1',
      studentId: '12345',
      date: '2024-10-20',
      status: 'Present',
    },
    {
      id: '2',
      studentId: '67890',
      date: '2024-10-19',
      status: 'Absent',
    },
    {
      id: '3',
      studentId: '11223',
      date: '2024-10-18',
      status: 'Present',
    },
  ]); // Demo data

  // useEffect(() => {
  //   firestore()
  //     .collection('attendance')
  //     .get()
  //     .then(querySnapshot => {
  //       const reportsData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         reportsData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setAttendanceReports(reportsData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Attendance Reports</Text>
      <FlatList
        data={attendanceReports}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.reportItem}>
            <Text style={styles.reportText}>Student ID: {item.studentId}</Text>
            <Text style={styles.reportText}>Date: {item.date}</Text>
            <Text
              style={[
                styles.reportText,
                item.status === 'Present'
                  ? styles.presentStatus
                  : styles.absentStatus,
              ]}>
              Status: {item.status}
            </Text>
          </View>
        )}
      />
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
  reportItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#ddd', // Lighter border for a clean look
    borderWidth: 1,
  },
  reportText: {
    fontSize: 16,
    color: '#333',
  },
  presentStatus: {
    color: '#4caf50', // Green for "Present"
    fontWeight: 'bold',
  },
  absentStatus: {
    color: '#f44336', // Red for "Absent"
    fontWeight: 'bold',
  },
});
