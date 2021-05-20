import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDugfocY-sl8mZdpY9UgaqGktgphF6fjIo",
    authDomain: "bedtime-63356.firebaseapp.com",
    projectId: "bedtime-63356",
    storageBucket: "bedtime-63356.appspot.com",
    messagingSenderId: "677039832429",
    appId: "1:677039832429:web:fa7c46b941c4b7de092e64"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
