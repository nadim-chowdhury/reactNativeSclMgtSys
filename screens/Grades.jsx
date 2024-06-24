import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import {firestore} from '../lib/firebase';

export default function Grades() {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});

  useEffect(() => {
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

  const handleGradeChange = (studentId, grade) => {
    setGrades({...grades, [studentId]: grade});
  };

  const handleSaveGrades = () => {
    const batch = firestore().batch();

    Object.keys(grades).forEach(studentId => {
      const ref = firestore().collection('grades').doc(studentId);
      batch.set(ref, {studentId, grade: grades[studentId]});
    });

    batch
      .commit()
      .then(() => {
        Alert.alert('Grades saved successfully');
      })
      .catch(error => {
        Alert.alert('Error saving grades', error.message);
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
            <TextInput
              style={styles.input}
              placeholder="Grade"
              onChangeText={grade => handleGradeChange(item.id, grade)}
              value={grades[item.id] || ''}
            />
          </View>
        )}
      />
      <Button title="Save Grades" onPress={handleSaveGrades} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 100,
  },
});
