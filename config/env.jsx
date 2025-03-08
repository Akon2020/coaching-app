import { config } from "dotenv";

config({ path: ".env" });

export const {
  FIREBASE_apiKey,
  FIREBASE_authDomain,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId,
  FIREBASE_appId,
} = process.env;
