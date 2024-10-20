import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment when using Firebase
// import notifee from '@notifee/react-native'; // Uncomment when using Notifee

export default function AddNotification() {
  const [title, setTitle] = useState('Event Reminder'); // Demo data
  const [message, setMessage] = useState(
    'Remember to attend the meeting tomorrow.',
  ); // Demo data
  const [date, setDate] = useState('2024-10-25 10:00:00'); // Demo data

  const handleAddNotification = async () => {
    // Simulating notification creation success
    Alert.alert('Notification added successfully');
    setTitle('');
    setMessage('');
    setDate('');

    // Uncomment below for actual Firebase and Notifee usage
    // try {
    //   await firestore().collection('notifications').add({
    //     title,
    //     message,
    //     date,
    //   });

    //   // Schedule local notification
    //   await notifee.createTriggerNotification(
    //     {
    //       title: title,
    //       body: message,
    //       android: {
    //         channelId: 'default',
    //       },
    //     },
    //     {
    //       type: notifee.TriggerType.TIMESTAMP,
    //       timestamp: new Date(date).getTime(), // Fire at specific date/time
    //     },
    //   );

    //   Alert.alert('Notification added successfully');
    //   setTitle('');
    //   setMessage('');
    //   setDate('');
    // } catch (error) {
    //   Alert.alert('Error adding notification', error.message);
    // }
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
        multiline={true}
        numberOfLines={4}
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD HH:MM:SS)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Notification" onPress={handleAddNotification} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#4caf50',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
