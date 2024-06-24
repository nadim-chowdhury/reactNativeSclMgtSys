import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {firestore} from '../lib/firebase';

export default function ViewTimetable() {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={timetable}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.scheduleItem}>
            <Text>Class: {item.className}</Text>
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
  },
  scheduleItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
