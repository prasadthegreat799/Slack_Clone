import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZLsV38_HN7atlri05l9Wh-5lLjhAfsQU",
    authDomain: "infosnity-40bb1.firebaseapp.com",
    projectId: "infosnity-40bb1",
    storageBucket: "infosnity-40bb1.appspot.com",
    messagingSenderId: "368058030601",
    appId: "1:368058030601:web:186817d33f39e546bf36d8",
    measurementId: "G-JXBCJ95ET0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;