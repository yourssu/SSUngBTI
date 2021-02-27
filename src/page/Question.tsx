import { Box, BoxProps, Button, Heading, Stack } from "@chakra-ui/react";
import { Footer } from "components";
import React, { FC } from "react";
import { useParams } from "react-router-dom";

export const Question: FC<BoxProps> = props => {
  const params = useParams<{ round: string }>();
  return (
    <Box {...props}>
      <Heading fontSize="1.125em" mb={2}>{`${params.round} / ${12}`}</Heading>
      <Heading fontWeight="normal" fontSize="1.5em" mb={32}>
        {"처음 숭실대 로고를 보고 든 생각은?"}
      </Heading>
      <Stack spacing={3}>
        <Button variant="question">Q1</Button>
        <Button variant="question">Q2</Button>
        <Button variant="question">Q3</Button>
        <Button variant="question">Q4</Button>
      </Stack>
      <Footer />
    </Box>
  );
};
