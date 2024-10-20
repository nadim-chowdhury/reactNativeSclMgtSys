import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function ViewNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Meeting Reminder',
      message: 'Staff meeting at 3 PM',
      date: '2024-10-20',
    },
    {
      id: '2',
      title: 'Holiday',
      message: 'School closed on Friday',
      date: '2024-10-22',
    },
  ]); // Demo data for notifications

  // Uncomment for Firebase data
  // useEffect(() => {
  //   firestore()
  //     .collection('notifications')
  //     .get()
  //     .then(querySnapshot => {
  //       const notificationsData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         notificationsData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setNotifications(notificationsData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.notificationItem}>
            <Text style={styles.title}>Title: {item.title}</Text>
            <Text>Message: {item.message}</Text>
            <Text>Date: {item.date}</Text>
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
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
