import { Box, Stack } from "@chakra-ui/react";
import { pageVariants, spinTransition } from "constants/animation";
import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserMbtiState from "store/UserMbtiState";

export const Calculate: FC = () => {
  const history = useHistory();
  const mbti = useRecoilValue(UserMbtiState);
  useEffect(() => {
    const timeout = setTimeout(
      () => history.push(`result/${mbti.join("")}`),
      2000
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="calculate-page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <Stack justifyContent="center" alignItems="center">
        <motion.div animate={{ rotate: 360 }} transition={spinTransition}>
          <Box
            w="3em"
            h="3em"
            borderWidth="0.5rem"
            borderColor="brandBG"
            borderTopWidth="0.5rem"
            borderTopColor="brand"
            borderRadius="50%"
          />
        </motion.div>
        <Box>{"계산중..."}</Box>
      </Stack>
    </motion.div>
  );
};
