import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Reports() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reports</Text>
      <View style={styles.reportCard}>
        <Text style={styles.reportText}>Attendance Report: Complete</Text>
      </View>
      <View style={styles.reportCard}>
        <Text style={styles.reportText}>Progress Report: In Progress</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  reportText: {
    fontSize: 18,
    color: '#333',
  },
});
