import { TargetAndTransition, Transition, Variants } from "framer-motion";

export const defaultTransition = { duration: 0.2, ease: "easeInOut" };

export const infinityTransition: Transition = {
  repeat: Infinity,
  ease: "linear",
  duration: 1,
};

export const pageVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: defaultTransition, scale: 1 },
  exit: { opacity: 0, transition: defaultTransition, scale: 0.9 },
};

export const shakeAnimation: TargetAndTransition = {
  rotate: [0, 5, -10, 10, -10, 10, -10, 5, 0],
  x: [0, 5, -10, 10, -10, 10, -10, 5, 0].map(x => x * 0.2),
  transition: {
    duration: 0.7,
    ease: [0.36, 0.07, 0.19, 0.97],
  },
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
