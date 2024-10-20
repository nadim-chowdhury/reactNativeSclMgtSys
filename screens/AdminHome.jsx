import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const demoData = {
  totalStudents: 500,
  totalTeachers: 35,
  recentActivities: [
    {id: '1', activity: 'Added new student: John Doe'},
    {id: '2', activity: 'Scheduled meeting with parents'},
    {id: '3', activity: 'Updated exam timetable'},
  ],
};

export default function AdminHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Admin Dashboard</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{demoData.totalStudents}</Text>
          <Text style={styles.statLabel}>Total Students</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{demoData.totalTeachers}</Text>
          <Text style={styles.statLabel}>Total Teachers</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Recent Activities</Text>
      <FlatList
        data={demoData.recentActivities}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.activityItem}>
            <Text style={styles.activityText}>{item.activity}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: '#4caf50', // Green background for a fresh look
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%', // Make boxes occupy equal space
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  activityText: {
    fontSize: 16,
    color: '#333',
  },
});
