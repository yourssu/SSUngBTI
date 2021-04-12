import {
  Box,
  BoxProps,
  Button,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
} from "@chakra-ui/react";
import { questionVariants } from "constants/animation";
import questions, { Question as QuestionObj } from "constants/questions";
import { motion } from "framer-motion";
import React, { FC, useCallback } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import UserAnswerState from "store/UserAnswerState";

type QuestionButtonGroupProps = {
  step: number;
  question: QuestionObj;
  isLast: boolean;
};
const QuestionButtonGroup: FC<QuestionButtonGroupProps> = ({
  question,
  step,
  isLast,
}) => {
  const nextUrl = isLast ? "/calculate" : `/questions/${step + 1}`;
  const [userAnswer, setUserAnswer] = useRecoilState(UserAnswerState);
  const setAnswer = useCallback(
    (idx: number) => () => {
      const newArray = userAnswer.slice();
      newArray.splice(step - 1, 1, idx);
      setUserAnswer(newArray);
    },
    [userAnswer, step]
  );
  return (
    <Stack spacing={4}>
      {question.answers.map((answer, idx) => (
        <LinkBox
          key={idx}
          as={Button}
          variant="question"
          onClick={setAnswer(idx)}
        >
          <LinkOverlay as={RouterLink} to={nextUrl}>
            {answer}
          </LinkOverlay>
        </LinkBox>
      ))}
    </Stack>
  );
};

export const Question: FC<BoxProps> = props => {
  const params = useParams<{ step: string }>();
  const step = Number.parseInt(params.step);
  return (
    <Box
      as={motion.div}
      initial="enter"
      animate="center"
      exit="exit"
      variants={questionVariants}
      p="0 1em"
      {...props}
    >
      <Box minH={48}>
        <Heading fontSize="1.125em">{`${step} / ${questions.length}`}</Heading>
        <Heading fontWeight="normal" fontSize="1.5em">
          {questions[step - 1].content}
        </Heading>
      </Box>
      <QuestionButtonGroup
        question={questions[step - 1]}
        step={step}
        isLast={step === questions.length}
      />
    </Box>
  );
};
