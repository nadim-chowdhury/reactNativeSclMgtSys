import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {firestore} from '../lib/firebase';

export default function EnrollStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleEnroll = () => {
    firestore()
      .collection('students')
      .add({name, email})
      .then(() => {
        Alert.alert('Student enrolled successfully');
        setName('');
        setEmail('');
      })
      .catch(error => {
        Alert.alert('Error enrolling student', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Enroll Student" onPress={handleEnroll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
