import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ParentPortalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Parent Portal</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StudentInfo')}>
        <Text style={styles.buttonText}>View Student Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ParentGrades')}>
        <Text style={styles.buttonText}>View Grades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Communicate')}>
        <Text style={styles.buttonText}>Communicate with Teachers</Text>
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
