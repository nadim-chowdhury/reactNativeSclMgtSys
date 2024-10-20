import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ReportsManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Manage Reports</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProgressReports')}>
        <Text style={styles.buttonText}>Progress Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AttendanceReports')}>
        <Text style={styles.buttonText}>Attendance Reports</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
