// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl5pj19D7C7TkkDyX8afsGyoLFqzVe8mY",
    authDomain: "car-doctor-ef749.firebaseapp.com",
    projectId: "car-doctor-ef749",
    storageBucket: "car-doctor-ef749.appspot.com",
    messagingSenderId: "120967039945",
    appId: "1:120967039945:web:9d9bc7468484f56d643618"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth