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

export default function ManageTimetable() {
  const [className, setClassName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    firestore()
      .collection('timetable')
      .get()
      .then(querySnapshot => {
        const timetableData = [];
        querySnapshot.forEach(documentSnapshot => {
          timetableData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setTimetable(timetableData);
      });
  }, []);

  const handleAddSchedule = () => {
    const newSchedule = {className, teacherName, time, day};
    firestore()
      .collection('timetable')
      .add(newSchedule)
      .then(() => {
        Alert.alert('Schedule added successfully');
        setTimetable([
          ...timetable,
          {id: new Date().getTime().toString(), ...newSchedule},
        ]);
        setClassName('');
        setTeacherName('');
        setTime('');
        setDay('');
      })
      .catch(error => {
        Alert.alert('Error adding schedule', error.message);
      });
  };

  const handleDeleteSchedule = id => {
    firestore()
      .collection('timetable')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Schedule deleted successfully');
        setTimetable(timetable.filter(item => item.id !== id));
      })
      .catch(error => {
        Alert.alert('Error deleting schedule', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Class Name"
        value={className}
        onChangeText={setClassName}
        style={styles.input}
      />
      <TextInput
        placeholder="Teacher Name"
        value={teacherName}
        onChangeText={setTeacherName}
        style={styles.input}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Day"
        value={day}
        onChangeText={setDay}
        style={styles.input}
      />
      <Button title="Add Schedule" onPress={handleAddSchedule} />
      <FlatList
        data={timetable}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.scheduleItem}>
            <Text>Class: {item.className}</Text>
            <Text>Teacher: {item.teacherName}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Day: {item.day}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteSchedule(item.id)}
            />
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
  scheduleItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
