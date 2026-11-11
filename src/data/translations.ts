export type Language = 'ko' | 'en' | 'cn' | 'jp';

export interface Translations {
  festivalName: string;
  festivalSub: string;
  nav: {
    about: string;
    timetable: string;
    food: string;
    goods: string;
    mapShuttle: string;
    guide: string;
    streetStory: string;
    faq: string;
  };
  actions: {
    ticketBooking: string;
    viewTimetable: string;
    viewMap: string;
    bookNow: string;
    close: string;
    prev: string;
    next: string;
  };
  hero: {
    dates: string;
    location: string;
    hours: string;
    tickerText: string;
    slides: {
      tag: string;
      title: string;
      desc: string;
      btnText: string;
      targetId: string;
      image: string;
    }[];
  };
  about: {
    subtitle: string;
    title: string;
    desc1: string;
    desc2: string;
    specs: {
      scheduleTitle: string;
      scheduleVal: string;
      scheduleSub: string;
      placeTitle: string;
      placeVal: string;
      placeSub: string;
      timeTitle: string;
      timeVal: string;
      timeSub: string;
    };
    posterNotice: string;
  };
  timetable: {
    subtitle: string;
    title: string;
    desc: string;
    day1: string;
    day1Sub: string;
    day2: string;
    day2Sub: string;
    day3: string;
    day3Sub: string;
    locBtn: string;
  };
  food: {
    subtitle: string;
    title: string;
    desc: string;
    dayTab: string;
    nightTab: string;
    diyTitle: string;
    diyDesc: string;
    step1: string;
    step2: string;
    step3: string;
    diyNote: string;
    ruleNotice: string;
  };
  goods: {
    subtitle: string;
    title: string;
    desc: string;
    banner: string;
    freeJelly: string;
    limited: string;
    expTitle: string;
    expStatus: string;
    expDesc: string;
    photoTitle: string;
    photoDesc: string;
    dressTitle: string;
    dressDesc: string;
  };
  mapShuttle: {
    subtitle: string;
    title: string;
    desc: string;
    mapTab: string;
    shuttleTab: string;
    floor1: string;
    floor2: string;
    categoryAll: string;
    hoursLabel: string;
    tipLabel: string;
    shuttleTitle: string;
    shuttleInterval: string;
    shuttleRoute: string;
    transitTitle: string;
    parkingTitle: string;
  };
  guide: {
    subtitle: string;
    title: string;
    desc: string;
    prohibitedTitle: string;
    prohibited1Title: string;
    prohibited1Desc: string;
    prohibited2Title: string;
    prohibited2Desc: string;
    prohibited3Title: string;
    prohibited3Desc: string;
    prohibited4Title: string;
    prohibited4Desc: string;
    rainTitle: string;
    rainDesc: string;
    rainBadge: string;
    stepTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  streetStory: {
    subtitle: string;
    title: string;
    desc: string;
    sliderTab: string;
    videoTab: string;
    beforeLabel: string;
    afterLabel: string;
    dragGuide: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  faq: {
    subtitle: string;
    title: string;
    desc: string;
    catAll: string;
  };
  ticketModal: {
    title: string;
    subtitle: string;
    step1: string;
    step2Date: string;
    step2Time: string;
    timeDay: string;
    timeNight: string;
    step2Qty: string;
    userInfoTitle: string;
    ageLabel: string;
    age10: string;
    age20: string;
    age30: string;
    age40: string;
    genderLabel: string;
    genderF: string;
    genderM: string;
    genderNone: string;
    phoneLabel: string;
    phonePlaceholder: string;
    supportNote: string;
    btnSubmit: string;
    redirecting: string;
  };
  footer: {
    description: string;
    copyright: string;
    host: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ko: {
    festivalName: '원주 피치피치 페스티벌',
    festivalSub: 'WONJU PEACH FEST 2027',
    nav: {
      about: '축제 소개',
      timetable: '타임 테이블',
      food: '먹거리',
      goods: '굿즈 & 이벤트',
      mapShuttle: '맵 & 셔틀',
      guide: '관람 안내',
      streetStory: '스트릿 스토리',
      faq: '자주 묻는 질문',
    },
    actions: {
      ticketBooking: '티켓링크 사전예매',
      viewTimetable: '타임테이블 보기',
      viewMap: '무대 위치 보기',
      bookNow: '사전예매 하기',
      close: '닫기',
      prev: '이전',
      next: '다음',
    },
    hero: {
      dates: '2027. 07. 09 (금) — 07. 11 (일)',
      location: '미로예술 원주중앙시장 거리',
      hours: '12:00 — 23:00 (금 16:00~)',
      tickerText: '🍑 원주 피치피치 페스티벌 2027 · 치악산 생복숭아 디저트 & 70년 전통 미로시장 야시장 · 인디 밴드 라이브 & 골목 미디어아트 파사드 · 20분 간격 무료 셔틀버스 운행 · 티켓링크 공식 사전예매 진행 중 🍑',
      slides: [
        {
          tag: 'OFFICIAL FESTIVAL 2027',
          title: '원주 피치피치\n페스티벌 2027',
          desc: '달콤한 치악산 복숭아와 70년 전통 미로예술시장의 청춘 축제',
          btnText: '사전예매 바로가기',
          targetId: 'about',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'DAY SWEET POPUP',
          title: '낮 복숭아 디저트\n& 베이커리 팝업',
          desc: '생복숭아 눈꽃빙수, 갓 구운 피치 타르트, 수제 에이드',
          btnText: '먹거리 팝업 보기',
          targetId: 'food',
          image: '/src/assets/images/peach_dessert_cocktail_1794209099249.jpg',
        },
        {
          tag: 'NIGHT MARKET & BAR',
          title: '밤 중앙시장 야시장\n& 피치 하이볼 바',
          desc: '원조 손만두, 옛날통닭과 치악산 복숭아주의 만남',
          btnText: '야시장 메뉴 보기',
          targetId: 'food',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'LIVE BAND & ART',
          title: '인디 밴드 라이브\n& 골목 미디어아트',
          desc: '토·일 밴드 라이브 콘서트, 마술쇼, 3D 미디어아트',
          btnText: '타임테이블 보기',
          targetId: 'timetable',
          image: '/src/assets/images/alley_traditional_day_1794209099586.jpg',
        },
      ],
    },
    about: {
      subtitle: 'WONJU SUMMER FESTIVAL 2027',
      title: '원주 피치피치 페스티벌',
      desc1: '달콤한 치악산 복숭아와 70년 전통 골목의 만남.',
      desc2: '낮에는 디저트 팝업, 밤에는 야시장과 밴드 라이브.',
      specs: {
        scheduleTitle: '일정',
        scheduleVal: '07.09(금) — 07.11(일)',
        scheduleSub: '매년 7월 둘째 주 (3일간)',
        placeTitle: '장소',
        placeVal: '미로예술 원주중앙시장',
        placeSub: '실내 아케이드 (우천 정상진행)',
        timeTitle: '운영시간',
        timeVal: '12:00 — 23:00',
        timeSub: '금 16시 오픈 / 야시장 밤 18시~',
      },
      posterNotice: '공식 포스터 미정',
    },
    timetable: {
      subtitle: 'PERFORMANCE & LINEUP',
      title: '타임테이블',
      desc: '금요일 야시장 오프닝, 토·일요일 밴드 라이브 & 마술 공연',
      day1: '07.09 (금)',
      day1Sub: '야시장 · DJ',
      day2: '07.10 (토)',
      day2Sub: '밴드 · 마술쇼',
      day3: '07.11 (일)',
      day3Sub: '피날레 콘서트',
      locBtn: '무대 위치 보기',
    },
    food: {
      subtitle: 'FOOD & DRINKS',
      title: '먹거리 팝업',
      desc: '낮 복숭아 디저트 팝업 & 밤 70년 전통 야시장과 피치 하이볼 바',
      dayTab: '낮 디저트 (12:00~18:00)',
      nightTab: '밤 야시장 (18:00~23:00)',
      diyTitle: '나만의 피치 하이볼 커스텀 바',
      diyDesc: '베이스 주류, 탄산, 토핑을 직접 고르는 DIY 칵테일',
      step1: '1. 베이스 선택 (성인 전용)',
      step2: '2. 탄산 믹서 선택',
      step3: '3. 과육 토핑 가니시',
      diyNote: '2F 커스텀 바 부스 즉석 제조',
      ruleNotice: '* 원주 로컬 상권 보호를 위해 공식 치악산 복숭아주만 판매하며, 외부 주류 반입은 제한됩니다.',
    },
    goods: {
      subtitle: 'OFFICIAL MERCHANDISE',
      title: '복숭아 굿즈 & 이벤트',
      desc: '한정판 피치퐁 마스코트 굿즈와 현장 이벤트',
      banner: '굿즈 구매 시 피치 젤리 & 부채 증정',
      freeJelly: '+ 웰컴 젤리',
      limited: '한정 수량 현장 판매',
      expTitle: '복숭아 향수 조향 & 에코백 DIY',
      expStatus: '준비 중 (보류)',
      expDesc: '체험형 팝업은 세부 일정 조율 중입니다.',
      photoTitle: '골목 미디어아트 & 네온 파사드',
      photoDesc: '미로시장 2층 벽면 핑크빛 3D 미디어아트 (매일 18:00~23:00)',
      dressTitle: '핑크 드레스코드 & 럭키드로우',
      dressDesc: '핑크 착장 방문객 선물 증정 및 일요일 럭키드로우 응모',
    },
    mapShuttle: {
      subtitle: 'VENUE MAP & TRANSPORTATION',
      title: '행사장 맵 & 셔틀버스',
      desc: '미로예술 원주중앙시장 1·2층 공간 안내 및 20분 간격 무료 순환 셔틀',
      mapTab: '1F · 2F 공간 맵',
      shuttleTab: '무료 셔틀버스 & 주차',
      floor1: '1F 거리 & 야시장',
      floor2: '2F 미로예술 & 공연장',
      categoryAll: '전체 보기',
      hoursLabel: '운영시간',
      tipLabel: '방문 팁',
      shuttleTitle: '무료 셔틀버스 순환 운행 시간표',
      shuttleInterval: '20분 간격 순환 운행',
      shuttleRoute: '순환 노선: KTX 원주역(1번 출구) ↔ 원주고속버스터미널 ↔ 중앙시장 정문',
      transitTitle: '대중교통 안내',
      parkingTitle: '주차장 안내',
    },
    guide: {
      subtitle: 'VISITOR GUIDELINES',
      title: '관람 안내',
      desc: '쾌적한 축제 관람을 위한 반입 금지 물품 및 운영 안내',
      prohibitedTitle: '반입 금지 물품',
      prohibited1Title: '외부 주류',
      prohibited1Desc: '치악산 복숭아주만 허용 (소주·맥주 반입 불가)',
      prohibited2Title: '휴대용 화기',
      prohibited2Desc: '버너, 토치, 폭죽 등 인화 물질 전면 금지',
      prohibited3Title: '유리병류',
      prohibited3Desc: '파손 위험 식기류 제한 (개인 텀블러 권장)',
      prohibited4Title: '대형 텐트 & 드론',
      prohibited4Desc: '골목 통행 방해 텐트 및 비인가 드론 금지',
      rainTitle: '우천 시 100% 정상 운영',
      rainDesc: '전 구역 실내 돔형 아케이드로 비가 와도 정상 진행됩니다. (우천 시 1F에서 우비 배부)',
      rainBadge: '실내 아케이드',
      stepTitle: '입장 및 손목밴드 수령 절차',
      step1Title: '티켓링크 사전예매 확인',
      step1Desc: '모바일 티켓 바코드를 준비해 1F 종합안내소로 방문합니다.',
      step2Title: '손목밴드 & 피치 젤리 수령',
      step2Desc: '성인인증 팔찌와 웰컴 젤리를 수령합니다.',
      step3Title: '미로시장 자유 출입',
      step3Desc: '손목밴드 착용 시 축제 기간 자유롭게 재입장 가능합니다.',
    },
    streetStory: {
      subtitle: 'STREET STORY',
      title: '스트릿 스토리',
      desc: '70년 전통 원주중앙시장의 핑크빛 청춘 미디어아트 거리 변신 스토리',
      sliderTab: '비포 · 애프터 슬라이더',
      videoTab: '골목 재생 영상',
      beforeLabel: 'BEFORE : 옛 중앙시장 골목',
      afterLabel: 'AFTER : 피치 페스티벌 거리',
      dragGuide: '중앙 핸들을 좌우로 드래그해보세요',
      point1Title: '70년 손맛 골목 상생',
      point1Desc: '원조 손만두, 가마솥 통닭 로컬 상인 협업 부스 운영',
      point2Title: '벽면 3D 미디어아트',
      point2Desc: '붉은 벽돌 벽면 감성 미디어 파사드와 핑크빛 조명',
      point3Title: '치악산 복숭아주 전문',
      point3Desc: '원주 로컬 양조장 복숭아 발효주와 커스텀 하이볼 판매',
    },
    faq: {
      subtitle: 'FAQ & HELP',
      title: '자주 묻는 질문',
      desc: '사전예매, 성인인증, 우천 운영, 무료 셔틀버스 핵심 안내',
      catAll: '전체',
    },
    ticketModal: {
      title: '원주 피치피치 페스티벌 사전예매',
      subtitle: '티켓링크 공식 사전예매',
      step1: '1. 예매 권종',
      step2Date: '방문 일자',
      step2Time: '방문 시간대',
      timeDay: '낮 (12:00~18:00)',
      timeNight: '밤 (18:00~23:00)',
      step2Qty: '예매 인원',
      userInfoTitle: '예매자 정보 입력',
      ageLabel: '연령대',
      age10: '10대',
      age20: '20대',
      age30: '30대',
      age40: '40대 이상',
      genderLabel: '성별',
      genderF: '여성',
      genderM: '남성',
      genderNone: '선택안함',
      phoneLabel: '휴대전화 번호',
      phonePlaceholder: '010-0000-0000',
      supportNote: '티켓링크 회원 로그인 및 간편 예매 지원',
      btnSubmit: '티켓링크에서 사전예매 하기',
      redirecting: '티켓링크 연결 중...',
    },
    footer: {
      description: '미로예술 원주중앙시장 골목 상권 활성화 & 치악산 명품 복숭아 청춘 페스티벌',
      copyright: '© 2027 Wonju Peach Festival. All rights reserved.',
      host: '주최 : 원주시 · 미로예술 원주중앙시장 번영회 | 장소 : 강원특별자치도 원주시 중앙시장길 6',
    },
  },
  en: {
    festivalName: 'Wonju Peach Peach Festival',
    festivalSub: 'WONJU PEACH FEST 2027',
    nav: {
      about: 'About',
      timetable: 'Timetable',
      food: 'Food & Drinks',
      goods: 'Goods & Events',
      mapShuttle: 'Map & Shuttle',
      guide: 'Visitor Guide',
      streetStory: 'Street Story',
      faq: 'FAQ',
    },
    actions: {
      ticketBooking: 'Ticketlink Booking',
      viewTimetable: 'View Timetable',
      viewMap: 'View Stage Location',
      bookNow: 'Advance Booking',
      close: 'Close',
      prev: 'Prev',
      next: 'Next',
    },
    hero: {
      dates: 'July 9 (Fri) — July 11 (Sun), 2027',
      location: 'Miro Arts Wonju Jungang Market Street',
      hours: '12:00 — 23:00 (Fri from 16:00)',
      tickerText: '🍑 WONJU PEACH FESTIVAL 2027 · Chiaksan Peach Desserts & 70-Year Traditional Night Market · Live Bands & Alley Media Art Facade · Free 20-min Circular Shuttle Bus · Advance Booking Open on Ticketlink 🍑',
      slides: [
        {
          tag: 'OFFICIAL FESTIVAL 2027',
          title: 'Wonju Peach Peach\nFestival 2027',
          desc: 'Sweet Chiaksan peaches meet 70 years of retro Miro Arts Market alley romantic energy',
          btnText: 'Advance Booking',
          targetId: 'about',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'DAY SWEET POPUP',
          title: 'Day Peach Desserts\n& Bakery Pop-up',
          desc: 'Fresh peach snow bingsu, peach custard tarts, and sparkling peach ades',
          btnText: 'View Food Pop-ups',
          targetId: 'food',
          image: '/src/assets/images/peach_dessert_cocktail_1794209099249.jpg',
        },
        {
          tag: 'NIGHT MARKET & BAR',
          title: 'Night Market\n& Peach Highball Bar',
          desc: 'Local handmade dumplings, cauldron fried chicken, and premium Wonju peach wine',
          btnText: 'View Night Menu',
          targetId: 'food',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'LIVE BAND & ART',
          title: 'Indie Band Live\n& Alley Media Art',
          desc: 'Sat & Sun indie bands, bubble illusion magic, and pink 3D media art mapping',
          btnText: 'View Timetable',
          targetId: 'timetable',
          image: '/src/assets/images/alley_traditional_day_1794209099586.jpg',
        },
      ],
    },
    about: {
      subtitle: 'WONJU SUMMER FESTIVAL 2027',
      title: 'Wonju Peach Peach Festival',
      desc1: 'Where famous Chiaksan peaches meet the historic 70-year market.',
      desc2: 'Dessert pop-ups by day, bustling night markets and live indie concerts by night.',
      specs: {
        scheduleTitle: 'Dates',
        scheduleVal: 'July 9 (Fri) — July 11 (Sun)',
        scheduleSub: 'Annual 2nd weekend of July (3 days)',
        placeTitle: 'Location',
        placeVal: 'Miro Arts Wonju Jungang Market',
        placeSub: 'Indoor Arcade (All-weather operation)',
        timeTitle: 'Opening Hours',
        timeVal: '12:00 — 23:00',
        timeSub: 'Fri opens 16:00 / Night market from 18:00',
      },
      posterNotice: 'Official Poster Coming Soon',
    },
    timetable: {
      subtitle: 'PERFORMANCE & LINEUP',
      title: 'Timetable & Lineup',
      desc: 'Friday night opening DJ, Saturday & Sunday live bands and magic shows',
      day1: '07.09 (Fri)',
      day1Sub: 'Night Market · DJ',
      day2: '07.10 (Sat)',
      day2Sub: 'Band · Magic Show',
      day3: '07.11 (Sun)',
      day3Sub: 'Finale Concert',
      locBtn: 'View Stage Location',
    },
    food: {
      subtitle: 'FOOD & DRINKS',
      title: 'Food & Drinks Pop-up',
      desc: 'Peach desserts by day, 70-year historic market bites and DIY cocktail bar by night',
      dayTab: 'Day Desserts (12:00~18:00)',
      nightTab: 'Night Market (18:00~23:00)',
      diyTitle: 'Custom Peach Highball DIY Bar',
      diyDesc: 'Create your personalized cocktail with custom spirits, mixers, and fruit toppings',
      step1: '1. Select Base Spirit (20+ only)',
      step2: '2. Select Sparkling Mixer',
      step3: '3. Select Peach Garnish',
      diyNote: 'Prepared fresh at 2F Custom Bar booth',
      ruleNotice: '* To support local merchants and maintain safety, only authentic Chiaksan Peach Wine is officially served. Outside alcohol is prohibited.',
    },
    goods: {
      subtitle: 'OFFICIAL MERCHANDISE',
      title: 'Peach Goods & Events',
      desc: 'Limited edition Peachpong mascot plushies, sticker packs, glitter popsockets and picnic mats',
      banner: 'Peach jelly & festival fan gift for merchandise purchasers',
      freeJelly: '+ Welcome Jelly',
      limited: 'Limited Stock On-Site',
      expTitle: 'Peach Perfume & DIY Eco Bag Workshop',
      expStatus: 'Coming Soon',
      expDesc: 'Interactive workshop schedule is being coordinated for visitor safety.',
      photoTitle: 'Alley Media Art & Neon Facade',
      photoDesc: 'Pink 3D media art mapping on 2nd-floor brick walls every evening (18:00–23:00).',
      dressTitle: 'Pink Dress Code & Lucky Draw',
      dressDesc: 'Wear pink to receive a special welcome gift and entry into the Sunday grand prize draw.',
    },
    mapShuttle: {
      subtitle: 'VENUE MAP & TRANSPORTATION',
      title: 'Venue Map & Shuttle Bus',
      desc: '1F & 2F interactive floor directory and free 20-minute circular shuttle service',
      mapTab: '1F · 2F Floor Map',
      shuttleTab: 'Free Shuttle & Parking',
      floor1: '1F Street & Night Market',
      floor2: '2F Miro Arts & Stages',
      categoryAll: 'View All',
      hoursLabel: 'Hours',
      tipLabel: 'Visitor Tip',
      shuttleTitle: 'Free Circular Shuttle Timetable',
      shuttleInterval: '20-Minute Circular Service',
      shuttleRoute: 'Route: KTX Wonju Station (Exit 1) ↔ Bus Terminal ↔ Miro Arts Market Main Gate',
      transitTitle: 'Public Transit Guide',
      parkingTitle: 'Parking Information',
    },
    guide: {
      subtitle: 'VISITOR GUIDELINES',
      title: 'Visitor Guide',
      desc: 'Essential visitor rules, prohibited items, and all-weather operational policy',
      prohibitedTitle: 'Prohibited Items',
      prohibited1Title: 'Outside Alcohol',
      prohibited1Desc: 'Soju and beer not permitted (Chiaksan Peach Wine only)',
      prohibited2Title: 'Open Flames',
      prohibited2Desc: 'Stoves, gas burners, fireworks strictly prohibited',
      prohibited3Title: 'Glass Bottles',
      prohibited3Desc: 'Fragile glassware restricted (tumblers recommended)',
      prohibited4Title: 'Large Tents & Drones',
      prohibited4Desc: 'Pathway blocking tents and unpermitted drones restricted',
      rainTitle: '100% Operational in Rain',
      rainDesc: 'Entire market is sheltered by modern dome arcade roofs. Free peach rain ponchos provided at Info Booth (1F) if it rains.',
      rainBadge: 'Indoor Arcade',
      stepTitle: 'Admission & Wristband Procedure',
      step1Title: 'Check Ticketlink Barcode',
      step1Desc: 'Show your mobile reservation barcode at the 1F Information Booth.',
      step2Title: 'Receive Wristband & Jelly',
      step2Desc: 'Verify age for adult tasting wristband and receive sweet welcome jelly.',
      step3Title: 'Free Market Re-entry',
      step3Desc: 'Wearing the wristband allows unlimited re-entry throughout festival hours.',
    },
    streetStory: {
      subtitle: 'STREET STORY',
      title: 'Street Story',
      desc: 'How Wonju’s 70-year historic market alley transformed into a vibrant youth media art avenue',
      sliderTab: 'Before & After Slider',
      videoTab: 'Revitalization Clip',
      beforeLabel: 'BEFORE : Historic Market Alley',
      afterLabel: 'AFTER : Peach Festival Avenue',
      dragGuide: 'Drag the center handle horizontally',
      point1Title: '70-Year Heritage Collaboration',
      point1Desc: 'Operating hand-in-hand with authentic dumpling and fried chicken market pioneers.',
      point2Title: '3D Brick Media Art',
      point2Desc: 'Enchanting media facades and soft pink ambient illuminations across heritage brickwork.',
      point3Title: 'Exclusive Chiaksan Peach Wine',
      point3Desc: 'Showcasing Wonju local artisanal peach fermented sparkling wine and custom craft highballs.',
    },
    faq: {
      subtitle: 'FAQ & HELP',
      title: 'Frequently Asked Questions',
      desc: 'Key answers about Ticketlink booking, adult verification, weather, and free shuttle',
      catAll: 'All Categories',
    },
    ticketModal: {
      title: 'Wonju Peach Festival Advance Booking',
      subtitle: 'Official Advance Booking via Ticketlink',
      step1: '1. Select Pass Type',
      step2Date: 'Visit Date',
      step2Time: 'Time Slot',
      timeDay: 'Day (12:00~18:00)',
      timeNight: 'Night (18:00~23:00)',
      step2Qty: 'Party Size',
      userInfoTitle: 'Visitor Information',
      ageLabel: 'Age Group',
      age10: 'Teens',
      age20: '20s',
      age30: '30s',
      age40: '40+',
      genderLabel: 'Gender',
      genderF: 'Female',
      genderM: 'Male',
      genderNone: 'Prefer not to say',
      phoneLabel: 'Mobile Phone',
      phonePlaceholder: '010-0000-0000',
      supportNote: 'Supports Ticketlink member quick checkout and mobile entry',
      btnSubmit: 'Proceed to Ticketlink Booking',
      redirecting: 'Connecting to Ticketlink...',
    },
    footer: {
      description: 'Revitalizing Miro Arts Wonju Jungang Market with Famous Chiaksan Peaches',
      copyright: '© 2027 Wonju Peach Festival. All rights reserved.',
      host: 'Organized by Wonju City & Miro Arts Central Market Committee | Wonju, Gangwon-do',
    },
  },
  cn: {
    festivalName: '原州桃子节',
    festivalSub: 'WONJU PEACH FEST 2027',
    nav: {
      about: '节日介绍',
      timetable: '演出时间表',
      food: '特色美食',
      goods: '周边与活动',
      mapShuttle: '地图与班车',
      guide: '游览指南',
      streetStory: '街区故事',
      faq: '常见问题',
    },
    actions: {
      ticketBooking: 'Ticketlink 预约',
      viewTimetable: '查看时间表',
      viewMap: '查看舞台位置',
      bookNow: '立即预约',
      close: '关闭',
      prev: '上一页',
      next: '下一页',
    },
    hero: {
      dates: '2027年 7月 9日 (五) — 7月 11日 (日)',
      location: '迷路艺术 原州中央市场街区',
      hours: '12:00 — 23:00 (周五16:00起)',
      tickerText: '🍑 原州桃子节 2027 · 雉岳山鲜桃甜点 & 70年传统夜市 · 独立乐队现场演出 & 巷弄3D光影秀 · 20分钟一班免费循环接驳车 · Ticketlink 官方预约开放中 🍑',
      slides: [
        {
          tag: 'OFFICIAL FESTIVAL 2027',
          title: '原州桃子节 2027',
          desc: '香甜雉岳山水蜜桃与70年历史迷路艺术市场的浪漫青春盛宴',
          btnText: '立即预约入场',
          targetId: 'about',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'DAY SWEET POPUP',
          title: '白天 鲜桃甜点\n烘焙快闪店',
          desc: '鲜桃雪花冰、刚出炉的桃子蛋挞与纯手工鲜桃苏打气泡饮',
          btnText: '浏览特色甜点',
          targetId: 'food',
          image: '/src/assets/images/peach_dessert_cocktail_1794209099249.jpg',
        },
        {
          tag: 'NIGHT MARKET & BAR',
          title: '夜晚 传统夜市\n与桃子特调酒吧',
          desc: '原味手工饺子、铁锅炸鸡与原州雉岳山桃子酒的绝妙搭配',
          btnText: '查看夜市美食',
          targetId: 'food',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'LIVE BAND & ART',
          title: '独立乐队演出\n与3D巷弄光影秀',
          desc: '周六周日独立乐队现场演唱、泡泡魔术秀与粉色光影外墙秀',
          btnText: '查看演出安排',
          targetId: 'timetable',
          image: '/src/assets/images/alley_traditional_day_1794209099586.jpg',
        },
      ],
    },
    about: {
      subtitle: 'WONJU SUMMER FESTIVAL 2027',
      title: '原州桃子节',
      desc1: '香甜雉岳山水蜜桃与70年历史胡同街区的浪漫相遇。',
      desc2: '白天享受精致桃子甜点，夜晚沉浸在夜市美食与乐队摇滚中。',
      specs: {
        scheduleTitle: '活动日期',
        scheduleVal: '07.09(五) — 07.11(日)',
        scheduleSub: '每年7月第二周周末（为期3天）',
        placeTitle: '活动地点',
        placeVal: '迷路艺术 原州中央市场',
        placeSub: '全天候室内拱顶街区（风雨无阻）',
        timeTitle: '运营时间',
        timeVal: '12:00 — 23:00',
        timeSub: '周五16:00开幕 / 夜市18:00启动',
      },
      posterNotice: '官方海报待定',
    },
    timetable: {
      subtitle: 'PERFORMANCE & LINEUP',
      title: '演出时间表',
      desc: '周五夜市开幕DJ，周六与周日现场乐队及魔术表演',
      day1: '07.09 (五)',
      day1Sub: '夜市 · DJ秀',
      day2: '07.10 (六)',
      day2Sub: '乐队 · 魔术秀',
      day3: '07.11 (日)',
      day3Sub: '闭幕音乐会',
      locBtn: '查看舞台位置',
    },
    food: {
      subtitle: 'FOOD & DRINKS',
      title: '美食市集快闪',
      desc: '白天品尝鲜桃烘焙，夜晚畅享70年传统夜市风味与DIY特调酒吧',
      dayTab: '白天甜点 (12:00~18:00)',
      nightTab: '夜晚夜市 (18:00~23:00)',
      diyTitle: '专属桃子嗨棒 (Highball) DIY调酒吧',
      diyDesc: '自选基酒、气泡水与新鲜桃子果肉的独家特调体验',
      step1: '1. 选择基酒（仅限成人）',
      step2: '2. 选择气泡搭配饮',
      step3: '3. 挑选果肉配料',
      diyNote: '2楼特调酒吧现场即刻调制',
      ruleNotice: '* 为保护原州当地商圈并维护秩序，场内仅提供雉岳山特色桃子酒，严禁携带外来酒类入场。',
    },
    goods: {
      subtitle: 'OFFICIAL MERCHANDISE',
      title: '桃子周边与现场活动',
      desc: '限量版桃子吉祥物公仔钥匙扣、艺术贴纸包、流沙气囊支架与野餐垫',
      banner: '购买周边赠送桃子果冻与节日团扇',
      freeJelly: '+ 迎宾果冻',
      limited: '现场限量发售',
      expTitle: '桃子香水调配 & 环保袋DIY工坊',
      expStatus: '筹备中（暂缓）',
      expDesc: '互动体验工坊目前正在进行安全与流程优化。',
      photoTitle: '街区3D光影秀 & 霓虹打卡点',
      photoDesc: '投射在迷路市场2楼红砖墙上的粉色3D视觉光影，每日 18:00–23:00 点亮。',
      dressTitle: '粉色着装礼遇 & 惊喜抽奖',
      dressDesc: '身着粉色服饰到场即可获赠专属礼品，并自动参与周日平板电脑抽奖。',
    },
    mapShuttle: {
      subtitle: 'VENUE MAP & TRANSPORTATION',
      title: '活动地图与接驳车',
      desc: '迷路艺术市场1层与2层空间指南及20分钟一班的免费循环接驳班车',
      mapTab: '1F · 2F 场馆地图',
      shuttleTab: '免费班车与交通',
      floor1: '1F 街区与夜市',
      floor2: '2F 迷路艺术与舞台',
      categoryAll: '全部显示',
      hoursLabel: '开放时间',
      tipLabel: '游览建议',
      shuttleTitle: '免费循环接驳车时刻表',
      shuttleInterval: '20分钟一班循环运转',
      shuttleRoute: '路线：KTX原州站 (1号出口) ↔ 原州客运站 ↔ 迷路艺术中央市场正门',
      transitTitle: '公共交通指南',
      parkingTitle: '停车场与停车优惠',
    },
    guide: {
      subtitle: 'VISITOR GUIDELINES',
      title: '游览指南',
      desc: '安全游览规定、违禁物品须知及全天候室内防雨运营政策',
      prohibitedTitle: '违禁物品须知',
      prohibited1Title: '外带酒类',
      prohibited1Desc: '禁止携带烧酒、啤酒等外来酒类（仅限雉岳山桃子酒）',
      prohibited2Title: '明火炉具',
      prohibited2Desc: '严禁携带卡式炉、喷枪、烟花等易燃物品',
      prohibited3Title: '易碎玻璃器皿',
      prohibited3Desc: '限制携带玻璃瓶器具（建议自备随行水杯）',
      prohibited4Title: '大型帐篷与无人机',
      prohibited4Desc: '禁止搭建阻碍通道的帐篷与未经申报的无人机拍摄',
      rainTitle: '雨天100%正常运营',
      rainDesc: '街区上方覆盖现代全封闭拱形穹顶，即使下雨也能舒适游玩。雨天在1楼问讯处免费领取粉色雨衣。',
      rainBadge: '室内拱顶',
      stepTitle: '入场与手环领取步骤',
      step1Title: '出示 Ticketlink 预约条码',
      step1Desc: '准备好手机电子条码至1楼综合问讯处。',
      step2Title: '核验并领取手环与果冻',
      step2Desc: '核对有效身份证件后佩戴手环并获赠欢迎果冻。',
      step3Title: '自由出入节日街区',
      step3Desc: '活动时间内凭手环可全天不限次数重新入场。',
    },
    streetStory: {
      subtitle: 'STREET STORY',
      title: '街区重生故事',
      desc: '70年历史的原州中央市场胡同如何焕新蜕变为粉色青春艺术街区',
      sliderTab: '前后对比滑动器',
      videoTab: '街区复兴纪实短片',
      beforeLabel: 'BEFORE : 传统中央市场胡同',
      afterLabel: 'AFTER : 桃子节艺术街区',
      dragGuide: '左右拖动中间滑块查看惊艳转变',
      point1Title: '70年老字号共生',
      point1Desc: '与市场元祖手工饺子、铁锅炸鸡老商户携手共同运营摊位。',
      point2Title: '砖墙3D光影艺术',
      point2Desc: '在经典红砖墙上投射浪漫沉浸式光影与粉色氛围霓虹。',
      point3Title: '雉岳山特色桃子酒',
      point3Desc: '全场仅精选提供原州当地酿造的桃子起泡酒与特调Highball。',
    },
    faq: {
      subtitle: 'FAQ & HELP',
      title: '常见问题解答',
      desc: '关于 Ticketlink 预约、年龄核验、天气应对及免费班车的答疑',
      catAll: '全部分类',
    },
    ticketModal: {
      title: '原州桃子节 预约入场',
      subtitle: 'Ticketlink 官方单独特约预约通道',
      step1: '1. 选择门票类型',
      step2Date: '参观日期',
      step2Time: '参观时间段',
      timeDay: '白天 (12:00~18:00)',
      timeNight: '夜晚 (18:00~23:00)',
      step2Qty: '预约人数',
      userInfoTitle: '预约人信息',
      ageLabel: '年龄段',
      age10: '10多岁',
      age20: '20多岁',
      age30: '30多岁',
      age40: '40岁及以上',
      genderLabel: '性别',
      genderF: '女性',
      genderM: '男性',
      genderNone: '不透露',
      phoneLabel: '手机号码',
      phonePlaceholder: '010-0000-0000',
      supportNote: '支持 Ticketlink 会员快捷登录与电子凭证',
      btnSubmit: '前往 Ticketlink 确认预约',
      redirecting: '正在连接 Ticketlink...',
    },
    footer: {
      description: '激活迷路艺术中央市场老街区 & 原州雉岳山水蜜桃青春节日',
      copyright: '© 2027 Wonju Peach Festival. All rights reserved.',
      host: '主办：原州市 · 迷路艺术原州中央市场繁荣会 | 江原特别自治道原州市中央市场路6号',
    },
  },
  jp: {
    festivalName: '原州ピーチピーチフェスティバル',
    festivalSub: 'WONJU PEACH FEST 2027',
    nav: {
      about: 'フェス紹介',
      timetable: 'タイムテーブル',
      food: 'グルメ＆夜市',
      goods: 'グッズ＆イベント',
      mapShuttle: 'マップ＆シャトル',
      guide: '観覧案内',
      streetStory: '横丁ストーリー',
      faq: 'よくある質問',
    },
    actions: {
      ticketBooking: 'Ticketlink 事前予約',
      viewTimetable: 'タイムテーブルを見る',
      viewMap: 'ステージ位置を見る',
      bookNow: '事前予約する',
      close: '閉じる',
      prev: '前へ',
      next: '次へ',
    },
    hero: {
      dates: '2027年 7月 9日 (金) — 7月 11日 (日)',
      location: '迷路芸術 原州中央市場通り',
      hours: '12:00 — 23:00 (金曜は16:00~)',
      tickerText: '🍑 原州ピーチフェスティバル 2027 · 雉岳山桃デザート＆70年の伝統夜市 · インディーズバンドライブ＆路地3Dメディアアート · 20分間隔の無料巡回シャトルバス運行 · Ticketlink 事前予約受付中 🍑',
      slides: [
        {
          tag: 'OFFICIAL FESTIVAL 2027',
          title: '原州ピーチピーチ\nフェスティバル 2027',
          desc: '甘い雉岳山の桃と70年の歴史を誇る迷路芸術市場が出逢う青春のお祭り',
          btnText: '事前予約へ進む',
          targetId: 'about',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'DAY SWEET POPUP',
          title: '昼の桃デザート\n＆ベーカリーポップアップ',
          desc: '生桃かき氷、焼きたてピーチタルト、特製桃スパークリングエイド',
          btnText: 'デザートを見る',
          targetId: 'food',
          image: '/src/assets/images/peach_dessert_cocktail_1794209099249.jpg',
        },
        {
          tag: 'NIGHT MARKET & BAR',
          title: '夜の伝統市場横丁\n＆ピーチハイボールバー',
          desc: '名物手作り餃子、昔ながらの釜揚げチキンと原州桃のお酒の絶妙なペアリング',
          btnText: '夜市メニューを見る',
          targetId: 'food',
          image: '/src/assets/images/market_alley_night_1794209098465.jpg',
        },
        {
          tag: 'LIVE BAND & ART',
          title: 'インディーズライブ\n＆路地メディアアート',
          desc: '土・日ライブコンサート、バブルマジックショー、壁面を彩る3Dプロジェクション',
          btnText: 'タイムテーブルを見る',
          targetId: 'timetable',
          image: '/src/assets/images/alley_traditional_day_1794209099586.jpg',
        },
      ],
    },
    about: {
      subtitle: 'WONJU SUMMER FESTIVAL 2027',
      title: '原州ピーチフェスティバル',
      desc1: '原州名産の雉岳山桃と70年の歴史が宿る横丁の出逢い。',
      desc2: '昼は甘いスイーツ、夜は活気溢れる夜市とバンド演奏をお楽しみください。',
      specs: {
        scheduleTitle: '日程',
        scheduleVal: '07.09(金) — 07.11(日)',
        scheduleSub: '毎年7月第2週（金土日の3日間）',
        placeTitle: '場所',
        placeVal: '迷路芸術 原州中央市場',
        placeSub: '全天候型ドームアーケード（雨天決行）',
        timeTitle: '運営時間',
        timeVal: '12:00 — 23:00',
        timeSub: '金曜16時オープン / 夜市は18時から',
      },
      posterNotice: '公式ポスター未定',
    },
    timetable: {
      subtitle: 'PERFORMANCE & LINEUP',
      title: 'タイムテーブル',
      desc: '金曜の前夜祭DJ、土曜・日曜のバンドライブ＆マジックショー',
      day1: '07.09 (金)',
      day1Sub: '夜市 · DJ',
      day2: '07.10 (土)',
      day2Sub: 'バンド · マジック',
      day3: '07.11 (日)',
      day3Sub: 'フィナーレライブ',
      locBtn: 'ステージ位置を見る',
    },
    food: {
      subtitle: 'FOOD & DRINKS',
      title: 'グルメポップアップ',
      desc: '昼は桃スイーツ、夜は70年の伝統夜市とオリジナルピーチカクテルバー',
      dayTab: '昼スイーツ (12:00~18:00)',
      nightTab: '夜市 (18:00~23:00)',
      diyTitle: 'オリジナルピーチハイボール DIYバー',
      diyDesc: 'ベース酒、炭酸、果肉トッピングを自由に組み合わせるカスタムバー',
      step1: '1. ベースを選択（成人限定）',
      step2: '2. 炭酸水・トニックを選択',
      step3: '3. 果肉トッピングを選択',
      diyNote: '2Fカスタムバーブースでその場でお作りします',
      ruleNotice: '* 地域振興と安全管理のため、会場内では「雉岳山桃酒」のみ販売します。外部酒類の持ち込みは固くお断りします。',
    },
    goods: {
      subtitle: 'OFFICIAL MERCHANDISE',
      title: '桃グッズ＆体験イベント',
      desc: '限定ピーチポンぬいぐるみキーリング、ステッカーパック、グリッタースマホグリップ',
      banner: 'グッズ購入者全員に桃ゼリー＆うちわをプレゼント',
      freeJelly: '+ ウェルカムゼリー',
      limited: '現地数量限定販売',
      expTitle: '桃の香水調香＆エコバッグ作り',
      expStatus: '準備中（保留）',
      expDesc: '体験プログラムは安全対策と詳細日程を最終調整中です。',
      photoTitle: '路地メディアアート＆ネオンフォトスポット',
      photoDesc: '市場2階のレンガ壁面に映し出されるピンクの3Dプロジェクションマッピング（連日 18:00~23:00）。',
      dressTitle: 'ピンクドレスコード＆抽選会',
      dressDesc: 'ピンク色のお洋服でご来場の方へ記念品贈呈＆日曜日の大抽選会に自動応募。',
    },
    mapShuttle: {
      subtitle: 'VENUE MAP & TRANSPORTATION',
      title: '会場マップ＆シャトルバス',
      desc: '迷路芸術市場1階・2階フロアガイド＆20分間隔の無料巡回シャトルバス',
      mapTab: '1F · 2F フロアマップ',
      shuttleTab: '無料シャトル＆駐車場',
      floor1: '1F 通り＆夜市横丁',
      floor2: '2F 迷路芸術＆ステージ',
      categoryAll: 'すべて表示',
      hoursLabel: '営業時間',
      tipLabel: 'おすすめTip',
      shuttleTitle: '無料シャトルバス運行時刻表',
      shuttleInterval: '20分間隔で巡回運行',
      shuttleRoute: '巡回ルート：KTX原州駅 (1番出口) ↔ 高速バスターミナル ↔ 迷路芸術中央市場 正門',
      transitTitle: '公共交通機関のご案内',
      parkingTitle: '駐車場のご案内',
    },
    guide: {
      subtitle: 'VISITOR GUIDELINES',
      title: '観覧案内',
      desc: '安全で快適なフェスティバルのための持ち込み禁止物および運営規則',
      prohibitedTitle: '持ち込み禁止品',
      prohibited1Title: '外部酒類',
      prohibited1Desc: '焼酎やビール等の持ち込み不可（公式雉岳山桃酒のみ可）',
      prohibited2Title: '火気類',
      prohibited2Desc: 'カセットコンロ、ガスバーナー、花火等の火気厳禁',
      prohibited3Title: 'ガラス瓶類',
      prohibited3Desc: '破損の恐れがあるガラス製品の制限（マイタンブラー推奨）',
      prohibited4Title: '大型テント・ドローン',
      prohibited4Desc: '通路を塞ぐ大型テントおよび無許可ドローン撮影の禁止',
      rainTitle: '雨天時も100%通常営業',
      rainDesc: '全エリアにドーム型アーケード屋根が完備されているため雨天でも快適です。雨の日は総合案内所(1F)でピンクのポンチョを無料配布します。',
      rainBadge: '全天候アーケード',
      stepTitle: '入場＆リストバンド受け取り手順',
      step1Title: 'Ticketlink 予約バーコード確認',
      step1Desc: 'スマホの予約バーコードを用意し、1階総合案内所へお越しください。',
      step2Title: 'リストバンド＆ゼリー受取',
      step2Desc: '身分証確認後、成人専用バンドと特製桃ゼリーをお渡しします。',
      step3Title: '市場内の自由出入り',
      step3Desc: 'リストバンド着用中はフェスティバル期間中いつでも再入場可能です。',
    },
    streetStory: {
      subtitle: 'STREET STORY',
      title: '横丁ストーリー',
      desc: '70年の歴史を刻む中央市場の路地が、ピンク色の青春メディアアート通りへと再生した物語',
      sliderTab: 'ビフォー・アフター スライダー',
      videoTab: '市場再生ドキュメンタリー',
      beforeLabel: 'BEFORE : 懐かしき中央市場の路地',
      afterLabel: 'AFTER : ピーチフェスティバル通り',
      dragGuide: '中央のハンドルを左右にドラッグしてみてください',
      point1Title: '70年の味を守る商店街との共生',
      point1Desc: '元祖手作り餃子や昔ながらの釜揚げチキンなど、老舗市場とタッグを組んで出店します。',
      point2Title: '赤レンガ壁面の3Dメディアアート',
      point2Desc: '歴史あるレンガ壁面に幻想的なプロジェクションマッピングとネオンが輝きます。',
      point3Title: '雉岳山桃酒のこだわり',
      point3Desc: '地元原州の酒蔵が仕込んだ本物の桃発酵酒とクラフトハイボールのみを公式提供します。',
    },
    faq: {
      subtitle: 'FAQ & HELP',
      title: 'よくある質問',
      desc: 'Ticketlink予約、成人確認、雨天時の対応、無料シャトルバスなどのご案内',
      catAll: 'すべて',
    },
    ticketModal: {
      title: '原州ピーチフェスティバル 事前予約',
      subtitle: 'Ticketlink 公式事前予約',
      step1: '1. チケット券種',
      step2Date: '来場日',
      step2Time: '来場時間帯',
      timeDay: '昼 (12:00~18:00)',
      timeNight: '夜 (18:00~23:00)',
      step2Qty: '予約人数',
      userInfoTitle: '予約者情報の入力',
      ageLabel: '年齢層',
      age10: '10代',
      age20: '20代',
      age30: '30代',
      age40: '40代以上',
      genderLabel: '性別',
      genderF: '女性',
      genderM: '男性',
      genderNone: '選択しない',
      phoneLabel: '携帯電話番号',
      phonePlaceholder: '010-0000-0000',
      supportNote: 'Ticketlink 会員ログインおよびスムーズな予約に対応',
      btnSubmit: 'Ticketlink で予約を完了する',
      redirecting: 'Ticketlink へ接続中...',
    },
    footer: {
      description: '迷路芸術 原州中央市場の活性化＆雉岳山名品桃の青春フェスティバル',
      copyright: '© 2027 Wonju Peach Festival. All rights reserved.',
      host: '主催 : 原州市 · 迷路芸術 原州中央市場繁栄会 | 江原特別自治道 原州市 中央市場キル6',
    },
  },
};
