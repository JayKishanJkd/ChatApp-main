import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";


// Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyDo4aS8yK1VkOMZjl2Ssd0Jp5CF599LU-s",
  authDomain: "chatapp-a0c29.firebaseapp.com",
  projectId: "chatapp-a0c29",
  storageBucket: "chatapp-a0c29.appspot.com",
  messagingSenderId: "285608557058",
  appId: "1:285608557058:web:0a2a94de36cf3c524e451b",
  databaseURL: Constants.expoConfig.extra.databaseURL,
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);


export const auth = getAuth();
export const database = getFirestore();
