import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {firestore} from '../lib/firebase';

export default function Communicate() {
  const [teachers, setTeachers] = useState([]);
  const [message, setMessage] = useState('');
  const [teacherId, setTeacherId] = useState('');

  useEffect(() => {
    firestore()
      .collection('teachers')
      .get()
      .then(querySnapshot => {
        const teachersData = [];
        querySnapshot.forEach(documentSnapshot => {
          teachersData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setTeachers(teachersData);
      });
  }, []);

  const handleSendMessage = () => {
    firestore()
      .collection('messages')
      .add({teacherId, message, date: new Date().toISOString()})
      .then(() => {
        Alert.alert('Message sent successfully');
        setMessage('');
        setTeacherId('');
      })
      .catch(error => {
        Alert.alert('Error sending message', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.teacher}>
            <Text>{item.name}</Text>
            <Button title="Select" onPress={() => setTeacherId(item.id)} />
          </View>
        )}
      />
      <TextInput
        placeholder="Type your message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <Button
        title="Send Message"
        onPress={handleSendMessage}
        disabled={!teacherId || !message}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  teacher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
