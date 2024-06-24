import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function ReportsManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="Progress Reports"
        onPress={() => navigation.navigate('ProgressReports')}
      />
      <Button
        title="Attendance Reports"
        onPress={() => navigation.navigate('AttendanceReports')}
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
