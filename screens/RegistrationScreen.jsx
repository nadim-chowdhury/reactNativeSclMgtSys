import React, {useState} from 'react';
import {View, TextInput, Button, Picker, Text} from 'react-native';
import {auth, firestore} from '../lib/firebase';

export default function RegistrationScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Save user role in Firestore
        return firestore()
          .collection('users')
          .doc(userCredential.user.uid)
          .set({role});
      })
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Picker selectedValue={role} onValueChange={setRole}>
        <Picker.Item label="Admin" value="Admin" />
        <Picker.Item label="Teacher" value="Teacher" />
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Parent" value="Parent" />
      </Picker>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
