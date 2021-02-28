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
                <Route exact path="/" component={Home} />
                <Route exact path="/questions/:round" component={Question} />
                <Route exact path="/calculate" component={Calculate} />
                <Route exact path="/result/:mbti" component={Result} />
                <Route exact path="/about" component={About} />
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
