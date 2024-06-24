import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';
// import {firestore} from '../lib/firebase';

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  // useEffect(() => {
  //   firestore()
  //     .collection('students')
  //     .get()
  //     .then(querySnapshot => {
  //       const studentsData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         studentsData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setStudents(studentsData);
  //     });
  // }, []);

  const handleAttendance = (studentId, status) => {
    setAttendance({...attendance, [studentId]: status});
  };

  const handleSaveAttendance = () => {
    const today = new Date().toISOString().split('T')[0];
    const batch = firestore().batch();

    // Object.keys(attendance).forEach(studentId => {
    //   const ref = firestore()
    //     .collection('attendance')
    //     .doc(`${studentId}_${today}`);
    //   batch.set(ref, {studentId, date: today, status: attendance[studentId]});
    // });

    batch
      .commit()
      .then(() => {
        Alert.alert('Attendance saved successfully');
      })
      .catch(error => {
        Alert.alert('Error saving attendance', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.student}>
            <Text>{item.name}</Text>
            <Button
              title="Present"
              onPress={() => handleAttendance(item.id, 'Present')}
            />
            <Button
              title="Absent"
              onPress={() => handleAttendance(item.id, 'Absent')}
            />
          </View>
        )}
      />
      <Button title="Save Attendance" onPress={handleSaveAttendance} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  student: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
