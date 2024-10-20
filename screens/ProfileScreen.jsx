import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://randomuser.me/api/portraits/men/32.jpg', // Demo profile picture
        }}
      />
      <Text style={styles.nameText}>John Doe</Text>
      <Text style={styles.infoText}>Parent of Jane Doe</Text>
      <Text style={styles.infoText}>Email: johndoe@example.com</Text>
      <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});
