import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

type CounterProps = {
  count: number;
};
export const Counter: FC<CounterProps> = ({ count }) => (
  <Box
    borderRadius={20}
    bgColor="#E5E5E5"
    color="#4F5985"
    fontSize="sm"
    width="full"
    p={1}
    textAlign="center"
  >
    {`숭실대학생 ${count}명 참여중!`}
  </Box>
);
