// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaHcvJCqmvtRYDppaPuNokt2Tc0VCAhFU",
  authDomain: "english-learning-hub-fb0a8.firebaseapp.com",
  projectId: "english-learning-hub-fb0a8",
  storageBucket: "english-learning-hub-fb0a8.firebasestorage.app",
  messagingSenderId: "908921435600",
  appId: "1:908921435600:web:a36b706c03cfdad61a75d5",
  measurementId: "G-4N5F6YQRN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
