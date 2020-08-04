import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1lVlpk-rb3gXK811qkqoz8VhkYN5jn3Y",
  authDomain: "react-firebase-photo-gal-2813b.firebaseapp.com",
  databaseURL: "https://react-firebase-photo-gal-2813b.firebaseio.com",
  projectId: "react-firebase-photo-gal-2813b",
  storageBucket: "react-firebase-photo-gal-2813b.appspot.com",
  messagingSenderId: "883520996663",
  appId: "1:883520996663:web:8758d95909535f0f9846b2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
