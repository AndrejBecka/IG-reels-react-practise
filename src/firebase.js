import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsnk1sF3oKan2hsnCywkBG2-2JWg4-ung",
    authDomain: "becka-ig-reels.firebaseapp.com",
    databaseURL: "https://becka-ig-reels.firebaseio.com",
    projectId: "becka-ig-reels",
    storageBucket: "becka-ig-reels.appspot.com",
    messagingSenderId: "345225419374",
    appId: "1:345225419374:web:cd3c100bc94a3437b3247f",
    measurementId: "G-402LCKK8YB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;