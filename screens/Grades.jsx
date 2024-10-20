import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment when using Firebase

export default function Grades() {
  const [students, setStudents] = useState([
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Smith'},
    {id: '3', name: 'Samuel Green'},
  ]); // Demo data for students
  const [grades, setGrades] = useState({});

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

  const handleGradeChange = (studentId, grade) => {
    setGrades({...grades, [studentId]: grade});
  };

  const handleSaveGrades = () => {
    // Simulating batch saving grades
    Alert.alert('Grades saved successfully');
    setGrades({});

    // Uncomment for actual Firebase usage
    // const batch = firestore().batch();
    // Object.keys(grades).forEach(studentId => {
    //   const ref = firestore().collection('grades').doc(studentId);
    //   batch.set(ref, {studentId, grade: grades[studentId]});
    // });
    // batch
    //   .commit()
    //   .then(() => {
    //     Alert.alert('Grades saved successfully');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error saving grades', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Student Grades</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.student}>
            <Text style={styles.studentName}>{item.name}</Text>
            <TextInput
              style={styles.input}
              placeholder="Grade"
              onChangeText={grade => handleGradeChange(item.id, grade)}
              value={grades[item.id] || ''}
              keyboardType="numeric"
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveGrades}>
        <Text style={styles.saveButtonText}>Save Grades</Text>
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  student: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    width: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
