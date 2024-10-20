import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {firestore, auth} from '../lib/firebase'; // Uncomment when using Firebase

export default function CommunicationScreen({navigation}) {
  const [users, setUsers] = useState([
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Smith'},
    {id: '3', name: 'Sam Wilson'},
    {id: '4', name: 'Alice Johnson'},
  ]); // Demo data for users
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   firestore()
  //     .collection('users')
  //     .get()
  //     .then(querySnapshot => {
  //       const usersData = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         usersData.push({id: documentSnapshot.id, ...documentSnapshot.data()});
  //       });
  //       setUsers(usersData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Search Users</Text>
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
          <TouchableOpacity
            style={styles.userItem}
            onPress={() =>
              navigation.navigate('Chat', {
                recipientId: item.id,
                recipientName: item.name,
              })
            }>
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.noResultsText}>No users found</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  userItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
