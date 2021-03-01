import { MbtiResult, mbtiResults } from "constants/mbti";
import { useParams } from "react-router-dom";

export default function useMbtiResult(): MbtiResult {
  const params = useParams<{ mbti: string }>();
  const mbti = params.mbti.toUpperCase();
  return mbtiResults.find(r => r.id === mbti);
}
