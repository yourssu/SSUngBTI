import { Box, Heading, Link, Stack, StackProps, Text } from "@chakra-ui/react";
import { pageVariants } from "constants/animation";
import { motion } from "framer-motion";
import React, { FC } from "react";

export const About: FC<StackProps> = props => (
  <Stack
    as={motion.div}
    initial="exit"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    spacing={5}
    fontSize="0.875em"
    p="0 2rem"
    {...props}
  >
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

      <Link
        size="xs"
        target="_blank"
        href="https://github.com/vbalien"
        fontWeight="normal"
      >
        {"Elnyan"}
      </Link>
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
      <br />
      <Link
        size="xs"
        target="_blank"
        href="https://apply.yourssu.com/"
        fontWeight="normal"
      >
        {"Recruit"}
      </Link>
    </Box>
  </Stack>
);
