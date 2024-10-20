import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StudentList() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Student List</Text>
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
    color: '#333',
  },
});
