import { Text, Link, TextProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Footer: FC<TextProps> = props => (
  <Text fontSize="0.625em" textAlign="center" mt="3em" mb="3em" {...props}>
    {"Copyright "}
    <Link as={RouterLink} to="/about">
      {"SSung-BTI at YOURSSU"}
    </Link>
    {". 2021. All rights reserved."}
  </Text>
);
