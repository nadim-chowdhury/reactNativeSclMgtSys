import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function ProgressReports() {
  const [progressReports, setProgressReports] = useState([
    {
      id: '1',
      studentName: 'John Doe',
      grade: 'A',
      comments: 'Excellent performance',
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      grade: 'B+',
      comments: 'Good progress, needs improvement in math',
    },
    {
      id: '3',
      studentName: 'Samuel Green',
      grade: 'A-',
      comments: 'Great effort in science',
    },
  ]); // Demo data for progress reports

  // Uncomment for Firebase data
  // useEffect(() => {
  //   firestore()
  //     .collection('progressReports')
  //     .get()
  //     .then(querySnapshot => {
  //       const reportsData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         reportsData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setProgressReports(reportsData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Progress Reports</Text>
      <FlatList
        data={progressReports}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.reportItem}>
            <Text style={styles.reportText}>Student: {item.studentName}</Text>
            <Text style={styles.reportText}>Grade: {item.grade}</Text>
            <Text style={styles.reportText}>Comments: {item.comments}</Text>
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
  reportItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  reportText: {
    fontSize: 16,
    color: '#333',
  },
});
