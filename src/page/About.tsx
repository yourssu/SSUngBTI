import { Box, Heading, Stack, StackProps, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export const About: FC<StackProps> = props => (
  <Stack spacing={5} {...props}>
    <Box>
      <Heading size="sm">
        <Text as="span" color="brand">
          {"SSUngBTI"}
        </Text>
        {" at YOURSSU"}
      </Heading>
      <Text size="sm">{"만든 사람들"}</Text>
    </Box>
    <Box>
      <Heading size="xs">{"Web Development"}</Heading>
      <Text size="xs">{"Elnyan"}</Text>
    </Box>
    <Box>
      <Heading size="xs">{"Contents Design"}</Heading>
      <Text size="xs">{"Eunjin"}</Text>
      <Text size="xs">{"Joohyun"}</Text>
      <Text size="xs">{"Pad"}</Text>
      <Text size="xs">{"Joeum"}</Text>
    </Box>
    <Box>
      <Heading size="xs">{"Project Manage & UI Design"}</Heading>
      <Text size="xs">{"Joeum"}</Text>
    </Box>
    <Box>
      <Heading size="xs">{"Yourssu"}</Heading>
      <Text size="xs">{"About us"}</Text>
      <Text size="xs">{"Tech blog"}</Text>
    </Box>
  </Stack>
);
