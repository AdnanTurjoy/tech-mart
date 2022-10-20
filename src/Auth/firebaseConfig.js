import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDUTJfq06D50iJfPd9CoAdv4P8zJSpa9vY",

  authDomain: "tech-mart-37f76.firebaseapp.com",

  projectId: "tech-mart-37f76",

  storageBucket: "tech-mart-37f76.appspot.com",

  messagingSenderId: "575600404619",

  appId: "1:575600404619:web:6ac921884d93c6e7654c8e",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
