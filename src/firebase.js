import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB95zNdFyH041-W8WeNcMtpWLWNVflfPsA",
  authDomain: "e-commerce-8a181.firebaseapp.com",
  databaseURL: "https://e-commerce-8a181.firebaseio.com",
  projectId: "e-commerce-8a181",
  storageBucket: "e-commerce-8a181.appspot.com",
  messagingSenderId: "610102406708",
  appId: "1:610102406708:web:8bc19ccaea94d83b856461",
  measurementId: "G-R469LK0WYF"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};