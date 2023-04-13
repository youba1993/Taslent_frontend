// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn-V9U_S_JMYQvmZsAPhXnkcx1Ba6DxBU",
  authDomain: "taslent-73e17.firebaseapp.com",
  projectId: "taslent-73e17",
  storageBucket: "taslent-73e17.appspot.com",
  messagingSenderId: "169199534374",
  appId: "1:169199534374:web:0bf5acaff40ef65a2741e7",
  measurementId: "G-Z73M5600ER"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

export {db}