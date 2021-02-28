import questions from "constants/questions";
import { atom } from "recoil";

const UserAnswerState = atom<number[]>({
  key: "UserAnswerState",
  default: [...Array(questions.length)],
});
export default UserAnswerState;
