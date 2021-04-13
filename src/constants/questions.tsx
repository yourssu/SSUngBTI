import { Text } from "@chakra-ui/react";

import { SbtiAtom } from "constants/sbti";

export interface Question {
  content: JSX.Element | string;
  kind: [SbtiAtom, SbtiAtom];
  answers: [string, string, string, string];
}

const questions: Question[] = [
  {
    // 1
    kind: ["S", "N"],
    content: (
      <>
        {"처음 숭실대 로고를"}
        <br />
        {"보고 든 생각은?"}
      </>
    ),
    answers: [
      "그냥 아무 생각이 없다",
      "로고를 평가한다",
      "색깔이 눈에 띈다",
      "로고의 의미가 무엇일까 생각해본다",
    ],
  },
  {
    // 2
    kind: ["E", "I"],
    content: "새터 전날 밤에 당신은?",
    answers: [
      "새내기 단톡방에서 이미 대학교 친구들과 연락하고 있다",
      "새로운 친구들을 만날 생각에 불안하고 긴장된다",
      "새로 만날 친구들에 설레이고 두근거린다",
      "괜히 새터 신청했나 후회하며 밤을 지새운다",
    ],
  },
  {
    // 3
    kind: ["E", "I"],
    content: (
      <>
        {"새터날 버스 안"}
        <br />
        {"처음 만난 친구에게 당신은?"}
      </>
    ),
    answers: [
      `이름부터 물어본다 "혹시 이름이 뭐야?"`,
      "어색해서 창밖이나 스마트폰만 바라본다",
      "많은 이야기를 나누고, 도착쯤엔 이미 짱친이 되어있다",
      "옆에 있는 친구가 질문할 때까지 기다린다",
    ],
  },
  {
    // 4
    kind: ["P", "J"],
    content: (
      <>
        {"과제를 진행할 때"}
        <br />
        {"당신의 모습은?"}
      </>
    ),
    answers: [
      "유튜브는 재밌다~ ㅎㅎ 과제는 내일부터!",
      "유튜브 보다 보니 하루가 다 갔네. 계획을 다시 짜야 겠다",
      "오? 대충 이정도 했으면 금방 끝나겠네~ 놀아야지!",
      "오늘 계획한 분량 클리어! 다 끝냈다!",
    ],
  },
  {
    // 5
    kind: ["S", "N"],
    content: (
      <>
        <Text fontSize="1rem">{`"백마는 분홍색이에요. 중요하니 꼭 외워두세요"`}</Text>
        {" 교수님 말씀에 당신은?"}
      </>
    ),
    answers: [
      "따로 고민하지 않고 곧바로 외운다",
      `"백마가 왜 분홍색인가요??" 교수님께 질문한다`,
      "백마는 흰색 아닌가? 교수님이 맞겠지~ 일단 외우자",
      "고개는 끄덕이고 있으나 이해를 못 하는데 어떻게 외워?",
    ],
  },
  {
    // 6
    kind: ["P", "J"],
    content: "수업 끝나고 당신이 할 일은?",
    answers: [
      "오늘 일정? 그런 거 몰라 숨쉬기~!",
      "플래너에 적혀있는 대로 완벽히 수행 완료!",
      "대충 영어과제 좀 하다가... 저녁 뭐 먹지?",
      "계획은 세웠지만 지킨 거 없이 귀가 ㅎㅋ",
    ],
  },
  {
    // 7
    kind: ["T", "F"],
    content: (
      <>
        <Text fontSize="1rem">
          {"돌계에서 노을을 보고 있던 친구가"}
          <br />
          {"내 생각이 났다며 카톡이 왔다"}
        </Text>
        {"가장 먼저 든 생각은?"}
      </>
    ),
    answers: [
      "노을은 맨날 볼 수 있지 않나? 연락이랑 무슨 상관이지",
      "노을을 보며 날 생각해 주다니! 친구에게 감동ㅠㅠ",
      "뭐라 답장을 보내야 하지.. 그래서 어쩌라는 거지...?",
      "진짜 노을 예쁘다~~ 덕분에 힐링된 기분이다 :)",
    ],
  },
  {
    // 8
    kind: ["T", "F"],
    content: (
      <>
        {"팀플에서 팀원이 과제를"}
        <br />
        {"대충 해 왔을 때 당신은?"}
      </>
    ),
    answers: [
      "말하는 시간도 아까우므로 내가 한다",
      "칭찬과 격려로 돌려 말한 뒤 다시 부탁한다",
      "부족한 부분을 이야기하고 다시 부탁한다",
      "내 말에 상대가 기분이 상할까 봐 내가 한다",
    ],
  },
  {
    // 9
    kind: ["T", "F"],
    content: "친구들이 보는 당신은?",
    answers: [
      "추진력 있는 사람",
      "배려 넘치는 사람",
      "효율적인 사람",
      "포용력 있는 사람",
    ],
  },
  {
    // 10
    kind: ["E", "I"],
    content: "방학 때 주로 당신은?",
    answers: [
      "아직도 못 만난 친구들이 너무 많아 매일 약속이 차있다",
      "나 혼자만의 시간은 가져도 가져도 부족하다",
      "사람들도 많이 만났으니 이제 내 시간 좀 가져볼까?",
      "내 시간은 좀 가졌으니 이제 친구들 좀 만나볼까?",
    ],
  },
  {
    // 11
    kind: ["S", "N"],
    content: (
      <>
        {"친구의 생일선물"}
        <br />
        {"어떤 것을 사줄까?"}
      </>
    ),
    answers: [
      "인기 순위에 있는 선물",
      "친구의 분위기와 어울리는 선물",
      "친구가 필요할만한 실용적인 선물",
      "오래 기억에 남을 특별한 선물",
    ],
  },
  {
    // 12
    kind: ["P", "J"],
    content: "당신이 시간표를 짜는 기간은?",
    answers: [
      "친구가 시간표 짰냐고 물어봤을 때",
      "이미 졸업요건을 보며 무엇을 들을지 대부분 짜놨음",
      "장바구니 넣는 마지막 날~수강신청 하루 전날",
      "강의 계획표나 에타 시간표 업데이트 팝업 알림이 뜨는 날",
    ],
  },
];
export default questions;
