// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX-ynrWJE2wHibYjqtReA6Y6b0MK9UtEY",
  authDomain: "fir-c385e.firebaseapp.com",
  projectId: "fir-c385e",
  storageBucket: "fir-c385e.appspot.com",
  messagingSenderId: "555317777181",
  appId: "1:555317777181:web:3092d91064f728214987f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }