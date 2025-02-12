import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjqWyDyiSqdu2SP3I4Kqkel52JmCMOHuM",
  authDomain: "matchu-c7fd0.firebaseapp.com",
  projectId: "matchu-c7fd0",
  storageBucket: "matchu-c7fd0.appspot.com",
  messagingSenderId: "102710841498",
  appId: "1:102710841498:web:e7d2ebbcb7d86f51fa8f23",
  measurementId: "G-EPV8HZDPV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
