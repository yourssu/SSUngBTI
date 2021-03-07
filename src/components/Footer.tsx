import { Text, Link, TextProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Footer: FC<TextProps> = props => (
  <Text fontSize="0.625em" textAlign="center" mt="3em" mb="3em" {...props}>
    <Text as="span" fontWeight="bold">
      {"만든 사람이 궁금한가요? "}
      <Link as={RouterLink} to="/about">
        {"여기를 눌러보세요!"}
      </Link>
    </Text>
    <br />
    {"Copyright SSung-BTI at YOURSSU. 2021. All rights reserved."}
  </Text>
);
