// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVDVFq73wHJ4r89mek-AxM_U-avtFSigQ",
  authDomain: "chatura-enterprises.firebaseapp.com",
  projectId: "chatura-enterprises",
  storageBucket: "chatura-enterprises.appspot.com",
  messagingSenderId: "843954184862",
  appId: "1:843954184862:web:30cfeef3231ba930aa518f",
  measurementId: "G-16X5BTQ8FW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};