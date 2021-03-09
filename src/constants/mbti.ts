export type EI = "E" | "I";
export type SN = "S" | "N";
export type TF = "T" | "F";
export type PJ = "P" | "J";
export type MbtiAtom = EI | SN | TF | PJ;
export type MbtiType =
  | "ISTJ"
  | "ISFJ"
  | "INFJ"
  | "INTJ"
  | "ISTP"
  | "ISFP"
  | "INFP"
  | "INTP"
  | "ESTP"
  | "ESFP"
  | "ENFP"
  | "ENTP"
  | "ESTJ"
  | "ESFJ"
  | "ENFJ"
  | "ENTJ";

export type MbtiResult = {
  id: MbtiType;
  type: number;
  title: string;
  subtitle: string;
  description: string;
  compatibility: [MbtiType, MbtiType];
};
export const mbtiResults: MbtiResult[] = [
  {
    id: "ISTJ",
    type: 0,
    title: "로보트 슝슝이",
    subtitle: "카페에서 매번 같은 메뉴 시키는",
    description:
      "당신은 정확하고 빈틈이 없는 사람이군요! 약속시간 지키는 걸 중요하게 생각해서 수업에는 절대 늦지 않아요. 그리고 팀플 수업은 최대한 피해요. 남들이랑 같이 하는 것보단 혼자 하는 게 편하고 빨라요. 과제나 공부를 하기 전엔 목표와 계획을 세우는데 성실하고 부지런한 성격이라 계획대로 잘 해내요. 남한테 관심이 별로 없고 남 이야기에 공감을 잘 못해요. 혼자 있는 시간이 있어야 스트레스를 받지 않아요. 규칙적인 생활이 좋아요. 새로운 변화가 싫고 익숙함에 편안함을 느끼거든요. 본인이 겪어보지 않은 일에 대해서는 시도 자체를 안 하는 편이에요. 가끔은 새로움에 도전해보는 건 어떨까요?",
    compatibility: ["ESFP", "ESTP"],
  },
  {
    id: "ISFJ",
    type: 1,
    title: "스윗한 슝슝이",
    subtitle: "직접 만든 쿠키 나눠주는",
    description:
      "당신은 자상하고 섬세한 사람이군요! 주변 사람들에게 잘 맞춰주다 보니 조용할 때도 활발할 때도 있어요. 주변 친구들에게 관심이 많고 상대를 배려할 줄 알죠. 하지만 어떻게 보면 남 눈치를 많이 봐요. 여러 사람과 두루두루 친하지만 인간관계에서 스트레스를 많이 받아 소수의 깊은 관계를 선호해요. 계획 세우는 걸 좋아하지만 잘 지키지 않아요. 게으른 완벽주의자예요. 섬세하고 완벽을 추구해서 과제하는데 시간이 오래 걸리기도 해요. 주로 다수의 의견을 따르는 편이고, 책임감이 강해서 시키는 일은 잘 해내요. 그래서 팀플에서는 최고의 서포터 역할을 맡고 있죠. 자기 주관은 뚜렷하나 소심하기도 하고 남들의 말에 맞춰주려다가 속앓이 할 때가 있어요. 분명하게 본인의 생각을 이야기하는 연습을 해보면 좋겠어요!",
    compatibility: ["ESFP", "ESTP"],
  },
  {
    id: "INFJ",
    type: 2,
    title: "드리머 슝슝이",
    subtitle: "머리 속이 판타지 세상!",
    description:
      "당신은 끝없이 생각을 하는 사람이군요! 슝슝이의 머릿속은 쉬지 않아요. 생각과 망상으로 가득해요. 심리학, 철학, 인문학 등 추상적인 내용을 배우는 과목들을 좋아하기도 해요. 과제가 생기면 계획을 세우고 미리미리 해내는 편이에요. 남에게 피해 주는 걸 싫어해서 팀플에는 열심히 참여해요. 친구들의 이야기를 잘 들어주고 공감을 잘 해주는 건 물론, 통찰력과 배려심이 있어 친구들의 감정이나 속마음을 잘 알아채고 챙겨주려고 노력해요. 주변에게 친절하고 다정다감하지만 슝슝이의 맘속의 선을 넘는 건 싫어해요. 사람에 대해 관심이 많지만 자기 속내를 잘 드러내지 않는군요. 가끔은 본인의 감정이나 속내를 표현해보는 건 어떨까요?",
    compatibility: ["ENFP", "ENTP"],
  },
  {
    id: "INTJ",
    type: 3,
    title: "똑똑이 슝슝이",
    subtitle: "공부하러 스스로 동굴 들어간",
    description:
      "당신은 굉장히 효율적인 사람이군요! 완벽주의 성향이 강해서 모든 일에 철저하고 세세한 계획을 짜고는 해요. 목표를 달성하면 큰 행복을 느낀답니다! 개인 시간과 공간이 필요해서 혼자 있는 게 제일 좋아요. 사람들보단 동물들과 노는 게 좋더라고요. 대신 논리적인 이야기는 자신 있어요! 토론하는 수업을 좋아해요. 논리적으로 이기는 것이 가장 뿌듯하답니다. 사람 얼굴이나 이름을 잘 기억 못 하다 보니 학교에서 누군가 인사를 해도 기억이 잘 안날 때가 많아요. 팀플을 할 때 팀장은 안 하지만 자연스레 팀장 역할을 하고 있어요. 효율적으로 일이 진행되길 바라기 때문이에요. 이렇게 완벽을 추구하면서도 독립적이다 보니 본인에게 만족을 하지 못할 때가 많아요. 충분히 멋진 당신에게 칭찬을 해주세요!",
    compatibility: ["ENFP", "ENTP"],
  },
  {
    id: "ISTP",
    type: 4,
    title: "마이웨이 슝슝이",
    subtitle: "유유자적한 혼자 놀기 만렙",
    description:
      "당신은 언제나 최적의 효율을 찾는 사람이군요! 열심히 해서 받는 A보다 적당히 해서 받는 B가 더 좋은 당신, 시험공부 계획을 짤 땐 큰 틀 위주로 짜는 편이에요. 매번 벼락 치기를 하다 보니 벼락치기에 완전 도사! 또 큰 문제가 없다면 주변에 관심을 잘 쓰지 않는 타입이라 칭찬이나 비판에도 별 감흥이 없는 사람이에요. 그래서 주변 친구들에게 감정 없다는 소리도 자주 들어요. 다양한 분야에 관심이 많아서 넓고 얕은 지식의 소유자예요. 하지만 쉽게 질리는 성향도 가지고 있어요. 고집이 센 편이지만 다른 사람의 부탁을 잘 거절하지 못하고 마음이 약하답니다.",
    compatibility: ["ESFJ", "ESTJ"],
  },
  {
    id: "ISFP",
    type: 5,
    title: "보름달 슝슝이",
    subtitle: "긍정의 에너지로 세상을 밝히는",
    description:
      "당신은 따뜻하고 정이 많은 사람이군요! 주변으로부터 따뜻한 사람이라는 평가를 많이 받지만 부탁을 잘 거절하지 못하고 주변을 잘 신뢰하는 버릇이 있어서 크게 당한 기억이 있지 않나요? 그래도 당신의 긍정적 에너지는 주변을 밝게 한답니다. 덕분에 누구하고나 잘 맞추어 가는 성격이라는 평가를 받아요. 팀 프로젝트나 과제를 할 때 팀을 주도해 나가는 리더십은 조금 부족할지라도 성격이 유하고 부드럽다는 평가를 많이 받아요. 팀원들이 서로 잘 섞일 수 있도록 하는 당신! 그렇지만 가끔은 충동적인 모습으로 모두를 깜짝 놀라게 하는 반전 매력의 소유자예요",
    compatibility: ["ENFJ", "ESFJ"],
  },
  {
    id: "INFP",
    type: 6,
    title: "샤이한 슝슝이",
    subtitle: "튀고 싶은데 튀는 건 싫은",
    description:
      "당신은 혼자서 상상을 펼치는 것을 무척 좋아하군요. 창의적이라는 말을 많이 듣지만 현실 감각이 없다는 이야기도 자주 들어요. 어색한 사람과 단둘이 있는 걸 제일 싫어하지는 않나요? 친하지 않은 사람과 함께 있으면 나도 모르게 원래 성격을 꽁꽁 숨겨요. 명령을 따르는 것을 싫어해서 어색한 사람이 리드하는 팀플은 최악! 하지만 가식적인 모습을 보여주는 것은 싫어서 자신의 모습을 최대한 솔직하게 보여주려고 노력하는 사람이에요. 게으른 완벽주의자 타입이라 스트레스를 받을수록 능률이 떨어지는 타입이에요. 이번 학기 시험공부는 미리미리 계획을 세워서 해보는 걸 추천해요!",
    compatibility: ["ENFJ", "ENTJ"],
  },
  {
    id: "INTP",
    type: 7,
    title: "고양이 슝슝이",
    subtitle: "생각 좀 하게 나가라냥!",
    description:
      "당신은 주변보다 본인에게 집중하는 스타일이군요! 사교적인 활동을 하는 것보다 나만의 세계가 더 좋지 않나요? 그래서 혼자만의 시간도 꼭 필요하고요. 계획은 누구보다 잘 세우지만 그 계획을 지킨 적은 별로 없지 않나요? 그래서 시험공부는 항상 벼락치기에요. 시간표 정하기나 저녁 메뉴 정하기까지 심각한 결정 장애의 소유자예요. 항상 감정보다는 이성이 앞서는 사람이라 친구와 싸웠을 때는 친구의 감정보다 누가 잘못했는지 따지는 게 우선이에요. 가끔은 친구의 마음에 공감하고 왜 그랬을까 생각해 보면 더 좋을 것 같아요!",
    compatibility: ["ENTJ", "ESTJ"],
  },
  {
    id: "ESTP",
    type: 8,
    title: "탱탱볼 슝슝이",
    subtitle: "어디로 튈 줄 모르는",
    description:
      "당신은 분위기를 밝게 띄우는데 매우 능숙한 사람이군요. 노는 것과 술자리를 좋아해요. 리더십도 가진 사람이기 때문에 팀플의 조장을 맡는 경우가 많아요. 책을 통한 공부보다는 경험을 통한 배움을 더 좋아해요. 그리고 묶여있지 않은 자유로운 상태일 때 더더더 잘 해내는 사람이에요. 사람을 만날 때 선입견 없이 사람을 보고 아주 개방적인 사람이에요. 눈치를 많이 보지 않고, 스트레스도 받지 않는 편이에요. 즉흥적으로 행동하는 경우가 많아 오늘 하루의 내가 무엇을 어떻게 할지는 본인도 잘 몰라요. 당신은 항상 삶을 즐기려 하는 YOLO의 대표 주자! 대담한 성격 때문에 위험이 발생하기 쉬우니, 조금 조심하는 것이 좋을 것 같아요!",
    compatibility: ["ISFJ", "ISTJ"],
  },
  {
    id: "ESFP",
    type: 9,
    title: "인기쟁이 슝슝이",
    subtitle: "파티 하이라이트를 장식하는",
    description:
      "당신은 재미있는 성격으로 항상 즐거움과 재미를 추구하는 사람이군요! 집에 있으면 무기력한 느낌이 들어 쉬는 날도 대부분 외출을 하며 에너지를 얻어요. 집에 혼자 있는 것은 너무너무 심심하거든요. 정이 많아 기본적으로 사람을 좋아해요. 말을 위트 있게 잘하고, 대화할 때 소재가 떨어지지 않아요. 새로운 스타일을 찾고 시도하는 것을 좋아하고, 많은 사람들 속에서도 반짝반짝 빛날 수 있는 방법을 항상 찾아요. 과제와 같은 주어진 일은 발등에 불이 떨어져야 행동에 옮기는 경우가 대부분이에요. 계획은 언제든 변할 수 있다 생각하기 때문에 계획을 아예 세우지 않는 경우가 많아요. 중요한 일에 대해서는 미래를 생각해 보고 계획을 세워보는 것은 어떨까요?",
    compatibility: ["ISFJ", "ISTJ"],
  },
  {
    id: "ENFP",
    type: 10,
    title: "분신술 슝슝이",
    subtitle: "제발 가만히 좀 있어!",
    description:
      "당신은 사람을 기쁘게 해주는 타고난 능력을 가지고 있군요. 그렇기에 술자리나 모임에서 독보적인 인상을 남기기도 해요! 흥미 있고 관심 있는 것에는 엄청난 열정을 쏟지만 그렇지 않은 것에는 아예 관심이 없어요. 그리고 뭐든 금방 질려 하기도 해요. 호불호가 강해 인간관계도 극단적인 경우가 많아요. 당신은 사람들과 어울리며 기쁨을 느끼지만 혼자만의 시간 또한 꼭 필요한 사람이에요! 혼자 있을 때는 철저히 혼자가 되어 시간을 보내요. 감정 기복이 심한 편이라 갑자기 기뻤다가 갑자기 우울해지기도 해요. 과제와 같은 할 일이 주어졌을 때는 계획을 세워 해내기보단 그때그때 처리하는 편이에요. 종종 계획을 세워 좀 더 여유롭고 완벽한 마무리를 해보는 것은 어떨까요?",
    compatibility: ["INFJ", "INTJ"],
  },
  {
    id: "ENTP",
    type: 11,
    title: "모험가 슝슝이",
    subtitle: "새로운 시작은 늘 설레게 하지",
    description:
      "당신은 다재다능한 팔방미인으로 무엇을 하든 간에 평균 이상은 해내는 사람이에요. 마음만 먹으면 무엇이든 해낼 수 있어요. 시험을 볼 때 벼락 치기를 선호하는 경우가 많고, 노력 대비 결과가 괜찮아요. 통찰력이 뛰어나 다른 사람들이 놓칠 법한 부분들을 잘 캐치해요. 자존감이 높아 자신에 대한 확신이 강해요. 자신의 생각을 거리낌 없이 말하며 토론과 논쟁을 좋아해요. 다른 사람이 무엇을 하든 관심이 없고, 그래서 그들이 날 어떻게 생각하는지 신경 쓰지 않아요. 끊임없이 새로운 시도를 하고 하나에 꽂히게 되면 질릴 때까지 그것만 해요. 당신은 새로운 것에 가슴이 뛰는 척척박사군요!",
    compatibility: ["INFJ", "INTJ"],
  },
  {
    id: "ESTJ",
    type: 12,
    title: "본투비 리더 슝슝이",
    subtitle: "완벽은 내 일상일 뿐!",
    description:
      "당신은 어느 누구보다 현실적이고 완벽주의 기질이 있군요! 다른 사람들보다 문제에 대한 해결과 분석을 잘하고, 디테일을 잘 살려요. 내 시간, 내 할 일 방해받는 거 싫어요. 누가 일 못하면 차라리 내가 하고 싶어요. 고집과 강단이 있어 가끔 융통성이 없기도 해요. 계획 틀어지는 게 매우 싫어해요. 시간 약속과 규칙을 어기는 사람들, 대체 왜 그러는 거야! 리더를 맡으면 무척 잘 해내요. 나서기보다는 할 사람이 없을 때, 이 사람은 리더로서 아닐 것 같을 때 나를 위해 리더를 한다고 손을 들진 않나요? 일적으로 인정받는 것도 좋아해서 리더가 되면 팀이 좋은 평가를 받도록 노력해요. 겉과 속이 같아요. 호불호가 확실해서 싫고 좋은 티가 확확 드러나요. 직설적인 언어가 간혹 독이 되기도 하니 조금만 주의를 기울여보는 건 어떨까요?",
    compatibility: ["ISFP", "ISTP"],
  },
  {
    id: "ESFJ",
    type: 13,
    title: "천사 슝슝이",
    subtitle: "들숨에 칭찬, 날숨에 칭찬",
    description:
      "당신은 사회성 만렙 기질을 가지고 계시군요! ‘그럴 수 있지'라는 말을 많이 쓰지는 않나요? 누구보다 긍정 왕, 낙천왕인 당신은 분위기를 잘 파악하고, 차가운 분위기도 잘 해결하곤 해요. 당신에게 있어 새로운 사람을 만나는 일은 매우 흥미롭고 즐거운 일이에요. 사람 사귀는 걸 좋아하고, 어색한 거 못 참고 먼저 말을 꺼내곤 해요. 현실적이고 솔직한 편이지만 상대방을 상처 주지 않으려고 돌려서 말해요. 남을 긍정적으로 바라보고, 칭찬도 잘해줘요. 수업에서는 누구보다 고개를 끄덕여 교수님을 행복하게 해줍니다. 즉흥적으로 행동하면 후회하는 경우가 많을 수 있으니 계획 세운 뒤 행동하는 것을 추천해요!",
    compatibility: ["ISFP", "ISTP"],
  },
  {
    id: "ENFJ",
    type: 14,
    title: "정많은 슝슝이",
    subtitle: "하나 남은 소중한 당근도 주는",
    description:
      "당신은 활발한 성격으로 매일 미소를 띠고 있군요! 정이 넘치고, 퍼주는 게 좋아서 종종 자기 밥그릇을 챙기지 못하고 헌신만 할 때가 있어요. 화가 나면 표현하지 않고 참아내고, 갈등이나 불화를 싫어해 싫은 소리도 잘 못하고 거절도 못 해요! 호구 만렙이군요. 매사에 매우 열정적인 당신은 사람을 좋아해요. 친구들 사이에서 리액션 장인을 맡고 있군요. 혹시 팀플 조장을 맡은 경험이 많지는 않나요? 책임감도 강하고 팀원들을 이끄는 것도 잘해요. 계획을 세우는 것을 좋아해서, 플래너에 빼곡히 계획을 세우고 지킬 때가 가장 행복해요. 만사 걱정도 많아서 스트레스가 넘쳐요. 타인에게 관대하지만, 본인에게 엄격해요. 조금만 더 자신에게 너그러워지는 건 어떨까요?",
    compatibility: ["INFP", "ISFP"],
  },
  {
    id: "ENTJ",
    type: 15,
    title: "열정봇 슝슝이",
    subtitle: "세상에서 제일 나쁜 해충은 대충!",
    description:
      "당신은 자존감과 비전이 높은 사람이군요! 비효율적으로 일하는 상대방, 맡은 일을 몇 번이나 해도 실수하는 상대방을 참기 힘들어해요. 선택과 집중을 잘해요. 본인이 못할 것 같으면 과감하게 포기도 잘해요. 변화에 잘 적응해나가는 당신은 호기심이 왕성해요. 남들보다 아는 것도 많고, 그만큼 배우는 것을 무척 좋아해요. 경쟁을 하면 이겨야죠! 승부욕 왕! 어려운 도전도 즐거운 경험이라 생각해요. 학창 시절에 한자리 하지는 않았나요? 나서기도 좋아하고, 팀을 이끌어서 좋은 성과를 내는 건 더 좋아요! 자기주장이 강하고, 직설적이라서 가끔 친구들이 속상해하기도 해요. 경청과 수용력을 높인다면 더 좋은 리더로 거듭날 거예요!",
    compatibility: ["INFP", "INTP"],
  },
];
