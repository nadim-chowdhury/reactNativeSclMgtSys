import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, TextInput, StyleSheet} from 'react-native';
import {firestore, auth} from '../lib/firebase';

export default function CommunicationScreen({navigation}) {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        const usersData = [];
        querySnapshot.forEach(documentSnapshot => {
          usersData.push({id: documentSnapshot.id, ...documentSnapshot.data()});
        });
        setUsers(usersData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search user by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <FlatList
        data={users.filter(user =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.userItem}>
            <Button
              title={item.name}
              onPress={() =>
                navigation.navigate('Chat', {
                  recipientId: item.id,
                  recipientName: item.name,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  userItem: {
    marginVertical: 10,
  },
});
