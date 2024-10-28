import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6T_ZYQolQ0yu2Cq7zNAIiJovtT3zCEKA",
  authDomain: "dsk-project-20383.firebaseapp.com",
  projectId: "dsk-project-20383",
  storageBucket: "dsk-project-20383.appspot.com",
  messagingSenderId: "697224221927",
  appId: "1:697224221927:web:e87e0cf04c4ed52a31fe42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
