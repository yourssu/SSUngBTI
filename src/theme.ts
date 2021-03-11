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
      bg: "brandBG",
      color: "brand",
      transitionDuration: "0s",
      _active: {
        bg: "brand",
        color: "white",
      },
    },
    sbti_start: {
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
    sbti_reset: {
      borderRadius: 2,
      fontSize: "1em",
      bg: "brandBG",
      color: "brand",
      _hover: {
        bg: "brandBG",
      },
      _active: {
        bg: "brandBG",
      },
    },
  },
};

export const theme = extendTheme({
  fonts: {
    heading: "Noto Sans KR",
    body: "Noto Sans KR",
  },
  styles: {
    global: {
      html: {
        fontSize: ["16px", "20px", "24px"],
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      },
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  colors: {
    brand: "#4F5985",
    brandBG: "#F1F3F5",
  },
  components: { Button, Link },
});
