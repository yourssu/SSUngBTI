import { MbtiResult, mbtiResults } from "constants/mbti";
import { useMemo } from "react";

export default function useMbtiResult(mbti: string): MbtiResult {
  mbti = mbti.toUpperCase();
  return useMemo(() => mbtiResults.find(r => r.id === mbti), [mbti]);
}
