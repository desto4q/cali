

// import firebase from "firebase/app


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage,ref} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwpUI3LHHFz2ahXFoFAQQUXPJHfnaiIh0",
  authDomain: "cali-1a1c9.firebaseapp.com",
  projectId: "cali-1a1c9",
  storageBucket: "cali-1a1c9.appspot.com",
  messagingSenderId: "67424111609",
  appId: "1:67424111609:web:c213b91abc49c73b84cb28",
  measurementId: "G-V1W0Y94424"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)

