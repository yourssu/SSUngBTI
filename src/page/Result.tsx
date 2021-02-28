import { pageVariants } from "constants/animation";
import { motion } from "framer-motion";
import { FC } from "react";

export const Result: FC = () => {
  return (
    <motion.div
      className="result-page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      Result
    </motion.div>
  );
};
