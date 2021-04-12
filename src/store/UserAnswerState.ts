import { atom } from "recoil";

import questions from "constants/questions";

const UserAnswerState = atom<number[]>({
  key: "UserAnswerState",
  default: [...Array(questions.length)],
});
export default UserAnswerState;
