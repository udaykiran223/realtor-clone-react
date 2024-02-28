// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUk7gdj0UHDOzF5KVpqjGyEUN4DCNoXYA",
  authDomain: "realtor-clone-react-2f6f4.firebaseapp.com",
  projectId: "realtor-clone-react-2f6f4",
  storageBucket: "realtor-clone-react-2f6f4.appspot.com",
  messagingSenderId: "789876155720",
  appId: "1:789876155720:web:ac8f715696cb257419bf7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
