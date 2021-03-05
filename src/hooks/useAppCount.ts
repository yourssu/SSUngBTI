import { useEffect, useState } from "react";
import { appData } from "repo";

export default function useAppCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = appData.onSnapshot(doc => {
      setCount(doc.get("count"));
    });
    return () => unsubscribe();
  }, []);
  return count;
}
