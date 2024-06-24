import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {firestore} from '../lib/firebase';

export default function AttendanceReports() {
  const [attendanceReports, setAttendanceReports] = useState([]);

  useEffect(() => {
    firestore()
      .collection('attendance')
      .get()
      .then(querySnapshot => {
        const reportsData = [];
        querySnapshot.forEach(documentSnapshot => {
          reportsData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setAttendanceReports(reportsData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={attendanceReports}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.reportItem}>
            <Text>Student ID: {item.studentId}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Status: {item.status}</Text>
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
  },
  reportItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
