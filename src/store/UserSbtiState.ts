import { selector } from "recoil";

import { EI, SbtiAtom, SbtiType, PJ, SN, TF } from "constants/sbti";
import questions from "constants/questions";
import UserAnswerState from "./UserAnswerState";

type SbtiCount = Map<SbtiAtom, number>;

const UserSbtiState = selector<SbtiType>({
  key: "UserSbtiState",
  get: ({ get }) => {
    const userAnswer = get(UserAnswerState);
    const answerSbti: SbtiAtom[] = userAnswer.map(
      (answer, idx) => questions[idx].kind[answer % 2]
    );
    const count: SbtiCount = new Map([
      ["E", 0],
      ["I", 0],
      ["S", 0],
      ["N", 0],
      ["T", 0],
      ["F", 0],
      ["P", 0],
      ["J", 0],
    ]);
    answerSbti.forEach(answer => count.set(answer, count.get(answer) + 1));
    const ei: EI = count.get("E") > count.get("I") ? "E" : "I";
    const sn: SN = count.get("S") > count.get("N") ? "S" : "N";
    const tf: TF = count.get("T") > count.get("F") ? "T" : "F";
    const pj: PJ = count.get("P") > count.get("J") ? "P" : "J";
    return `${ei}${sn}${tf}${pj}` as const;
  },
});
export default UserSbtiState;
