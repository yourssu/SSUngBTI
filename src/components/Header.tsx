import { Center, ChakraComponent, Link } from "@chakra-ui/react";
import { LogoIcon } from "icon";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Header: ChakraComponent<"div"> = props => (
  <Center w="full" h={16} {...props}>
    <Link as={RouterLink} to="/">
      <LogoIcon w={12} h={12} />
    </Link>
  </Center>
);
