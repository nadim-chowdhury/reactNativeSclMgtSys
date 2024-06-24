import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {firestore} from '../lib/firebase';

export default function ProgressReports() {
  const [progressReports, setProgressReports] = useState([]);

  useEffect(() => {
    firestore()
      .collection('progressReports')
      .get()
      .then(querySnapshot => {
        const reportsData = [];
        querySnapshot.forEach(documentSnapshot => {
          reportsData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setProgressReports(reportsData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={progressReports}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.reportItem}>
            <Text>Student: {item.studentName}</Text>
            <Text>Grade: {item.grade}</Text>
            <Text>Comments: {item.comments}</Text>
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
  reportItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
