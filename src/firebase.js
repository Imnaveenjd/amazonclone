// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyA16YHXaT0lxUMFPVG8hhh7fgY1R5dcCc0",
    authDomain: "clone-9d520.firebaseapp.com",
    projectId: "clone-9d520",
    storageBucket: "clone-9d520.appspot.com",
    messagingSenderId: "955023019153",
    appId: "1:955023019153:web:d06377486305693b818330",
    measurementId: "G-ZCQYHW3YV8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth};