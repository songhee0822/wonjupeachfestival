export interface ArtistSchedule {
  id: string;
  day: 'day1' | 'day2' | 'day3';
  dayLabel: string;
  time: string;
  artist: string;
  stage: 'main' | 'busking' | 'media';
  stageName: string;
  genre: string;
  summary: string;
  highlightTrack?: string;
  hasGiveaway?: boolean;
}

export interface MapPOI {
  id: string;
  name: string;
  floor: '1F' | '2F';
  category: 'stage' | 'food' | 'drink' | 'goods' | 'facility';
  categoryName: string;
  coordinates: { x: number; y: number };
  hours: string;
  summary: string;
  tip: string;
  icon: string;
}

export interface FoodItem {
  id: string;
  timeType: 'day' | 'night';
  name: string;
  price?: string;
  vendor: string;
  summary: string;
  badge?: string;
}

export interface GoodsItem {
  id: string;
  name: string;
  price?: string;
  summary: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'ticket' | 'alcohol' | 'venue' | 'shuttle';
}

export const FESTIVAL_INFO = {
  title: '원주 피치피치 페스티벌',
  year: '2027',
  dates: '2027. 07. 09 (금) ~ 07. 11 (일)',
  datesShort: '07.09(금) - 07.11(일) · 3일간',
  location: '미로예술 원주중앙시장 거리',
  locationDetail: '강원특별자치도 원주시 중앙시장길 6',
  hours: '금 16:00~23:00 / 토·일 12:00~23:00',
  tagline: '원주 치악산 복숭아 & 미로예술시장 청춘 야시장 페스티벌',
  ticketLinkUrl: 'https://www.ticketlink.co.kr',
};

export const LINEUP_SCHEDULE: ArtistSchedule[] = [
  // DAY 1 (07.09 금) - 야시장 & DJ
  {
    id: 'd1-1',
    day: 'day1',
    dayLabel: '07.09 (금)',
    time: '17:00',
    artist: '미로 버스킹 크루',
    stage: 'busking',
    stageName: '버스킹 스퀘어 (2F)',
    genre: '어쿠스틱',
    summary: '전야제 오프닝 어쿠스틱 버스킹',
    highlightTrack: '복숭아꽃 필 무렵',
  },
  {
    id: 'd1-2',
    day: 'day1',
    dayLabel: '07.09 (금)',
    time: '19:30',
    artist: 'DJ Peach Sunset & VJ NeoWall',
    stage: 'media',
    stageName: '미디어아트 월 (2F)',
    genre: '칠합 / 신스웨이브',
    summary: '벽면 3D 미디어아트와 칠아웃 사운드',
    highlightTrack: 'Neon Peach Alley',
  },
  {
    id: 'd1-3',
    day: 'day1',
    dayLabel: '07.09 (금)',
    time: '20:30',
    artist: '금요 피치 나이트 & 하이볼 파티',
    stage: 'main',
    stageName: '메인 스테이지 (2F)',
    genre: '시티팝 DJ',
    summary: '야시장 오픈 & 복숭아주 시음 디제잉',
    highlightTrack: 'Friday Night Peach',
  },

  // DAY 2 (07.10 토) - 마술, 밴드, 드레스코드, 럭키드로우
  {
    id: 'd2-1',
    day: 'day2',
    dayLabel: '07.10 (토)',
    time: '14:00',
    artist: '루카스의 핑크 버블 마술쇼',
    stage: 'main',
    stageName: '메인 스테이지 (2F)',
    genre: '매직 & 일루션',
    summary: '관객 참여형 일루션 마술과 비눗방울 쇼',
    hasGiveaway: true,
  },
  {
    id: 'd2-2',
    day: 'day2',
    dayLabel: '07.10 (토)',
    time: '16:00',
    artist: '인디 듀오 ‘여름밤달’',
    stage: 'busking',
    stageName: '버스킹 스퀘어 (2F)',
    genre: '어쿠스틱 팝',
    summary: '통기타 선율의 청춘 어쿠스틱 듀오',
    highlightTrack: '분홍빛 스니커즈',
  },
  {
    id: 'd2-3',
    day: 'day2',
    dayLabel: '07.10 (토)',
    time: '18:00',
    artist: '핑크&화이트 드레스코드 콘테스트',
    stage: 'main',
    stageName: '메인 스테이지 (2F)',
    genre: '런웨이 & 이벤트',
    summary: '핑크 착장 런웨이 & 베스트 드레서 시상',
    hasGiveaway: true,
  },
  {
    id: 'd2-4',
    day: 'day2',
    dayLabel: '07.10 (토)',
    time: '19:30',
    artist: '모던록 밴드 ‘사운드웨이브’',
    stage: 'main',
    stageName: '메인 스테이지 (2F)',
    genre: '모던록',
    summary: '에너지 넘치는 4인조 풀밴드 라이브',
    highlightTrack: 'Run with Peach',
  },

  // DAY 3 (07.11 일) - 서커스, 인디, 피날레 럭키드로우
  {
    id: 'd3-1',
    day: 'day3',
    dayLabel: '07.11 (일)',
    time: '14:30',
    artist: '마술 & 서커스 듀오 ‘피치트릭’',
    stage: 'busking',
    stageName: '버스킹 스퀘어 (2F)',
    genre: '스트리트 서커스',
    summary: '골목을 무대로 펼쳐지는 코믹 마술 & 저글링',
    hasGiveaway: true,
  },
  {
    id: 'd3-2',
    day: 'day3',
    dayLabel: '07.11 (일)',
    time: '16:30',
    artist: '싱어송라이터 ‘유라’',
    stage: 'busking',
    stageName: '버스킹 스퀘어 (2F)',
    genre: 'R&B / 드림팝',
    summary: '트렌디한 멜로디의 감성 R&B 보컬',
    highlightTrack: 'Peach Ice Tea',
  },
  {
    id: 'd3-3',
    day: 'day3',
    dayLabel: '07.11 (일)',
    time: '18:30',
    artist: '피치 럭키드로우 & 젤리 골든타임',
    stage: 'main',
    stageName: '메인 스테이지 (2F)',
    genre: '경품 추첨',
    summary: '피치 젤리 증정 & 최종 경품 추첨',
    hasGiveaway: true,
  },
  {
    id: 'd3-4',
    day: 'day3',
    dayLabel: '07.11 (일)',
    time: '20:00',
    artist: '헤드라이너 ‘달빛유람단’ 피날레',
    stage: 'main',
    stageName: '메인 스테이지 (2F)',
    genre: '인디록',
    summary: '대미를 장식할 청춘 피날레 록 콘서트',
    highlightTrack: '우리의 여름은 끝나지 않아',
  },
];

export const MAP_POIS: MapPOI[] = [
  // 2F POIs
  {
    id: 'poi-stage-main',
    name: '피치 메인 스테이지',
    floor: '2F',
    category: 'stage',
    categoryName: '공연 무대',
    coordinates: { x: 50, y: 32 },
    hours: '14:00 - 22:00',
    summary: '밴드 라이브, 마술쇼, 드레스코드 이벤트, 경품 추첨 무대',
    tip: '스탠딩 & 좌석 완비. 공연 20분 전 입장 추천',
    icon: 'Music',
  },
  {
    id: 'poi-stage-busking',
    name: '미로 버스킹 스퀘어 (가동)',
    floor: '2F',
    category: 'stage',
    categoryName: '공연 무대',
    coordinates: { x: 26, y: 34 },
    hours: '15:00 - 18:30',
    summary: '가동 청년 골목에서 즐기는 어쿠스틱 & 싱어송라이터 무대',
    tip: '벤치 좌석 완비, 복숭아 음료 마시며 관람하기 좋습니다',
    icon: 'Mic',
  },
  {
    id: 'poi-media-art',
    name: '골목 3D 미디어아트 월 (나동)',
    floor: '2F',
    category: 'goods',
    categoryName: '포토존 & 전시',
    coordinates: { x: 74, y: 34 },
    hours: '18:00 - 23:00',
    summary: '나동 벽돌 벽면에 펼쳐지는 핑크빛 3D 미디어아트 파사드',
    tip: '밤 8시 이후 인생샷 건지기 가장 좋은 핫스팟!',
    icon: 'Sparkles',
  },
  {
    id: 'poi-bar-custom',
    name: '나만의 피치 하이볼 커스텀 바 (다동)',
    floor: '2F',
    category: 'drink',
    categoryName: '주류 & 칵테일',
    coordinates: { x: 28, y: 68 },
    hours: '16:00 - 23:00',
    summary: '복숭아주 베이스 + 탄산 + 과육 토핑을 직접 고르는 DIY 바',
    tip: '성인인증 팔찌 필수! 무알콜 옵션도 준비되어 있어요',
    icon: 'Wine',
  },
  {
    id: 'poi-bar-tasting',
    name: '치악산 복숭아주 시음 부스 (다동)',
    floor: '2F',
    category: 'drink',
    categoryName: '주류 & 칵테일',
    coordinates: { x: 42, y: 68 },
    hours: '15:00 - 22:30',
    summary: '원주 로컬 양조장 100% 생발효 복숭아 스파클링 무료 시음',
    tip: '축제장 내 유일한 공식 주류 (타 주류 판매 없음)',
    icon: 'GlassWater',
  },
  {
    id: 'poi-goods-shop',
    name: '복숭아 굿즈 & 마스코트 샵 (라동)',
    floor: '2F',
    category: 'goods',
    categoryName: '굿즈 샵',
    coordinates: { x: 72, y: 68 },
    hours: '12:00 - 22:00',
    summary: '한정판 복숭아 키링, 스티커, 인형 및 소품샵 굿즈',
    tip: '구매 고객 전원에게 복숭아 젤리 & 부채 무료 증정',
    icon: 'ShoppingBag',
  },
  {
    id: 'poi-facility-toilet',
    name: '중앙 화장실 (2F 동편)',
    floor: '2F',
    category: 'facility',
    categoryName: '편의시설',
    coordinates: { x: 88, y: 68 },
    hours: '상시 개방',
    summary: '2층 라동 동편 화장실 (장애인 화장실 완비)',
    tip: '1층 북문과 남문에도 화장실이 위치해 있습니다',
    icon: 'DoorClosed',
  },

  // 1F POIs
  {
    id: 'poi-facility-shuttle',
    name: '무료 셔틀버스 정류장 (북문)',
    floor: '1F',
    category: 'facility',
    categoryName: '교통 편의',
    coordinates: { x: 22, y: 20 },
    hours: '11:00 - 23:30',
    summary: '원주역(KTX) ↔ 시외터미널 ↔ 중앙시장 정문 (20분 간격 순환)',
    tip: '티켓 예매 확인 또는 모바일 화면 제시 시 무료 탑승',
    icon: 'Bus',
  },
  {
    id: 'poi-facility-parking',
    name: '전통시장 공영주차타워 (동문)',
    floor: '1F',
    category: 'facility',
    categoryName: '주차 시설',
    coordinates: { x: 82, y: 20 },
    hours: '24시간 운영',
    summary: '도보 2분 거리 350대 규모 주차타워',
    tip: '축제 방문객 공영주차장 할인 혜택 지원',
    icon: 'Car',
  },
  {
    id: 'poi-food-day',
    name: '낮 디저트 & 베이커리 팝업 (1F)',
    floor: '1F',
    category: 'food',
    categoryName: '푸드 존',
    coordinates: { x: 38, y: 50 },
    hours: '12:00 - 18:00',
    summary: '생복숭아 빙수, 피치 타르트, 수제 복숭아 빵 팝업',
    tip: '당일 한정 수량으로 조기 품절될 수 있습니다',
    icon: 'Utensils',
  },
  {
    id: 'poi-food-night',
    name: '밤 중앙시장 야시장 골목 (1F)',
    floor: '1F',
    category: 'food',
    categoryName: '푸드 존',
    coordinates: { x: 62, y: 50 },
    hours: '18:00 - 23:00',
    summary: '원주 명물 손만두, 가마솥 옛날통닭, 노릇노릇 해물파전',
    tip: '로컬 상가 협업 부스! 복숭아주와 최고의 궁합',
    icon: 'Flame',
  },
  {
    id: 'poi-facility-info',
    name: '종합 안내소 & 피치 젤리 나눔',
    floor: '1F',
    category: 'facility',
    categoryName: '편의시설',
    coordinates: { x: 22, y: 80 },
    hours: '11:30 - 23:30',
    summary: '팔찌 교환, 리플렛 수령, 웰컴 피치 젤리 나눔터',
    tip: '우천 시 피치 우비 무료 배부처',
    icon: 'Info',
  },
  {
    id: 'poi-facility-lockers',
    name: '스마트 물품 보관소 (1F 서문)',
    floor: '1F',
    category: 'facility',
    categoryName: '편의시설',
    coordinates: { x: 42, y: 80 },
    hours: '12:00 - 23:30',
    summary: '120칸 스마트 코인라커 (카드 결제 지원)',
    tip: '가방과 짐을 맡기고 편하게 축제를 즐기세요',
    icon: 'Lock',
  },
  {
    id: 'poi-facility-medical',
    name: '의무실 & 응급센터 (1F 남문)',
    floor: '1F',
    category: 'facility',
    categoryName: '편의시설',
    coordinates: { x: 78, y: 80 },
    hours: '12:00 - 23:30',
    summary: '전문 의료 인력 및 구급차 대기, 상비약 구비',
    tip: '어지러움이나 부상 시 즉시 방문하세요',
    icon: 'ShieldAlert',
  },
];

export const FOOD_MENU: FoodItem[] = [
  // DAY POPUPS
  {
    id: 'food-1',
    timeType: 'day',
    name: '치악산 생복숭아 눈꽃빙수',
    vendor: '피치 스노우 랩',
    summary: '당일 수확 생복숭아 슬라이스 눈꽃빙수',
    badge: 'BEST',
  },
  {
    id: 'food-2',
    timeType: 'day',
    name: '바삭 피치 커스터드 타르트',
    vendor: '미로 아틀리에',
    summary: '바닐라 커스터드와 구운 복숭아 타르트',
    badge: '한정수량',
  },
  {
    id: 'food-3',
    timeType: 'day',
    name: '복숭아 우유 크루와상',
    vendor: '원주 청년베이커스',
    summary: '달콤한 복숭아 생크림 크루와상',
  },
  {
    id: 'food-4',
    timeType: 'day',
    name: '스파클링 피치 에이드',
    vendor: '청춘 청과',
    summary: '수제 치악산 복숭아 청 탄산 에이드',
  },

  // NIGHT POPUPS
  {
    id: 'food-5',
    timeType: 'night',
    name: '70년 전통 손만두 & 튀김만두',
    vendor: '중앙시장 원조만두',
    summary: '70년 전통 김치 손만두 & 바삭 튀김만두',
    badge: '야시장 No.1',
  },
  {
    id: 'food-6',
    timeType: 'night',
    name: '가마솥 옛날통닭 & 피치 소스',
    vendor: '시장 낭만통닭',
    summary: '가마솥 옛날통닭과 특제 피치 딥핑소스',
    badge: '안주 추천',
  },
  {
    id: 'food-7',
    timeType: 'night',
    name: '치악산 감자전 & 해물파전',
    vendor: '미로 주막',
    summary: '즉석에서 갈아 부쳐내는 고소한 생감자전',
  },
  {
    id: 'food-8',
    timeType: 'night',
    name: '숯불 닭꼬치 & 피치 글레이즈',
    vendor: '청년 그릴스',
    summary: '숯불 직화 닭다리살 피치 글레이즈 구이',
  },
];

export const GOODS_LIST: GoodsItem[] = [
  {
    id: 'g-1',
    name: '피치퐁 마스코트 인형 키링',
    summary: '보들보들 핑크 복숭아 10cm 인형 키링',
    badge: '인기 1위',
  },
  {
    id: 'g-2',
    name: '미로 골목 아트 스티커팩 (12종)',
    summary: '감성 일러스트 방수 코팅 스티커팩',
    badge: 'BEST',
  },
  {
    id: 'g-3',
    name: '피치 핑크 글리터 스마트톡',
    summary: '핑크 글리터가 흐르는 복숭아 스마트톡',
  },
  {
    id: 'g-4',
    name: '피크닉 매트 & 파우치 세트',
    summary: '공연 관람용 방수 피크닉 매트 세트',
    badge: '한정판',
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'ticket',
    question: '사전 예매는 필수인가요?',
    answer: '안전 인원 관리와 웰컴 젤리·손목밴드 지급을 위해 티켓링크 사전 예매를 권장합니다.',
  },
  {
    category: 'ticket',
    question: '현장 수령은 어디서 하나요?',
    answer: '모바일 바코드를 지참해 1F 종합안내소 방문 시 입장 팔찌와 웰컴 젤리를 수령합니다.',
  },
  {
    category: 'alcohol',
    question: '성인인증 및 주류 구매 안내',
    answer: '신분증 확인 후 성인 전용 팔찌를 부착해 드리며, 미성년자는 무알콜 음료를 이용할 수 있습니다.',
  },
  {
    category: 'venue',
    question: '비가 와도 축제가 열리나요?',
    answer: '실내 돔형 아케이드로 비가 와도 100% 정상 운영되며, 우천 시 우비를 무료 제공합니다.',
  },
  {
    category: 'shuttle',
    question: '셔틀버스는 어디서 탑승하나요?',
    answer: 'KTX 원주역 1번 출구와 시외터미널 건너편에서 20분 간격 무료 순환 운행합니다.',
  },
];

export const TICKET_PACKAGES = [
  {
    id: 'ticket-1day',
    name: '1일 사전예매권',
    badge: '1일권',
    summary: '해당 일자 전체 관람 + 웰컴 피치 젤리 증정',
  },
  {
    id: 'ticket-3day',
    name: '3일 전일정 패스',
    badge: '전일정',
    summary: '3일간 자유 입장 + 웰컴 젤리 + 일요일 럭키드로우 응모',
  },
];
