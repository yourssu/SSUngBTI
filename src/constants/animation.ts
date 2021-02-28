import { Variants } from "framer-motion";

export const defaultTransition = { duration: 0.2, ease: "easeInOut" };

export const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

export const pageVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: defaultTransition, scale: 1 },
  exit: { opacity: 0, transition: defaultTransition, scale: 0.9 },
};

export const questionVariants: Variants = {
  enter: {
    opacity: 1,
    transition: defaultTransition,
    x: 100,
  },
  center: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    transition: defaultTransition,
    x: -100,
  },
};
