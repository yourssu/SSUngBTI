import { MbtiResult, mbtiResults } from "constants/mbti";
import { useMemo } from "react";

export default function useMbtiResult(
  mbtiIdOrType: string | number
): MbtiResult {
  return useMemo(() => {
    if (typeof mbtiIdOrType === "string") {
      const mbtiId = mbtiIdOrType.toUpperCase();
      return mbtiResults.find(r => r.id === mbtiId);
    } else if (typeof mbtiIdOrType === "number") {
      const mbtiType = mbtiIdOrType;
      return mbtiResults.find(r => r.type === mbtiType);
    }
  }, [mbtiIdOrType]);
}
