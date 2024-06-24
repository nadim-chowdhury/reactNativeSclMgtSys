import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {auth, firestore} from '../lib/firebase';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Fetch user role from Firestore
        return firestore()
          .collection('users')
          .doc(userCredential.user.uid)
          .get();
      })
      .then(userDoc => {
        const role = userDoc.data().role;
        // Navigate based on user role
        if (role === 'Admin') {
          navigation.navigate('Dashboard');
        } else if (role === 'Teacher') {
          navigation.navigate('TeacherHome');
        } else if (role === 'Student') {
          navigation.navigate('StudentHome');
        } else if (role === 'Parent') {
          navigation.navigate('ParentHome');
        }
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
