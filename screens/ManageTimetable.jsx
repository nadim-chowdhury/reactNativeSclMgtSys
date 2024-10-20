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

export default function ManageTimetable() {
  const [className, setClassName] = useState('Math Class'); // Demo data
  const [teacherName, setTeacherName] = useState('Mr. John Doe'); // Demo data
  const [time, setTime] = useState('10:00 AM'); // Demo data
  const [day, setDay] = useState('Monday'); // Demo data
  const [timetable, setTimetable] = useState([
    {
      id: '1',
      className: 'Science Class',
      teacherName: 'Mrs. Jane Smith',
      time: '11:00 AM',
      day: 'Wednesday',
    },
  ]); // Demo data for timetable

  const handleAddSchedule = () => {
    const newSchedule = {className, teacherName, time, day};
    // Simulate adding a new schedule
    Alert.alert('Schedule added successfully');
    setTimetable([
      ...timetable,
      {id: new Date().getTime().toString(), ...newSchedule},
    ]);
    setClassName('');
    setTeacherName('');
    setTime('');
    setDay('');

    // Uncomment for actual Firebase usage
    // firestore()
    //   .collection('timetable')
    //   .add(newSchedule)
    //   .then(() => {
    //     Alert.alert('Schedule added successfully');
    //     setTimetable([...timetable, {id: new Date().getTime().toString(), ...newSchedule}]);
    //     setClassName('');
    //     setTeacherName('');
    //     setTime('');
    //     setDay('');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error adding schedule', error.message);
    //   });
  };

  const handleDeleteSchedule = id => {
    // Simulate deleting a schedule
    Alert.alert('Schedule deleted successfully');
    setTimetable(timetable.filter(item => item.id !== id));

    // Uncomment for actual Firebase usage
    // firestore()
    //   .collection('timetable')
    //   .doc(id)
    //   .delete()
    //   .then(() => {
    //     Alert.alert('Schedule deleted successfully');
    //     setTimetable(timetable.filter(item => item.id !== id));
    //   })
    //   .catch(error => {
    //     Alert.alert('Error deleting schedule', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Manage Timetable</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleAddSchedule}>
        <Text style={styles.buttonText}>Add Schedule</Text>
      </TouchableOpacity>
      <FlatList
        data={timetable}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.scheduleItem}>
            <Text>Class: {item.className}</Text>
            <Text>Teacher: {item.teacherName}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Day: {item.day}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteSchedule(item.id)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
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
  scheduleItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
