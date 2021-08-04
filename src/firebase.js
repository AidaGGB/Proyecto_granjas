import firebase from "firebase/app";
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBnoW3iT5Curgcgg1XpTKznp6RySoCXscU",
  authDomain: "proyecto-alqueria.firebaseapp.com",
  projectId: "proyecto-alqueria",
  storageBucket: "proyecto-alqueria.appspot.com",
  messagingSenderId: "390686139546",
  appId: "1:390686139546:web:bc42fb064aafa54c3d6b23"
};

  // Initialize Firebase
 const fb=firebase.initializeApp(firebaseConfig);
  export const db=fb.firestore();