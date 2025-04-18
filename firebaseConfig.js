import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbhaX3MtUiznndTnNDU_1XwTaAHd0LA8s",
  authDomain: "club-75cf8.firebaseapp.com",
  projectId: "club-75cf8",
  storageBucket: "club-75cf8.firebasestorage.app",
  messagingSenderId: "338234622166",
  appId: "1:338234622166:web:0dae71ae372d58e8e94977",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
