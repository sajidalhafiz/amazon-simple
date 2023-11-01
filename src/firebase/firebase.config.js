// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBurYm8IdG1Ss-BSqVWAXQVaZ9UJh4L1Fs",
  authDomain: "fb-auth-flowbite.firebaseapp.com",
  projectId: "fb-auth-flowbite",
  storageBucket: "fb-auth-flowbite.appspot.com",
  messagingSenderId: "531232377208",
  appId: "1:531232377208:web:2e0171af50cdee6a73e08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;