import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
// import {firestore} from '../lib/firebase'; // Uncomment when using Firebase

export default function EnrollStudent() {
  const [name, setName] = useState('John Doe'); // Demo data
  const [email, setEmail] = useState('johndoe@example.com'); // Demo data

  const handleEnroll = () => {
    // Simulated success message
    Alert.alert('Student enrolled successfully');
    setName('');
    setEmail('');

    // Uncomment for actual Firebase usage
    // firestore()
    //   .collection('students')
    //   .add({name, email})
    //   .then(() => {
    //     Alert.alert('Student enrolled successfully');
    //     setName('');
    //     setEmail('');
    //   })
    //   .catch(error => {
    //     Alert.alert('Error enrolling student', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enroll New Student</Text>

      <TextInput
        placeholder="Student Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Student Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={[
          styles.enrollButton,
          (!name || !email) && styles.disabledButton,
        ]}
        onPress={handleEnroll}
        disabled={!name || !email}>
        <Text style={styles.enrollButtonText}>Enroll Student</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
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
  enrollButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
