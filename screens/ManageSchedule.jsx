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

export default function ManageSchedule() {
  const [teachers, setTeachers] = useState([
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Smith'},
    {id: '3', name: 'Samuel Green'},
  ]); // Demo data for teachers
  const [teacherId, setTeacherId] = useState('');
  const [classDetails, setClassDetails] = useState('');

  const handleAddSchedule = () => {
    // Simulated alert to show success
    Alert.alert('Schedule added successfully');
    setTeacherId('');
    setClassDetails('');

    // Uncomment for actual Firebase usage
    // firestore()
    //   .collection('schedules')
    //   .add({teacherId, classDetails})
    //   .then(() => {
    //     Alert.alert('Schedule added successfully');
    //     setTeacherId('');
    //     setClassDetails('');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error adding schedule', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Manage Schedule</Text>
      <TextInput
        placeholder="Teacher ID"
        value={teacherId}
        onChangeText={setTeacherId}
        style={styles.input}
      />
      <TextInput
        placeholder="Class Details"
        value={classDetails}
        onChangeText={setClassDetails}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddSchedule}>
        <Text style={styles.buttonText}>Add Schedule</Text>
      </TouchableOpacity>
      <FlatList
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.teacher}>
            <Text style={styles.teacherName}>{item.name}</Text>
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  teacher: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  teacherName: {
    fontSize: 18,
    color: '#333',
  },
});
