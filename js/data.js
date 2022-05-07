const qnaList = [
    {
        q: "Q. 처음보는 양철나무꾼이 같이 학식 먹을래? 라고 한다면?",
        a: [
            { answer: "그래 좋아!", type: "E" },
            { answer: "안 먹었지만 이미 먹었다고 하고 빠르게 지나간다.", type: "I" }
        ]
    },
    {
        q: "Q. 일곱 난쟁이들이 “우리 나가서 놀 건데 같이 나가서 놀래? 아니면 집에 있을 래?” 라고 한다면 나는?",
        a: [
            { answer: "완전 좋지! 어디 가는데?", type: "E" },
            { answer: "아니... 나는 집에 있을래 다녀와~", type: "I" }
        ]
    },
    {
        q: "Q. 무도회에 초대받은 나, 무도회 시작 3시간전에 신데렐라 발목부상으로 무도회가 취소되었다. 이때 나는?",
        a: [
            { answer: "앗싸! 더 자야지!", type: "I"},
            { answer: "준비 다했는데...옷 다 준비했는데... 기대했는데... 너무해푸앙....", type: "E"}
        ]
    },
    {
        q: "Q. 빨간 사과를 발견했다. 빨간 사과를 보고 나는?",
        a: [
            { answer: "색이 빨갛고 예쁘네! ", type: "S"},
            { answer: "독 사과 아니야? 백설공주가 이거 먹고 쓰러졌었는데...", type: "N"}
        ]
    },
    {
        q: "Q. 동화 출품 마감이 내일인데, 마지막장이 써지지 않는다. 이때 나는?",
        a: [
            { answer: "아직도 생각을 못하고 있다니, 나한테 실망이야.", type: "S"},
            { answer: "(제때 마감 못해서 출판사 팀장님을 실망시키고 사람들에게 쪽팔림 당해서 결국 매장당하는 온갖 극단적인 최악의 상황들을 상상함)", type:"N"}
        ]
    },
    {
        q: "Q. 견우와 직녀랑 함께 까치가 연결해준 다리로 건너가고 있었는데, 직녀가 “너 여기서 떨어지면 누구를 구할 거야?”라고 물었다. 이때 나는?",
        a: [
            { answer: "그런 생각을 왜 해? 너가 왜 떨어져?", type:"S"},
            { answer: "진지하게 고민해서 답해준다.", type:"N"}
        ]
    },
    {
        q: "Q. 라푼젤이 탈모가 왔다. 이때 나는?",
        a: [
            { answer: "이 발모샴푸가 좋다던데, 이거 한번 써봐. 초기에 관리하는게 중요해", type:"T"},
            { answer: "속상하겠다... 근데 너 원래 머리 숱 많았어서 하나도 티 안나!", type:"F"}
        ]
    },
    {
        q: "Q. 알리바바가 양탄자를 타고 가던 중 새들과 부딪히는 사고가 났다. 이때 나의 반응은?",
        a: [
            { answer: "괜찮아? 안 다쳤어? 많이 놀랐겠다.", type:"F"},
            { answer: "양탄자 보험은 들었어?", type:"T"}
        ]
    },
    {
        q: "Q. 겁쟁이 사자가 양철 나무꾼한테 혼나고 울고 있다. 이때 나는?",
        a: [
            { answer: "무슨 일이야... 그래도 이렇게까지 말하는 건 심한 거 아닌가? 괜찮아?", type:"F"},
            { answer: "왜 혼났는데? 울지 말고 이야기해봐", type:"T"}
        ]
    },
    {
        q: "Q. 약속시간까지 10분이 남았는데 시계토끼가 시간이 없다면서 나를 재촉한다. 이때 나는?",
        a: [
            { answer: "이미 계산했지! 2분이따 출발해도 안 늦어! 괜찮아", type:"J"},
            { answer: "괜찮아 늦으면 택시 타고 가면 되지~", type:"P"}
        ]
    },
    {
        q: "Q. 할 일이 아직 많이 남아 있는 데 도깨비가 같이 놀자고 한다. 이때 나는?",
        a: [
            { answer: "오늘 이거 끝내야 해서 안될 것 같아! 다음에 놀자~", type:"J"},
            { answer: "할 일은 내일 해도 돼! 같이 가자~", type:"P"}
        ]
    },
    {
        q: "Q. 팥쥐 엄마가 돌아오기 전까지 집안일을 다 끝내 놓으라고 한다. 이때 나는?",
        a: [
            { answer: "뭐부터 해야 할지 계획을 정하고 실행한다.", type:"J"},
            { answer: "일단 눈에 보이는 것부터 치우기 시작한다.", type:"P"}
        ]
    },
];

const orderList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const select = [];

const resultList = [
    {
        type:"ISTJ",
        name:"ISTJ: 프로걱정러, 겁쟁이 사자푸앙 ”오즈의 마법사”",
        desc_1:"당신은 논리주의자형인 사자푸앙!",
        desc_2:"가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지해요! 청렴 결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 우리는, 가정 내에서 뿐만 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다!",
        desc_3:"이 유형의 푸앙이들은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있어요! 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리하는 멋진 푸앙이다 푸앙!!"
    },
    {
        type:"ISFJ",
        name:"ISFJ: 위기에 빠진 주인공을 돕는 두꺼비푸앙 “콩쥐팥쥐”",
        desc_1:"조용하고 차분하며 따뜻하고 친근한 당신은 두꺼비 푸앙!",
        desc_2:"책임감과 인내력 또한 매우 강하며, 본인의 친한 친구나 가족에게 애정이 가득합니다. 이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 푸앙입니다!",
        desc_3:"수호자형 사람은 무엇을 받으면 몇 배로 베푸는 진정한 이타주의자로 열정과 자애로움으로 일단 믿는 두꺼비푸앙이라면 타인과도 잘 어울려 일에 정진한다푸앙!"
    },
    {
        type:"INFJ",
        name:"INFJ: 상상력이 풍부한 동화작가, 안데르센푸앙 “동화작가”",
        desc_1:"인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구하는 당신은 안데르센푸앙!",
        desc_2:"창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이 영향력을 끼쳐요. 독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자 푸앙이들이 많습니다!",
        desc_3:"한 곳에 몰두하는 경향으로 목적 달성에 필요한 주변적인 조건들을 경시하기 쉽고, 자기 내부의 갈등이 많고 복잡합니다푸앙... 우리들은 풍부하고 감성적인 내적인 성격을 갖고 있어요!"
    },
    {
        type:"INTJ",
        name:"INTJ: 교활한 마녀, 주인공을 위험에 처하게 하는 마녀 우르푸앙 “인어공주”",
        desc_1:"지식을 향한 갈증이 있고 ‘책벌레’라는 소리를 자주 듣는 당신은 우르푸앙!",
        desc_2:"대개 친구들 사이에서는 놀림의 표현임에도 불구하고 전혀 개의치 않아 하며, 오히려 깊고 넓은 지식을 가지고 있는 우리는 자신에게 남다른 자부심을 느껴요!",
        desc_3:"우리는 또한 관심 있는 특정 분야에 대한 우리가 가지고 있는 방대한 지식을 다른 이들과 공유하고 싶어 한다푸앙! 반면, 일명 가십거리와 같이 별 볼 일 없는 주제에 대한 잡담거리보다는 우리 나름의 분야에서 용의주도하게 전략을 세우거나 이를 실행해 옮기는 일을 선호해요!"
    },
    {
        type:"ISTP",
        name:"ISTP: 낯선 곳에 홀로 고립된 공주! 뭐든 혼자서도 잘함, 라푼젤푸앙 “라푼젤”",
        desc_1:"당신은 타인을 잘 도우며 그들의 경험을 다른 이들과 공유하는 것을 좋아하기도 하는 라푼젤 푸앙! 우리는 인구의 5% 차지해요!",
        desc_2:"우리는 직접 손으로 만지고 눈으로 보면서 주변 세상을 탐색하는 것을 좋아해요.",
        desc_3:"무엇을 만드는 데 타고난 재능을 가진 이들은 하나가 완성되면 또 다른 과제로 옮겨 다니는 등 실생활에 유용하면서도 자질구레한 것들을 취미 삼아 만드는 것을 좋아하는데, 그러면서 새로운 기술을 하나하나 터득해 나가는 기술자 푸앙이다푸앙!!!"
    },
    {
        type:"ISFP",
        name:"ISFP: 이쪽 저쪽 돌아다니지만 결정적일 때 도움을 주는, 팅커벨푸앙 “피터팬”",
        desc_1:"말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않는 당신은 팅커벨푸앙!",
        desc_2:"사람과 관계되는 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한 경향이 있어요...",
        desc_3:"눈치가 빠르며, 조용히 자기 일만 하고 있는 것처럼 보이지만 사실 주변 상황파악도 다 하고 있다푸앙!"
    },
    {
        type:"INFP",
        name:"INFP: 꿈과 환상으로 가득한 숲 속에서 노래하는 공주님, 백설공주푸앙 “백설공주”",
        desc_1:"최악의 상황이나 악한 사람에게서도 좋은 면만을 바라보며 긍정적이고 더 나은 상황을 만들고자 노력하는 당신은 백설공주푸앙!",
        desc_2:"간혹 침착하고 내성적이며 심지어는 수줍음이 많은 사람처럼 비추어지기도 하지만, 우리 안에는 불만 지피면 활활 타오를 수 있는 열정의 불꽃이 숨어있다푸앙!",
        desc_3:"인구의 대략 4%를 차지하는 우리는 간혹 사람들의 오해를 사기도 하지만, 일단 마음이 맞는 사람을 만나면 우리 안에 내재한 충만한 즐거움과 열정을 표출합니다!"
    },
    {
        type:"INTP",
        name:"INTP: 자신을 무시하는 존재들 때문에 흑화함, 하트여왕 푸앙 “이상한나라의 앨리스”",
        desc_1:"당신은 조용하고 과묵하며 논리와 분석으로 문제를 해결하기를 좋아하는 하트여왕 푸앙!",
        desc_2:"먼저 대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이 하는 편이에요.",
        desc_3:"이해가 빠르고 직관력으로 통찰하는 능력이 있으며 지적 호기심이 많고 논리적인 똑똑이 푸앙이다 푸앙!!!"
    },
    {
        type:"ESTP",
        name:"ESTP: 용사들을 발라버리는 최강 빌런 역할, 호랑푸앙 “해와달”",
        desc_1:"여러 사람이 모인 행사에서 이 자리 저 자리 휙휙 옮겨 다니는 무리 중, 어렵지 않게 찾아볼 수 있는 당신은 호랑푸앙!",
        desc_2:"직설적이면서도 친근한 농담으로 주변 사람을 웃게 만드는 우리는 주변의 이목을 끄는 것을 좋아해요!",
        desc_3:"만일 관객 중 무대에 올라올 사람을 호명하는 경우, 우리는 제일 먼저 자발적으로 손을 들거나 아니면 쑥스러워하는 친구를 대신하여 망설임 없이 무대에 올라서기도 하는 자신감있는 푸앙이다푸앙!"
    },
    {
        type:"ESFP",
        name:"ESFP: 이야기에 개그요소를 더해주는 감초 역할, 진저브레드푸앙 “슈렉”",
        desc_1:"갑자기 흥얼거리며 즉흥적으로 춤을 출 수 있는 연예인형 당신은 진저브레드푸앙!",
        desc_2:"이들은 순간의 흥분되는 감정이나 상황에 쉽게 빠져들며, 주위 사람들 역시 그런 느낌을 만끽하기를 원해요!",
        desc_3:"다른 이들을 위로하고 용기를 북돋아 주는 데 이들보다 더 많은 시간과 에너지를 소비하 는 푸앙이는 없을 겁니다!! 더욱이나 다른 유형의 푸앙과는 비교도 안 될 만큼 거부할 수 없는 매력을 가진 푸앙이다 푸앙!"
    },
    {
        type:"ENFP",
        name:"ENFP: 만능캐지만 왠지 엄청 믿음직하진 않은 램프의 푸앙 “알리바바 40인의 도적”",
        desc_1:"자유로운 사고의 소유자인 당신은 활동가형 램프의 푸앙!",
        desc_2:"종종 분위기 메이커 역할을 하기도 하는 이들은 단순한 인생의 즐거움이나 그때그때 상황에서 주는 일시적인 만족이 아닌 타인과 사회적, 정서적으로 깊은 유대 관계를 맺음으로써 행복을 느껴요!",
        desc_3:"매력적이며 독립적인 성격으로 활발하면서도 인정이 많은 우리들은 인구의 대략 7%에 속하며, 어느 모임을 가든 어렵지 않게 만날 수 있는 인싸푸앙이다 푸앙!"
    },
    {
        type:"ENTP",
        name:"ENTP: 장난꾸러기, 주로 하는 일은 장난치기와 정신 나간 계획구상하기, 도깨비 푸앙",
        desc_1:"군중을 선동하는 변론가형 당신은 도깨비푸앙!",
        desc_2:"일명 선의의 비판자인 변론가형 푸앙이는 단순히 재미를 이유로 비판을 일삼아요! 이는 천부적으로 재치 있는 입담과 풍부한 지식을 통해 논쟁의 중심에 있는 사안과 관련한 우리의 이념을 증명해 보일 수 있다푸앙",
        desc_3:"본인이 구상하는 바를 실현시키고 싶어 하는 기질이 강하며, 여기에 특유의 아웃사이더적인 성격까지 겹쳐 말 그대로 혁명가의 기질을 띠고 있는 혁명가푸앙이다 푸앙!!!"
    },
    {
        type:"ESTJ",
        name:"ESTJ: 용맹하고 자신감 넘치며 아버지를 구하러 떠나는 심청푸앙 “심청전”",
        desc_1:"사회나 가족을 하나로 단결시키기 위해 필요한 질서를 정립하는 데 이바지하는 당신은 심청푸앙!",
        desc_2:"정직하고 헌신적이며 위풍당당한 이들은 비록 험난한 가시밭길이라도 조언을 통하여 그 들이 옳다고 생각하는 길로 푸앙이들을 인도해요!",
        desc_3:"군중을 단결시키는 데에 일가견이 있기도 한 우리는 종종 사회에서 지역사회조직가와 같은 임무를 수행하며, 지역 사회 발전을 위한 축제나 행사에서부터 가족이나 사회를 하나로 결집하기 위한 사회 운동을 펼치는 데 푸앙이들을 모으는 역할을 하기도 한다푸앙!"
    },
    {
        type:"ESFJ",
        name:"ESFJ: 빛나는 드레스를 들고 튀어나올 준비가 되어 있는 신데렐라 요정 대모푸앙 “신데렐라”",
        desc_1:"한마디로 정의 내리기는 어렵지만, 간단히 표현하자면 당신은 ‘인기쟁이’인 요정 대모푸앙!",
        desc_2:"인구의 대략 12%를 차지하는 꽤 보편적인 성격 유형으로, 이를 미루어 보면 왜 이 유형의 푸앙이가 인기가 많은 지 이해가 된다푸앙! 우리는 분위기를 좌지우지하며 여러 푸앙이의 스포트라이트를 받거나 학교에 승리와 명예를 불러오도록 팀을 이끄는 역할을 하기도 해요!",
        desc_3:"우리들은 또한 훗날 다양한 사교 모임이나 어울림을 통해 주위 사람들에게 끊임없는 관심과 애정을 보임으로써 다른 이들을 행복하고 즐겁게 해주고자 노력하는 애정듬뿍푸앙이다 푸앙!!"
    },
    {
        type:"ENFJ",
        name:"ENFJ: 지혜와 도움을 제공하는 까치푸앙 ”견우와 직녀”",
        desc_1:"따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많은 당신은 지혜로 운 까치푸앙!",
        desc_2:"상당히 이타적이고 민첩하고 참을성이 많으며, 다른 푸앙이들의 생각이나 의견에 진지한 관심을 가지고 공동선을 위하여 다른 푸앙이의 의견에 대체로 동의합니다. 미래의 가능성을 추구하며 능숙하게 계획을 제시하고 집단을 이끌어가는 능력이 있는 푸앙이예요!",
        desc_3:"때때로 다른 푸앙이들의 좋은 점을 지나치게 이상화하는 경향이 있으며 다른 사람들에 대해서도 자기와 같을 것이라고 생각하는 경향이 있다푸앙!"
    },
    {
        type:"ENTJ",
        name:"ENTJ: 능숙하게 주위사람들을 통솔하고 꾀가 많은 꾀돌이 토끼푸앙 “별주부전”",
        desc_1:"천성적으로 타고난 리더인 당신은 꾀돌이 토끼푸앙!",
        desc_2:"이 유형에 속하는 푸앙이는 인구의 단 3%에 해당하는 유형이예요! 넘치는 카리스마와 자신감으로 공통의 목표 실현을 위해 다른 이들을 이끌고 지휘합니다!",
        desc_3:"진취적인 생각과 결정력, 그리고 냉철한 판단력을 가졌어요! 우리가 세운 목표 달성을 위해 가끔은 무모하리만치 이성적 사고를 하는 것이 특징이다푸앙!!"
    },
]