import ReactDOM from "react-dom";
import "typeface-noto-sans-kr";
import App from "App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import React from "react";
import { RecoilRoot } from "recoil";

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
