import { useEffect, useState } from "react";
import { appData } from "repo";

export default function useAppCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = appData.onSnapshot(
      doc => {
        setCount(doc.get("count"));
      },
      err => {
        setCount(-1);
        console.log(err);
      }
    );
    return () => unsubscribe();
  }, []);
  return count;
}
