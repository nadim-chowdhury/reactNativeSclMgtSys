import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment this when using Firebase

export default function Communicate() {
  const [teachers, setTeachers] = useState([
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Smith'},
    {id: '3', name: 'Samuel Green'},
    {id: '4', name: 'Alice Johnson'},
  ]); // Demo data for teachers
  const [message, setMessage] = useState('');
  const [teacherId, setTeacherId] = useState('');

  // useEffect(() => {
  //   firestore()
  //     .collection('teachers')
  //     .get()
  //     .then(querySnapshot => {
  //       const teachersData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         teachersData.push({
  //           id: documentSnapshot.id,
  //           ...documentSnapshot.data(),
  //         });
  //       });
  //       setTeachers(teachersData);
  //     });
  // }, []);

  const handleSendMessage = () => {
    // Simulated alert to mimic message sending
    Alert.alert('Message sent successfully');
    setMessage('');
    setTeacherId('');

    // Actual Firebase logic goes here
    // firestore()
    //   .collection('messages')
    //   .add({teacherId, message, date: new Date().toISOString()})
    //   .then(() => {
    //     Alert.alert('Message sent successfully');
    //     setMessage('');
    //     setTeacherId('');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error sending message', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a Teacher</Text>
      <FlatList
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.teacher,
              teacherId === item.id && styles.selectedTeacher,
            ]}
            onPress={() => setTeacherId(item.id)}>
            <Text style={styles.teacherName}>{item.name}</Text>
            <Text style={styles.selectText}>
              {teacherId === item.id ? 'Selected' : 'Select'}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        placeholder="Type your message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <TouchableOpacity
        style={[
          styles.sendButton,
          (!teacherId || !message) && styles.disabledButton,
        ]}
        onPress={handleSendMessage}
        disabled={!teacherId || !message}>
        <Text style={styles.sendButtonText}>Send Message</Text>
      </TouchableOpacity>
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
  teacher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedTeacher: {
    backgroundColor: '#d1f7c4', // Light green for selected teacher
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  selectText: {
    fontSize: 16,
    color: '#4caf50', // Green for "Select" text
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
  sendButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Light gray for disabled state
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
