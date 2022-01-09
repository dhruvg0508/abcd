import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDoqF9QjHJFJihABJaX7t0_xgMgn3Z1ymc",
    authDomain: "team-voting-a2225.firebaseapp.com",
    databaseURL: "https://team-voting-a2225-default-rtdb.firebaseio.com",
    projectId: "team-voting-a2225",
    storageBucket: "team-voting-a2225.appspot.com",
    messagingSenderId: "125713420419",
    appId: "1:125713420419:web:9bcc18feb849f80bca0bb6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();