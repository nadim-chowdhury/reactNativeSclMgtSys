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

export default function ManageClasses() {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState({});
  const [teacherId, setTeacherId] = useState('');
  const [className, setClassName] = useState('');

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

  const handleAddClass = () => {
    firestore()
      .collection('classes')
      .add({teacherId, className})
      .then(() => {
        Alert.alert('Class assigned successfully');
        setTeacherId('');
        setClassName('');
      })
      .catch(error => {
        Alert.alert('Error assigning class', error.message);
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
        placeholder="Class Name"
        value={className}
        onChangeText={setClassName}
        style={styles.input}
      />
      <Button title="Assign Class" onPress={handleAddClass} />
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
