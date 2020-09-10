import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCfOp2I5V3FdFdlE2y8fAAcgHCatGB026A",
    authDomain: "login-2ee79.firebaseapp.com",
    databaseURL: "https://login-2ee79.firebaseio.com",
    projectId: "login-2ee79",
    storageBucket: "login-2ee79.appspot.com",
    messagingSenderId: "54548745246",
    appId: "1:54548745246:web:58fcdc4dc941d0a241720f"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;