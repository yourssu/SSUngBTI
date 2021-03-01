type EI = "E" | "I";
type SN = "S" | "N";
type TF = "T" | "F";
type PJ = "P" | "J";
export type MbtiAtom = EI | SN | TF | PJ;
export type MbtiResult = [EI, SN, TF, PJ];

export const AvailableMbtiResults = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
