// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxFa38o8bICjUh5thFe4J-o0-535Y9Xa0",
  authDomain: "foodfan-3d093.firebaseapp.com",
  projectId: "foodfan-3d093",
  storageBucket: "foodfan-3d093.firebasestorage.app",
  messagingSenderId: "665907353833",
  appId: "1:665907353833:web:fb76de84371499137f3878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);