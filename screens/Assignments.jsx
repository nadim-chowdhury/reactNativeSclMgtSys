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

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    firestore()
      .collection('assignments')
      .get()
      .then(querySnapshot => {
        const assignmentsData = [];
        querySnapshot.forEach(documentSnapshot => {
          assignmentsData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setAssignments(assignmentsData);
      });
  }, []);

  const handleAddAssignment = () => {
    firestore()
      .collection('assignments')
      .add({title, description})
      .then(() => {
        Alert.alert('Assignment added successfully');
        setTitle('');
        setDescription('');
      })
      .catch(error => {
        Alert.alert('Error adding assignment', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Assignment" onPress={handleAddAssignment} />

      <FlatList
        data={assignments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.assignment}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  assignment: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
