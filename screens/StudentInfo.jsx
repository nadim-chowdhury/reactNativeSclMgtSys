import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {firestore} from '../lib/firebase';

export default function StudentInfo() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Assuming each parent is linked to a student
    firestore()
      .collection('students')
      .get()
      .then(querySnapshot => {
        const studentsData = [];
        querySnapshot.forEach(documentSnapshot => {
          studentsData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setStudents(studentsData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.student}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Grade: {item.grade}</Text>
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
  student: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
