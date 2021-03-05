import { Box, Image, ImageProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

const AnimatedImage: FC<ImageProps> = props => (
  <Box bgColor="white" overflow="hidden">
    <motion.div
      initial={{ rotate: -2 }}
      animate={{ rotate: 2 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Image {...props} />
    </motion.div>
  </Box>
);

export default AnimatedImage;
