import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDP-blEOOrCl254cXcSKwg909MfitcDQrA",
//     authDomain: "twitterclone-467d4.firebaseapp.com",
//     projectId: "twitterclone-467d4",
//     storageBucket: "twitterclone-467d4.appspot.com",
//     messagingSenderId: "848974323707",
//     appId: "1:848974323707:web:cce76067726802d227755e",
//     measurementId: "G-Y4P805VXVR"
//   };



  const firebaseConfig = {
    apiKey: "AIzaSyA_skJj1LGjfdeKRb5e7r3dyYoaCUg1QnA",
    authDomain: "twitterclone1-a2ae7.firebaseapp.com",
    projectId: "twitterclone1-a2ae7",
    storageBucket: "twitterclone1-a2ae7.appspot.com",
    messagingSenderId: "586886386257",
    appId: "1:586886386257:web:e988f7c6791418e95e9e70",
    measurementId: "G-EWFSBBS29C"
  };
  


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;