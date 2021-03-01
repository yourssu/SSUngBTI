import { Box, Flex } from "@chakra-ui/react";
import { Footer, Header } from "components";
import { mbtiResults } from "constants/mbti";
import questions from "constants/questions";
import { ConditionRoute } from "containers/ConditionRoute";
import { AnimatePresence } from "framer-motion";
import { About, Calculate, Home, Question, Result } from "page";
import React, { FC, useCallback } from "react";
import { Switch, Route, RouteComponentProps, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserAnswerState from "store/UserAnswerState";

const App: FC = () => {
  const userAnswer = useRecoilValue(UserAnswerState);
  const requireFilledAnswer = useCallback(
    ({ match }: RouteComponentProps<{ round: string }>) => {
      const round = Number.parseInt(match.params.round) || questions.length;
      return (
        round > 0 &&
        round <= questions.length &&
        userAnswer.slice(0, round - 1).every(val => val !== undefined)
      );
    },
    [userAnswer]
  );
  const checkResultPage = ({ match }: RouteComponentProps<{ mbti: string }>) =>
    mbtiResults.some(r => r.id === match.params.mbti.toUpperCase());

  return (
    <Flex direction="column" w="full" m="0 auto" minH="100%" maxW="640px">
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
                  path="/questions/:round"
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
                  path="/result/:mbti"
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
