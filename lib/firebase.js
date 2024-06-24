import * as firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NativeModules} from 'react-native';
const {
  YOUR_API_KEY,
  YOUR_AUTH_DOMAIN,
  YOUR_PROJECT_ID,
  YOUR_STORAGE_BUCKET,
  YOUR_MESSAGING_SENDER_ID,
  YOUR_APP_ID,
} = NativeModules.env;

// Your Firebase configuration
const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APP_ID,
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export Firebase and Firebase modules
export {firebase, auth, firestore};
