import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
// import {auth, firestore} from '../lib/firebase'; // Uncomment when using Firebase

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('admin@example.com'); // Demo data
  const [password, setPassword] = useState('password123'); // Demo data

  const handleLogin = () => {
    // Simulating login success and role-based navigation
    const demoRole = 'Admin'; // This could be 'Admin', 'Teacher', 'Student', or 'Parent'

    Alert.alert('Login successful');
    if (demoRole === 'Admin') {
      navigation.navigate('Dashboard');
    } else if (demoRole === 'Teacher') {
      navigation.navigate('TeacherHome');
    } else if (demoRole === 'Student') {
      navigation.navigate('StudentHome');
    } else if (demoRole === 'Parent') {
      navigation.navigate('ParentHome');
    }

    // Uncomment for actual Firebase usage
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(userCredential => {
    //     return firestore()
    //       .collection('users')
    //       .doc(userCredential.user.uid)
    //       .get();
    //   })
    //   .then(userDoc => {
    //     const role = userDoc.data().role;
    //     if (role === 'Admin') {
    //       navigation.navigate('Dashboard');
    //     } else if (role === 'Teacher') {
    //       navigation.navigate('TeacherHome');
    //     } else if (role === 'Student') {
    //       navigation.navigate('StudentHome');
    //     } else if (role === 'Parent') {
    //       navigation.navigate('ParentHome');
    //     }
    //   })
    //   .catch(error => {
    //     Alert.alert('Login failed', error.message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>

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

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
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
  loginButton: {
    backgroundColor: '#841584',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
