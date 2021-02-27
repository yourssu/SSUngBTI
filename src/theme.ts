import { extendTheme } from "@chakra-ui/react";

const Link = {
  baseStyle: {
    transition: `all 0.15s ease-out`,
    cursor: "pointer",
    textDecoration: "underline",
    outline: "none",
    color: "brand",
    fontWeight: "bold",
    _focus: {
      boxShadow: "none",
    },
  },
};

const Button = {
  baseStyle: {
    padding: "1em",
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    question: {
      borderRadius: 10,
      fontSize: "0.75em",
      bg: "#F1F3F5",
      color: "brand",
      _hover: {
        bg: "brand",
        color: "white",
      },
      _active: {
        bg: "brand",
        color: "white",
      },
    },
    mbti_start: {
      borderRadius: 2,
      fontSize: "1em",
      bg: "brand",
      color: "white",
      _hover: {
        bg: "brand",
      },
      _active: {
        bg: "brand",
      },
    },
    mbti_reset: {
      borderRadius: 2,
      fontSize: "1em",
      bg: "#F1F3F5",
      color: "brand",
      _hover: {
        bg: "#F1F3F5",
      },
      _active: {
        bg: "#F1F3F5",
      },
    },
  },
};

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: ["16px", "20px", "24px"],
      },
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  colors: {
    brand: "#4F5985",
  },
  components: { Button, Link },
});