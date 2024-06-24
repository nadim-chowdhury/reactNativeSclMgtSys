import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function ParentPortalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="View Student Information"
        onPress={() => navigation.navigate('StudentInfo')}
      />
      <Button
        title="View Grades"
        onPress={() => navigation.navigate('ParentGrades')}
      />
      <Button
        title="Communicate with Teachers"
        onPress={() => navigation.navigate('Communicate')}
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
