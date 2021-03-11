import { Box, Stack } from "@chakra-ui/react";
import { pageVariants, infinityTransition } from "constants/animation";
import { sbtiResults } from "constants/sbti";
import firebase from "firebase/app";
import { motion } from "framer-motion";
import useSbtiResult from "hooks/useSbtiResult";
import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserAnswerState from "store/UserAnswerState";
import UserSbtiState from "store/UserSbtiState";

export const Calculate: FC = () => {
  const history = useHistory();
  const sbti = useRecoilValue(UserSbtiState);
  const sbtiResult = useSbtiResult(sbti);
  const userAnswers = useRecoilValue(UserAnswerState);

  useEffect(() => {
    new Image().src = `${process.env.BASE_NAME}img/${sbtiResult.type}.png`;
    new Image().src = `${process.env.BASE_NAME}img/${
      sbtiResults.find(r => r.id === sbtiResult.compatibility[0]).type
    }.png`;
    new Image().src = `${process.env.BASE_NAME}img/${
      sbtiResults.find(r => r.id === sbtiResult.compatibility[1]).type
    }.png`;
    const timeout = setTimeout(() => {
      const analytics = firebase.analytics();
      analytics.logEvent(`mbti_result_${sbtiResult.id}`);
      userAnswers.forEach((answer, idx) =>
        analytics.logEvent(`question${idx + 1}_select${answer + 1}`)
      );
      history.push(`result/${sbtiResult.type}/`);
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
