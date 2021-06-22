import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDP-blEOOrCl254cXcSKwg909MfitcDQrA",
    authDomain: "twitterclone-467d4.firebaseapp.com",
    projectId: "twitterclone-467d4",
    storageBucket: "twitterclone-467d4.appspot.com",
    messagingSenderId: "848974323707",
    appId: "1:848974323707:web:cce76067726802d227755e",
    measurementId: "G-Y4P805VXVR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;