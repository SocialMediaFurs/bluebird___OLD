import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCnMJ28oQbQ7WgXBcTsmLoEv1B2UM_Xno",
  authDomain: "bluebird-projekt.firebaseapp.com",
  projectId: "bluebird-projekt",
  storageBucket: "bluebird-projekt.appspot.com",
  messagingSenderId: "149358110334",
  appId: "1:149358110334:web:874840e48d68831e14da2f",
  measurementId: "G-XF4083KCQ6"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
