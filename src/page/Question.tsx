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
import { motion } from "framer-motion";
import React, { FC } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

export const Question: FC<BoxProps> = props => {
  const params = useParams<{ round: string }>();
  return (
    <motion.div
      className="question-page"
      initial="enter"
      animate="center"
      exit="exit"
      variants={questionVariants}
    >
      <Box {...props}>
        <Heading fontSize="1.125em" mb={2}>{`${params.round} / ${12}`}</Heading>
        <Heading fontWeight="normal" fontSize="1.5em" mb={32}>
          {"처음 숭실대 로고를 보고 든 생각은?"}
        </Heading>
        <Stack spacing={3}>
          <LinkBox as={Button} variant="question">
            <LinkOverlay as={RouterLink} to="/question/1">
              Q1
            </LinkOverlay>
          </LinkBox>
          <Button variant="question">Q2</Button>
          <Button variant="question">Q3</Button>
          <Button variant="question">Q4</Button>
        </Stack>
      </Box>
    </motion.div>
  );
};
