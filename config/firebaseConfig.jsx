// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg1MdHs-efgVvRaIWQCaE7bi9x4oYqMLA",
  authDomain: "coaching-app-d7fd7.firebaseapp.com",
  projectId: "coaching-app-d7fd7",
  storageBucket: "coaching-app-d7fd7.firebasestorage.app",
  messagingSenderId: "759404419665",
  appId: "1:759404419665:web:f91aec85f98ac456fe3670",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
