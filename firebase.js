import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCXZzMDmecGhWsYlzefzgfPishQf7nXPlM',
  authDomain: 'mail-client-33ae5.firebaseapp.com',
  projectId: 'mail-client-33ae5',
  storageBucket: 'mail-client-33ae5.appspot.com',
  messagingSenderId: '759757611181',
  appId: '1:759757611181:web:87abccb904fc936a5aa624',
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
