import { useEffect, useState } from "react";
import { getCount } from "repo";

export default function useAppCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setCount(await getCount());
      } catch (err) {
        setCount(-1);
      }
    })();
  }, []);
  return count;
}
