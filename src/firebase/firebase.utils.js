import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCR6YymPBobqL5mu1MUpS95RVssAEMp-e8",
  authDomain: "pauz-db.firebaseapp.com",
  databaseURL: "https://pauz-db.firebaseio.com",
  projectId: "pauz-db",
  storageBucket: "pauz-db.appspot.com",
  messagingSenderId: "246061100968",
  appId: "1:246061100968:web:4561eaf2cf69868c3bb79d",
  measurementId: "G-CYCNBDWNGN"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
