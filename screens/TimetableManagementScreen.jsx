import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function TimetableManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="View Timetable"
        onPress={() => navigation.navigate('ViewTimetable')}
      />
      <Button
        title="Manage Timetable"
        onPress={() => navigation.navigate('ManageTimetable')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
