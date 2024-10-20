import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function StudentInfo() {
  const [students, setStudents] = useState([
    {id: '1', name: 'John Doe', email: 'john.doe@example.com', grade: 'A'},
    {id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', grade: 'B+'},
  ]); // Demo data for students

  // Uncomment for Firebase data
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

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Student Information</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.studentItem}>
            <Text style={styles.studentText}>Name: {item.name}</Text>
            <Text style={styles.studentText}>Email: {item.email}</Text>
            <Text style={styles.studentText}>Grade: {item.grade}</Text>
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
    textAlign: 'center',
  },
  studentItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  studentText: {
    fontSize: 16,
    color: '#333',
  },
});
