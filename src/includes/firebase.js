import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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
const storage = firebase.storage();

db.enablePersistence().catch((err) => {
  console.log(`Firebase error ${err.code}`);
});

const userCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');
export {
  auth,
  db,
  userCollection,
  songsCollection,
  commentsCollection,
  storage,
};
