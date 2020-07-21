import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyALt_1RHf_jKKbzj2RjW2TRsnOm1cOG7nA",
  authDomain: "crwn-db-2dc1c.firebaseapp.com",
  databaseURL: "https://crwn-db-2dc1c.firebaseio.com",
  projectId: "crwn-db-2dc1c",
  storageBucket: "crwn-db-2dc1c.appspot.com",
  messagingSenderId: "481534930952",
  appId: "1:481534930952:web:ecab515d11412e7bfee1bd"
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
