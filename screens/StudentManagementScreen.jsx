import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function StudentManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="Enroll Students"
        onPress={() => navigation.navigate('EnrollStudent')}
      />
      <Button
        title="View Attendance"
        onPress={() => navigation.navigate('Attendance')}
      />
      <Button
        title="View Grades"
        onPress={() => navigation.navigate('Grades')}
      />
      <Button
        title="View Assignments"
        onPress={() => navigation.navigate('Assignments')}
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
