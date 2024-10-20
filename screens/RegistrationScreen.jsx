import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
// import {Picker} from '@react-native-picker/picker'; // Uncomment for using Picker
// import {auth, firestore} from '../lib/firebase'; // Uncomment for Firebase

export default function RegistrationScreen({navigation}) {
  const [email, setEmail] = useState('johndoe@example.com'); // Demo email
  const [password, setPassword] = useState('password123'); // Demo password
  const [role, setRole] = useState('Student');

  const handleRegister = () => {
    // Simulated registration flow for demo purposes
    alert('Registration successful');
    navigation.navigate('Login');

    // Uncomment for Firebase usage
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(userCredential => {
    //     return firestore()
    //       .collection('users')
    //       .doc(userCredential.user.uid)
    //       .set({role});
    //   })
    //   .then(() => {
    //     navigation.navigate('Login');
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Text style={styles.label}>Select Role</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          onValueChange={setRole}
          style={styles.picker}>
          <Picker.Item label="Admin" value="Admin" />
          <Picker.Item label="Teacher" value="Teacher" />
          <Picker.Item label="Student" value="Student" />
          <Picker.Item label="Parent" value="Parent" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
