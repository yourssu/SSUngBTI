import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import { Header } from "components";
import { About, Home } from "page";
import React, { FC } from "react";
import {
  Switch,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App: FC = () => {
  const location = useLocation();
  return (
    <Flex
      left={0}
      right={0}
      pos="absolute"
      direction="column"
      maxW="320px"
      m="0 auto"
      minH="100vh"
    >
      <Box flexGrow={1}>
        <Header mb={12} />
        <Box pos="relative">
          <ClassNames>
            {({ css }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames={{
                    enter: css({
                      opacity: 0,
                      transform: "scale(1.1)",
                    }),
                    enterActive: css({
                      opacity: 1,
                      transform: "scale(1)",
                      transition: "opacity 300ms, transform 300ms",
                    }),
                    exit: css({
                      opacity: 1,
                      transform: "scale(1)",
                    }),
                    exitActive: css({
                      opacity: 0,
                      transform: "scale(0.9)",
                      transition: "opacity 300ms, transform 300ms",
                    }),
                  }}
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path="/about">
                      <About pos="absolute" w="full" />
                    </Route>
                    <Route path="*">
                      <Home pos="absolute" w="full" />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          </ClassNames>
        </Box>
      </Box>
      <Text fontSize={10} textAlign="center" mt={12} mb={8}>
        {"Copyright "}
        <Link as={RouterLink} to="/about">
          {"SSung-BTI at YOURSSU"}
        </Link>
        {". 2021. All rights reserved."}
      </Text>
    </Flex>
  );
};
export default App;
