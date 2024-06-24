import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function NotificationsManagementScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="View Notifications"
        onPress={() => navigation.navigate('ViewNotifications')}
      />
      <Button
        title="Add Notification"
        onPress={() => navigation.navigate('AddNotification')}
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
