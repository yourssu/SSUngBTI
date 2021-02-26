import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { Counter } from "components";
import React, { FC } from "react";

export const Home: FC<StackProps> = props => (
  <Stack alignItems="center" spacing={10} {...props}>
    <Box>
      <Heading as="h1" size="xl">
        {"슝슝이 테스트"}
      </Heading>
      <Text>{"슝슝이로 알아보는 성향테스트"}</Text>
    </Box>
    <Box>
      <Counter count={0} />
      <Image w={64} h={64} />
    </Box>
    <Button w="50%" minW={64} variant="mbti_start">
      시작하기
    </Button>
  </Stack>
);
