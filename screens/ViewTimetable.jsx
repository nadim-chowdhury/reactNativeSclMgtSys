import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function ViewTimetable() {
  const [timetable, setTimetable] = useState([
    {
      id: '1',
      className: 'Math Class',
      teacherName: 'Mr. John Doe',
      time: '10:00 AM',
      day: 'Monday',
    },
    {
      id: '2',
      className: 'Science Class',
      teacherName: 'Ms. Jane Smith',
      time: '11:00 AM',
      day: 'Tuesday',
    },
  ]); // Demo data for timetable

  // Uncomment for Firebase data
  // useEffect(() => {
  //   firestore()
  //     .collection('timetable')
  //     .get()
  //     .then(querySnapshot => {
  //       const timetableData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         timetableData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setTimetable(timetableData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.classText}>Class: {item.className}</Text>
            <Text>Teacher: {item.teacherName}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Day: {item.day}</Text>
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
  classText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
