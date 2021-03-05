import {
  Box,
  Button,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { Counter } from "components";
import AnimatedImage from "components/AnimatedImage";
import { pageVariants } from "constants/animation";
import { AnimatePresence, motion } from "framer-motion";
import useAppCount from "hooks/useAppCount";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { incrementCount } from "repo";

export const Home: FC<StackProps> = props => {
  const count = useAppCount();

  return (
    <Stack
      as={motion.div}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      alignItems="center"
      spacing={10}
      p="0 2em"
      {...props}
    >
      <Box textAlign="center">
        <Heading as="h1" fontSize="2em">
          {"슝슝이 테스트"}
        </Heading>
        <Text fontSize="1em">{"슝슝이로 알아보는 성향테스트"}</Text>
      </Box>
      <Box w="full">
        <Counter count={count} />
        <AnimatePresence initial={true}>
          <AnimatedImage
            src={`${process.env.BASE_NAME}img/open.png`}
            boxSize={64}
            objectFit="cover"
            m="auto"
            fallback={<Box w={64} h={64} m="auto" />}
          />
        </AnimatePresence>
      </Box>
      <LinkBox
        as={Button}
        w="full"
        variant="mbti_start"
        onClick={() => incrementCount()}
      >
        <LinkOverlay as={RouterLink} to="/questions/1">
          {"시작하기"}
        </LinkOverlay>
      </LinkBox>
    </Stack>
  );
};
