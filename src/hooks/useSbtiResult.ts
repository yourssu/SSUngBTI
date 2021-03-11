import { SbtiResult, sbtiResults } from "constants/sbti";
import { useMemo } from "react";

export default function useSbtiResult(
  sbtiIdOrType: string | number
): SbtiResult {
  return useMemo(() => {
    if (typeof sbtiIdOrType === "string") {
      const sbtiId = sbtiIdOrType.toUpperCase();
      return sbtiResults.find(r => r.id === sbtiId);
    } else if (typeof sbtiIdOrType === "number") {
      const sbtiType = sbtiIdOrType;
      return sbtiResults.find(r => r.type === sbtiType);
    }
  }, [sbtiIdOrType]);
}
