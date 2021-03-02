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
  round: number;
  question: QuestionObj;
  isLast: boolean;
};
const QuestionButtonGroup: FC<QuestionButtonGroupProps> = ({
  question,
  round,
  isLast,
}) => {
  const nextUrl = isLast ? "/calculate" : `/questions/${round + 1}`;
  const [userAnswer, setUserAnswer] = useRecoilState(UserAnswerState);
  const updateAnswer = useCallback(
    (idx: number) => {
      return () => {
        const newArray = userAnswer.slice();
        newArray.splice(round - 1, 1, idx);
        setUserAnswer(newArray);
      };
    },
    [userAnswer]
  );
  return (
    <Stack spacing={4}>
      {question.answers.map((answer, idx) => (
        <LinkBox
          key={idx}
          as={Button}
          variant="question"
          onClick={updateAnswer(idx)}
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
  const params = useParams<{ round: string }>();
  const round = Number.parseInt(params.round);
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
        <Heading fontSize="1.125em">{`${round} / ${questions.length}`}</Heading>
        <Heading fontWeight="normal" fontSize="1.5em">
          {questions[round - 1].content}
        </Heading>
      </Box>
      <QuestionButtonGroup
        question={questions[round - 1]}
        round={round}
        isLast={round === questions.length}
      />
    </Box>
  );
};
