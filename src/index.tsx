import ReactDOM from "react-dom";
import "typeface-noto-sans-kr";
import App from "App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
