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
import { Counter, Footer } from "components";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Home: FC<StackProps> = props => (
  <Stack alignItems="center" spacing={10} {...props}>
    <Box textAlign="center">
      <Heading as="h1" fontSize="2em">
        {"슝슝이 테스트"}
      </Heading>
      <Text fontSize="1em">{"슝슝이로 알아보는 성향테스트"}</Text>
    </Box>
    <Box w="full">
      <Counter count={0} />
      <Image boxSize={64} objectFit="cover" m="auto" />
    </Box>
    <LinkBox as={Button} w="calc(100% - 64px)" variant="mbti_start">
      <LinkOverlay as={RouterLink} to="/question/0">
        시작하기
      </LinkOverlay>
    </LinkBox>
    <Footer />
  </Stack>
);
