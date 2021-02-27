import { Variants } from "framer-motion";

const transition = { duration: 0.2, ease: "easeInOut" };
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition, scale: 1 },
  exit: { opacity: 0, transition, scale: 0.9 },
};

export const questionVariants: Variants = {
  enter: {
    opacity: 1,
    transition,
    x: 100,
  },
  center: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    transition,
    x: -100,
  },
};
