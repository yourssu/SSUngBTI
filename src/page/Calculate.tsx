import { Box, Stack } from "@chakra-ui/react";
import { pageVariants, infinityTransition } from "constants/animation";
import firebase from "firebase/app";
import { motion } from "framer-motion";
import useMbtiResult from "hooks/useMbtiResult";
import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserAnswerState from "store/UserAnswerState";
import UserMbtiState from "store/UserMbtiState";

export const Calculate: FC = () => {
  const history = useHistory();
  const mbti = useRecoilValue(UserMbtiState).join("");
  const mbtiResult = useMbtiResult(mbti);
  const userAnswers = useRecoilValue(UserAnswerState);

  useEffect(() => {
    new Image().src = `${process.env.BASE_NAME}img/${mbtiResult.type}.png`;
    new Image().src = `${process.env.BASE_NAME}img/${mbtiResult.compatibility[0]}.png`;
    new Image().src = `${process.env.BASE_NAME}img/${mbtiResult.compatibility[1]}.png`;
    const timeout = setTimeout(() => {
      const analytics = firebase.analytics();
      analytics.logEvent(`mbti_result_${mbtiResult.id}`);
      userAnswers.forEach((answer, idx) =>
        analytics.logEvent(`question${idx + 1}_select${answer + 1}`)
      );
      history.push(`result/${mbtiResult.type}/`);
    }, 2000);
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
