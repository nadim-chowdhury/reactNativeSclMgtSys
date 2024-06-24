import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import {firestore} from '../lib/firebase';

export default function ManageSchedule() {
  const [teachers, setTeachers] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [teacherId, setTeacherId] = useState('');
  const [classDetails, setClassDetails] = useState('');

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

  const handleAddSchedule = () => {
    firestore()
      .collection('schedules')
      .add({teacherId, classDetails})
      .then(() => {
        Alert.alert('Schedule added successfully');
        setTeacherId('');
        setClassDetails('');
      })
      .catch(error => {
        Alert.alert('Error adding schedule', error.message);
      });
  };

  return (
    <View style={styles.container}>
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
      <Button title="Add Schedule" onPress={handleAddSchedule} />
      <FlatList
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.teacher}>
            <Text>{item.name}</Text>
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
  teacher: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
