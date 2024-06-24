import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import {firestore, auth} from '../lib/firebase';

export default function ChatScreen({route}) {
  const {recipientId, recipientName} = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const userId = auth().currentUser.uid;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('messages')
      .where('participants', 'array-contains', userId)
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messagesData = [];
        querySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          if (data.participants.includes(recipientId)) {
            messagesData.push({id: documentSnapshot.id, ...data});
          }
        });
        setMessages(messagesData);
      });

    return () => unsubscribe();
  }, [recipientId, userId]);

  const handleSendMessage = () => {
    const newMessage = {
      text: message,
      senderId: userId,
      recipientId: recipientId,
      participants: [userId, recipientId],
      createdAt: firestore.FieldValue.serverTimestamp(),
    };

    firestore()
      .collection('messages')
      .add(newMessage)
      .then(() => {
        setMessage('');
      })
      .catch(error => {
        console.error('Error sending message: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.recipientName}>Chat with {recipientName}</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={
              item.senderId === userId
                ? styles.sentMessage
                : styles.receivedMessage
            }>
            <Text>{item.text}</Text>
          </View>
        )}
        inverted
      />
      <TextInput
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <Button title="Send" onPress={handleSendMessage} disabled={!message} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recipientName: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});
