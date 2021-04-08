import { Box, Flex } from "@chakra-ui/react";
import { Footer, Header } from "components";
import { sbtiResults } from "constants/sbti";
import questions from "constants/questions";
import { ConditionRoute } from "components/ConditionRoute";
import { AnimatePresence } from "framer-motion";
import { About, Calculate, Home, Question, Result } from "page";
import React, { FC, useCallback } from "react";
import { Switch, Route, RouteComponentProps, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserAnswerState from "store/UserAnswerState";

const App: FC = () => {
  const userAnswer = useRecoilValue(UserAnswerState);
  const requireFilledAnswer = useCallback(
    ({ match }: RouteComponentProps<{ step: string }>) => {
      const step = parseInt(match.params.step) || questions.length;
      return (
        step > 0 &&
        step <= questions.length &&
        userAnswer.slice(0, step - 1).every(val => val !== undefined)
      );
    },
    [userAnswer]
  );
  const checkResultPage = ({ match }: RouteComponentProps<{ sbti: string }>) =>
    sbtiResults.some(
      r =>
        r.id === match.params.sbti.toUpperCase() ||
        r.type === parseInt(match.params.sbti)
    );

  return (
    <Flex direction="column" w="full" m="0 auto" minH="full" maxW="640px">
      <Box flexGrow={1} w="full" alignSelf="center">
        <Header mb={12} />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  <Home />
                </Route>
                <ConditionRoute
                  exact
                  path="/questions/:step"
                  condition={requireFilledAnswer}
                  failed={<Redirect to="/" />}
                >
                  <Question />
                </ConditionRoute>
                <ConditionRoute
                  exact
                  path="/calculate"
                  condition={requireFilledAnswer}
                  failed={<Redirect to="/" />}
                >
                  <Calculate />
                </ConditionRoute>
                <ConditionRoute
                  exact
                  path="/result/:sbti/"
                  condition={checkResultPage}
                  failed={<Redirect to="/" />}
                >
                  <Result />
                </ConditionRoute>
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
