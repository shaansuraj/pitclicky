// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClaumlaaB-lLtG8OxSPPMoRn87ViKtohY",
  authDomain: "pitchcatalyst-com.firebaseapp.com",
  databaseURL: "https://pitchcatalyst-com-default-rtdb.firebaseio.com",
  projectId: "pitchcatalyst-com",
  storageBucket: "pitchcatalyst-com.appspot.com",
  messagingSenderId: "503236114707",
  appId: "1:503236114707:web:c51a8b4e6ede9994dd42e6",
  measurementId: "G-47XH9ZBN39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;