import React from "react";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASL_mwk7LF5-QFuRyrRvqZMhGEuZUJ4YI",
  authDomain: "foodshop-70e05.firebaseapp.com",
  projectId: "foodshop-70e05",
  storageBucket: "foodshop-70e05.appspot.com",
  messagingSenderId: "13768401115",
  appId: "1:13768401115:web:7b412bc2c9a7b4071cacfe",
  measurementId: "G-Z0G853R39K",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
