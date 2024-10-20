import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import {firestore, auth} from '../lib/firebase'; // Uncomment when using Firebase

export default function ChatScreen({route}) {
  const {recipientId, recipientName} = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello!', senderId: '123', recipientId: '456'},
    {id: '2', text: 'Hi, how are you?', senderId: '456', recipientId: '123'},
    {id: '3', text: 'I am fine, thanks!', senderId: '123', recipientId: '456'},
  ]); // Demo messages
  const userId = '123'; // Demo userId. Replace with auth().currentUser.uid when using Firebase.

  useEffect(() => {
    // Firebase logic to fetch messages can be uncommented when using Firebase.
    // const unsubscribe = firestore()
    //   .collection('messages')
    //   .where('participants', 'array-contains', userId)
    //   .orderBy('createdAt', 'desc')
    //   .onSnapshot(querySnapshot => {
    //     const messagesData = [];
    //     querySnapshot.forEach(documentSnapshot => {
    //       const data = documentSnapshot.data();
    //       if (data.participants.includes(recipientId)) {
    //         messagesData.push({id: documentSnapshot.id, ...data});
    //       }
    //     });
    //     setMessages(messagesData);
    //   });
    // return () => unsubscribe();
  }, [recipientId, userId]);

  const handleSendMessage = () => {
    // Simulating message send
    const newMessage = {
      id: (messages.length + 1).toString(),
      text: message,
      senderId: userId,
      recipientId: recipientId,
    };
    setMessages([newMessage, ...messages]);
    setMessage('');

    // Firebase logic can go here to send the message.
    // firestore()
    //   .collection('messages')
    //   .add(newMessage)
    //   .then(() => setMessage(''))
    //   .catch(error => console.error('Error sending message: ', error));
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
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendMessage}
          disabled={!message}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  recipientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Light green for sent messages
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA', // Light gray for received messages
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
});
