import { Box, Flex } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import { Header } from "components";
import { About, Home, Question } from "page";
import React, { FC } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App: FC = () => {
  const location = useLocation();
  return (
    <Flex
      left={0}
      right={0}
      pos="absolute"
      direction="column"
      w="full"
      m="0 auto"
      minH="100%"
      maxW="640px"
    >
      <Box flexGrow={1} w="full" alignSelf="center" padding="0 1em">
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
                    <Route exact path="/question/:round">
                      <Question pos="absolute" w="full" />
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
    </Flex>
  );
};
export default App;
