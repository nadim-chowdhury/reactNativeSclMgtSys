import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function TeacherManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="Manage Schedule"
        onPress={() => navigation.navigate('ManageSchedule')}
      />
      <Button
        title="Manage Classes"
        onPress={() => navigation.navigate('ManageClasses')}
      />
      <Button
        title="Teacher Attendance"
        onPress={() => navigation.navigate('TeacherAttendance')}
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
