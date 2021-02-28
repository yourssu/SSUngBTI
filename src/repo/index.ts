import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxi5uPraioppML-THJeGfNMf4r-xD5Up8",
  authDomain: "ssungbti.firebaseapp.com",
  projectId: "ssungbti",
  storageBucket: "ssungbti.appspot.com",
  messagingSenderId: "1098500384418",
  appId: "1:1098500384418:web:8de0ec32155d6f3ca399fb",
  measurementId: "G-41SNLX6Z67",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const collection = db.collection("SSUngBTI");
export const appData = collection.doc("app");

export const getCount = async (): Promise<number> => {
  const data = await appData.get();
  return data.get("count");
};

export const incrementCount = async (): Promise<void> =>
  appData.update({
    count: firebase.firestore.FieldValue.increment(1),
  });
