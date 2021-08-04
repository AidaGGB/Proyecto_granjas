import firebase from "firebase/app";
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBmsoAW0JVf27fmZpXEOGTrvUVTl6plluY",
    authDomain: "produccion-registro.firebaseapp.com",
    projectId: "produccion-registro",
    storageBucket: "produccion-registro.appspot.com",
    messagingSenderId: "921437204745",
    appId: "1:921437204745:web:c49c253f735575e0eaa3d8"
  };
  
  // Initialize Firebase
 const fb=firebase.initializeApp(firebaseConfig);
  export const db2=fb.firestore();