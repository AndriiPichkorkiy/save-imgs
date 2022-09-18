// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'save-imgs.firebaseapp.com',
  projectId: 'save-imgs',
  storageBucket: 'save-imgs.appspot.com',
  messagingSenderId: '166932818980',
  appId: '1:166932818980:web:97fbb463330dae5998fcb1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export const db = getFirestore(app);