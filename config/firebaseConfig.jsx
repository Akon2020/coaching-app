// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import Env from "./../config/env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Env.FIREBASE_apiKey,
  authDomain: Env.FIREBASE_authDomain,
  projectId: Env.FIREBASE_projectId,
  storageBucket: Env.FIREBASE_storageBucket,
  messagingSenderId: Env.FIREBASE_messagingSenderId,
  appId: Env.FIREBASE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
