import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBvDC1EDIXqATCH9Fomf7-T25KSac_-8oE',
  authDomain: 'crwn-db-895c2.firebaseapp.com',
  projectId: 'crwn-db-895c2',
  storageBucket: 'crwn-db-895c2.appspot.com',
  messagingSenderId: '757671436134',
  appId: '1:757671436134:web:d58400212336620aabb2a7',
  measurementId: 'G-0C50EVFTBF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
