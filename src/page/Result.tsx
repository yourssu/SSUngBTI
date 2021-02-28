import { Heading } from "@chakra-ui/react";
import { pageVariants } from "constants/animation";
import { motion } from "framer-motion";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const Result: FC = () => {
  const params = useParams<{ mbti: string }>();
  const mbti = params.mbti.toUpperCase();
  return (
    <motion.div
      className="result-page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <Heading>{mbti}</Heading>
    </motion.div>
  );
};
