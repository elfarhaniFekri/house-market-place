import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6FEH9ZK_yiZVXPLKz4RkMUvJOQiRzm8A',
  authDomain: 'housemarketplace-6f9c6.firebaseapp.com',
  projectId: 'housemarketplace-6f9c6',
  storageBucket: 'housemarketplace-6f9c6.appspot.com',
  messagingSenderId: '564619660207',
  appId: '1:564619660207:web:cb88ce3253eef0002a7d5a',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
