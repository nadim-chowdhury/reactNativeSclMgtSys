import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {firestore} from '../lib/firebase';

export default function ViewNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    firestore()
      .collection('notifications')
      .get()
      .then(querySnapshot => {
        const notificationsData = [];
        querySnapshot.forEach(documentSnapshot => {
          notificationsData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setNotifications(notificationsData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.notificationItem}>
            <Text>Title: {item.title}</Text>
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
  },
  notificationItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
