import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {firestore} from '../lib/firebase';
// import notifee from '@notifee/react-native';

export default function AddNotification() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const handleAddNotification = async () => {
    try {
      await firestore().collection('notifications').add({
        title,
        message,
        date,
      });

      // Schedule local notification
      // await notifee.createTriggerNotification(
      //   {
      //     title: title,
      //     body: message,
      //     android: {
      //       channelId: 'default',
      //     },
      //   },
      //   {
      //     type: notifee.TriggerType.TIMESTAMP,
      //     timestamp: new Date(date).getTime(), // Fire at specific date/time
      //   },
      // );

      Alert.alert('Notification added successfully');
      setTitle('');
      setMessage('');
      setDate('');
    } catch (error) {
      Alert.alert('Error adding notification', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD HH:MM:SS)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Add Notification" onPress={handleAddNotification} />
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
});
