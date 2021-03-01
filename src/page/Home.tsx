import {
  Box,
  Button,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { Counter } from "components";
import { pageVariants } from "constants/animation";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { appData, incrementCount } from "repo";

export const Home: FC<StackProps> = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = appData.onSnapshot(doc => {
      setCount(doc.get("count"));
    });
    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      className="home-page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <Stack alignItems="center" spacing={10} p="0 1em" {...props}>
        <Box textAlign="center">
          <Heading as="h1" fontSize="2em">
            {"슝슝이 테스트"}
          </Heading>
          <Text fontSize="1em">{"슝슝이로 알아보는 성향테스트"}</Text>
        </Box>
        <Box w="full">
          <Counter count={count} />
          <Image boxSize={64} objectFit="cover" m="auto" />
        </Box>
        <LinkBox
          as={Button}
          w="full"
          variant="mbti_start"
          onClick={() => incrementCount()}
        >
          <LinkOverlay as={RouterLink} to="/questions/1">
            시작하기
          </LinkOverlay>
        </LinkBox>
      </Stack>
    </motion.div>
  );
};
