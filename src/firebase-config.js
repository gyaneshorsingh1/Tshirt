// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_PLWkiqooJ56pwPAds1ZPFTs74SIlZwU",
  authDomain: "rare-robo.firebaseapp.com",
  projectId: "rare-robo",
  storageBucket: "rare-robo.firebasestorage.app",
  messagingSenderId: "360673167916",
  appId: "1:360673167916:web:5ce6493c4e651a96545f89",
  measurementId: "G-MVZPTCM5VD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



