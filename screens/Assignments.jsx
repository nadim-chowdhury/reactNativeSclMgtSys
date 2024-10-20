import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment when using Firebase

export default function Assignments() {
  const [assignments, setAssignments] = useState([
    {id: '1', title: 'Math Homework', description: 'Complete exercises 1-10'},
    {id: '2', title: 'Science Project', description: 'Build a volcano model'},
    {id: '3', title: 'History Essay', description: 'Write about World War II'},
  ]); // Demo data for assignments
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
  //   firestore()
  //     .collection('assignments')
  //     .get()
  //     .then(querySnapshot => {
  //       const assignmentsData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         assignmentsData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setAssignments(assignmentsData);
  //     });
  // }, []);

  const handleAddAssignment = () => {
    const newAssignment = {
      id: (assignments.length + 1).toString(),
      title,
      description,
    };
    setAssignments([newAssignment, ...assignments]);
    setTitle('');
    setDescription('');
    Alert.alert('Assignment added successfully');

    // Uncomment for actual Firebase usage
    // firestore()
    //   .collection('assignments')
    //   .add({title, description})
    //   .then(() => {
    //     Alert.alert('Assignment added successfully');
    //     setTitle('');
    //     setDescription('');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error adding assignment', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Assignments</Text>

      <TextInput
        placeholder="Assignment Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Assignment Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline={true}
        numberOfLines={3}
      />
      <TouchableOpacity
        style={[
          styles.addButton,
          (!title || !description) && styles.disabledButton,
        ]}
        onPress={handleAddAssignment}
        disabled={!title || !description}>
        <Text style={styles.addButtonText}>Add Assignment</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Assignment List</Text>
      <FlatList
        data={assignments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.assignment}>
            <Text style={styles.assignmentTitle}>{item.title}</Text>
            <Text style={styles.assignmentDescription}>{item.description}</Text>
          </TouchableOpacity>
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
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
    color: '#333',
  },
  assignment: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  assignmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 5,
  },
  assignmentDescription: {
    fontSize: 16,
    color: '#333',
  },
});
