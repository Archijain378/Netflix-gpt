// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzOKlldvzRz6Mu_54quytSaLP3Lc_GD2s",
  authDomain: "netflixgpt-1490a.firebaseapp.com",
  projectId: "netflixgpt-1490a",
  storageBucket: "netflixgpt-1490a.firebasestorage.app",
  messagingSenderId: "440788049314",
  appId: "1:440788049314:web:c0a3dd5fe5239aa3d866fb",
  measurementId: "G-LDSXMQXTZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();