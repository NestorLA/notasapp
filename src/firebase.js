 import firebase from "firebase/app";

 import "firebase/firestore"
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCZ1mm9-H3z8pc0wUtP99lQMy_XrSjtGjc",
    authDomain: "notesapp-fb.firebaseapp.com",
    projectId: "notesapp-fb",
    storageBucket: "notesapp-fb.appspot.com",
    messagingSenderId: "289563453513",
    appId: "1:289563453513:web:38c7f3ade7e5b7a979b798"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

