import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function ParentGrades() {
  const [grades, setGrades] = useState([
    {id: '1', studentId: '101', grade: 'A'},
    {id: '2', studentId: '102', grade: 'B+'},
    {id: '3', studentId: '103', grade: 'A-'},
  ]); // Demo data for grades

  // Uncomment for Firebase data
  // useEffect(() => {
  //   firestore()
  //     .collection('grades')
  //     .get()
  //     .then(querySnapshot => {
  //       const gradesData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         gradesData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setGrades(gradesData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Grades Overview</Text>
      <FlatList
        data={grades}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.gradeItem}>
            <Text style={styles.gradeText}>Student ID: {item.studentId}</Text>
            <Text style={styles.gradeText}>Grade: {item.grade}</Text>
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
    textAlign: 'center',
    color: '#333',
  },
  gradeItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  gradeText: {
    fontSize: 18,
    color: '#333',
  },
});
