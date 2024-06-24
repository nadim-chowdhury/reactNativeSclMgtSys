import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {firestore} from '../lib/firebase';

export default function ParentGrades() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    firestore()
      .collection('grades')
      .get()
      .then(querySnapshot => {
        const gradesData = [];
        querySnapshot.forEach(documentSnapshot => {
          gradesData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setGrades(gradesData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={grades}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.grade}>
            <Text>Student ID: {item.studentId}</Text>
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
  grade: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
