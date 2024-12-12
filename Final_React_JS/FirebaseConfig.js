// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMl6XVGf9rVRZxSbNeVc6WXqIYZdoHn4A",
  authDomain: "auth-4361f.firebaseapp.com",
  projectId: "auth-4361f",
  storageBucket: "auth-4361f.firebasestorage.app",
  messagingSenderId: "751212026738",
  appId: "1:751212026738:web:fdf9a916854c4f60dcdbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }