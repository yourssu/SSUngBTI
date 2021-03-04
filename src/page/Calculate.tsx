import { Box, Stack } from "@chakra-ui/react";
import { pageVariants, infinityTransition } from "constants/animation";
import { motion } from "framer-motion";
import useMbtiResult from "hooks/useMbtiResult";
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserMbtiState from "store/UserMbtiState";

export const Calculate: FC = () => {
  const history = useHistory();
  const mbti = useRecoilValue(UserMbtiState).join("");
  const mbtiResult = useMbtiResult(mbti);

  useEffect(() => {
    new Image().src = `${process.env.BASE_NAME}img/${mbtiResult.id}.png`;
    new Image().src = `${process.env.BASE_NAME}img/${mbtiResult.compatibility[0]}.png`;
    new Image().src = `${process.env.BASE_NAME}img/${mbtiResult.compatibility[1]}.png`;
    const timeout = setTimeout(() => history.push(`result/${mbti}/`), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Stack
      as={motion.div}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      justifyContent="center"
      alignItems="center"
    >
      <motion.div animate={{ rotate: 360 }} transition={infinityTransition}>
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
  );
};
