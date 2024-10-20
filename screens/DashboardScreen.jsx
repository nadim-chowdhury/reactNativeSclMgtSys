import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function DashboardScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Dashboard</Text>
        <Text style={styles.subheader}>
          Welcome back! Here's a quick overview.
        </Text>
      </View>

      {/* Summary Section with demo data */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>120</Text>
          <Text style={styles.summaryLabel}>Students</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>15</Text>
          <Text style={styles.summaryLabel}>Teachers</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>8</Text>
          <Text style={styles.summaryLabel}>Notifications</Text>
        </View>
      </View>

      {/* Quick Action Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Student Management</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StudentList')}>
          <Text style={styles.buttonText}>View Students</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Teacher Management</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeacherList')}>
          <Text style={styles.buttonText}>View Teachers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notifications</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.buttonText}>View Notifications</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Reports</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Reports')}>
          <Text style={styles.buttonText}>View Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginVertical: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#333',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
