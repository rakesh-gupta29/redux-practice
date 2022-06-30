import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAcxggWmJ7CDQrJYWJvCxQI8NPl0rtwbk8",
  authDomain: "brebeltesting.firebaseapp.com",
  databaseURL: "https://brebeltesting-default-rtdb.firebaseio.com",
  projectId: "brebeltesting",
  storageBucket: "brebeltesting.appspot.com",
  messagingSenderId: "443760391074",
  appId: "1:443760391074:web:2a34f064a91bab676978fb",
  measurementId: "G-EX89K4JGG3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage();

export { auth, firestore, storage, firebase }
