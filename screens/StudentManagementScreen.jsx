import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function StudentManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Student Management</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EnrollStudent')}>
        <Text style={styles.buttonText}>Enroll Students</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Attendance')}>
        <Text style={styles.buttonText}>View Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Grades')}>
        <Text style={styles.buttonText}>View Grades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Assignments')}>
        <Text style={styles.buttonText}>View Assignments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
