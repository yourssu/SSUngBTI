import { atom } from "recoil";

const CountState = atom<number>({
  key: "CountState",
  default: 0,
});
export default CountState;
