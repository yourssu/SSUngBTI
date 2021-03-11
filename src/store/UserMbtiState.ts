import { EI, isMbtiType, MbtiAtom, MbtiType, PJ, SN, TF } from "constants/mbti";
import questions from "constants/questions";
import { selector } from "recoil";
import UserAnswerState from "./UserAnswerState";

type MbtiCount = Map<MbtiAtom, number>;

const UserMbtiState = selector<MbtiType>({
  key: "UserMbtiState",
  get: ({ get }) => {
    const userAnswer = get(UserAnswerState);
    const answerMBTI: MbtiAtom[] = userAnswer.map(
      (answer, idx) => questions[idx].kind[answer % 2]
    );
    const count: MbtiCount = new Map([
      ["E", 0],
      ["I", 0],
      ["S", 0],
      ["N", 0],
      ["T", 0],
      ["F", 0],
      ["P", 0],
      ["J", 0],
    ]);
    answerMBTI.forEach(answer => count.set(answer, count.get(answer) + 1));
    const ei: EI = count.get("E") > count.get("I") ? "E" : "I";
    const sn: SN = count.get("S") > count.get("N") ? "S" : "N";
    const tf: TF = count.get("T") > count.get("F") ? "T" : "F";
    const pj: PJ = count.get("P") > count.get("J") ? "P" : "J";
    const result = `${ei}${sn}${tf}${pj}`;
    if (isMbtiType(result)) return result;
    else throw Error("알수없는 성격유형");
  },
});
export default UserMbtiState;
