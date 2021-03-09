import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7v6QyDInnaYEHBME6drulma2MljyTVtE",
  authDomain: "ssungbti-1521e.firebaseapp.com",
  projectId: "ssungbti-1521e",
  storageBucket: "ssungbti-1521e.appspot.com",
  messagingSenderId: "525075059005",
  appId: "1:525075059005:web:2c4ab5d7798fc438707554",
  measurementId: "G-DDBKPY64G4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const collection = db.collection("SSUngBTI");
export const appData = collection.doc("app");

export const getCount = async (): Promise<number> => {
  const res = await fetch("http://34.105.29.115:8080/counts");
  const data = await res.json();
  return data.count;
};

export const incrementCount = async (): Promise<void> => {
  try {
    await fetch("http://34.105.29.115:8080/counts", { method: "post" });
  } catch (err) {
    console.log(err);
  }
};
