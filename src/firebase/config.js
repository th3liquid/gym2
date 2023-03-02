// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTcHuMzl89hSgq4ZkblnLU-mIWADG24k8",
  authDomain: "gym-pro-31ca8.firebaseapp.com",
  projectId: "gym-pro-31ca8",
  storageBucket: "gym-pro-31ca8.appspot.com",
  messagingSenderId: "245979777304",
  appId: "1:245979777304:web:8c79f042b038dd11b3766d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );