import { Box, Flex } from "@chakra-ui/react";
import { Footer, Header } from "components";
import { AnimatePresence } from "framer-motion";
import { About, Calculate, Home, Question, Result } from "page";
import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Flex direction="column" w="full" m="0 auto" minH="100%" maxW="640px">
      <Box flexGrow={1} w="full" alignSelf="center" padding="0 1em">
        <Header mb={12} />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/questions/:round">
                  <Question />
                </Route>
                <Route exact path="/calculate">
                  <Calculate />
                </Route>
                <Route exact path="/result/:mbti">
                  <Result />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Box>
      <Footer />
    </Flex>
  );
};
export default App;
