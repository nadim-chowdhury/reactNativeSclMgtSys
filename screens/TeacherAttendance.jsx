import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';
import {firestore} from '../lib/firebase';

export default function TeacherAttendance() {
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    firestore()
      .collection('teachers')
      .get()
      .then(querySnapshot => {
        const teachersData = [];
        querySnapshot.forEach(documentSnapshot => {
          teachersData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setTeachers(teachersData);
      });
  }, []);

  const handleAttendance = (teacherId, status) => {
    setAttendance({...attendance, [teacherId]: status});
  };

  const handleSaveAttendance = () => {
    const today = new Date().toISOString().split('T')[0];
    const batch = firestore().batch();

    Object.keys(attendance).forEach(teacherId => {
      const ref = firestore()
        .collection('teacherAttendance')
        .doc(`${teacherId}_${today}`);
      batch.set(ref, {teacherId, date: today, status: attendance[teacherId]});
    });

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
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.teacher}>
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
  teacher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
