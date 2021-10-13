import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBN8PwiMRwUDr_5v6poF6JrgRvqyYvQPB0',
  authDomain: 'next-fire-cb.firebaseapp.com',
  projectId: 'next-fire-cb',
  storageBucket: 'next-fire-cb.appspot.com',
  messagingSenderId: '131835505198',
  appId: '1:131835505198:web:50380f7bc9bcb1e3e9cdbf',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
