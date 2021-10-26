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
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const storage = firebase.storage();

// Helper functions
/**
 *
 * @param {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 *
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
