import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCvruhTxhrdvV---keGzIFvRhNpa-PDm0s',
  authDomain: 'musicapp168.firebaseapp.com',
  projectId: 'musicapp168',
  storageBucket: 'musicapp168.appspot.com',
  appId: '1:813260376075:web:b17ac119bdce8eeeecdf0e',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection('users');
export {
  auth,
  db,
  userCollection,
};
