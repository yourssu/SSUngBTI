import { Box, Heading, Link, Stack, StackProps, Text } from "@chakra-ui/react";
import { Footer } from "components";
import React, { FC } from "react";

export const About: FC<StackProps> = props => (
  <Stack spacing={5} {...props} fontSize="0.875em">
    <Box>
      <Heading size="xs">
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
      <Link
        size="xs"
        target="_blank"
        href="https://intro.yourssu.com/"
        fontWeight="normal"
      >
        {"About us"}
      </Link>
      <br />
      <Link
        size="xs"
        target="_blank"
        href="https://blog.yourssu.com/"
        fontWeight="normal"
      >
        {"Tech blog"}
      </Link>
    </Box>
    <Footer />
  </Stack>
);
