// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH68oUrjyveX5SX6VRV8_8sSYkvAIiGhw",
  authDomain: "coderhouse-ecommerce-c346b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-c346b",
  storageBucket: "coderhouse-ecommerce-c346b.appspot.com",
  messagingSenderId: "187465887318",
  appId: "1:187465887318:web:053cde69e1b4f8f4a315f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
