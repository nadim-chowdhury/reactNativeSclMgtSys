import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export default function DashboardScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Dashboard</Text>
        <Text style={styles.subheader}>Quick Overview</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Student Management</Text>
        <Button
          title="View Students"
          onPress={() => navigation.navigate('StudentList')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Teacher Management</Text>
        <Button
          title="View Teachers"
          onPress={() => navigation.navigate('TeacherList')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notifications</Text>
        <Button
          title="View Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Reports</Text>
        <Button
          title="View Reports"
          onPress={() => navigation.navigate('Reports')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
