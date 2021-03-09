import { Box } from "@chakra-ui/react";
import { animate } from "framer-motion";
import React, { FC, useEffect, useRef } from "react";

type CounterProps = {
  count: number;
};
export const Counter: FC<CounterProps> = ({ count }) => {
  const countRef = useRef<HTMLSpanElement>();
  const prevVal = useRef<number>(0);
  useEffect(() => {
    if (count === -1) return;
    const counter = countRef.current;
    const controls = animate(prevVal.current, count, {
      duration: 4,
      ease: [0.075, 0.82, 0.165, 1],
      onUpdate(val) {
        counter.textContent = val.toFixed(0);
      },
    });
    return () => {
      controls.stop();
      prevVal.current = count;
    };
  }, [count]);
  return (
    <Box
      borderRadius={20}
      bgColor="brandBG"
      color="brand"
      fontSize="0.875em"
      fontWeight="bold"
      p={1}
      textAlign="center"
    >
      {count === -1 ? (
        <>
          {`슝슝이들의 애정을 너무많이 받아 섭폭..`}
          <br />
          {`4000명 이상이 사용함!`}
        </>
      ) : (
        <>
          {`숭실대학생 `}
          <span ref={countRef}>{count}</span>
          {`명 참여중!`}
        </>
      )}
    </Box>
  );
};
