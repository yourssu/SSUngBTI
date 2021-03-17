import ReactDOM from "react-dom";
import "typeface-noto-sans-kr";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import firebase from "firebase/app";
import "firebase/analytics";

import { theme } from "./theme";
import App from "App";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7v6QyDInnaYEHBME6drulma2MljyTVtE",
  authDomain: "ssungbti-1521e.firebaseapp.com",
  projectId: "ssungbti-1521e",
  storageBucket: "ssungbti-1521e.appspot.com",
  messagingSenderId: "525075059005",
  appId: "1:525075059005:web:2c4ab5d7798fc438707554",
  measurementId: "G-DDBKPY64G4",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter basename={process.env.BASE_NAME}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
