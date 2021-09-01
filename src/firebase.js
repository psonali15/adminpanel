// Firebase app (the core firebase Sdk) is always required & must lifted first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase Sdk for Analytics
import "firebase/analytics";

// add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBdsPXuGIZTzSasGFHcFwZzC_pLmyf2yU",
  authDomain: "my-mall-admin-a084c.firebaseapp.com",
  projectId: "my-mall-admin-a084c",
  storageBucket: "my-mall-admin-a084c.appspot.com",
  messagingSenderId: "279144774255",
  appId: "1:279144774255:web:604135f0fbe4676f6ceb9a",
  measurementId: "G-XD2EXX2K12"
};

firebase.initializeApp(firebaseConfig);

export default firebase;