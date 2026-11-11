import React, { useState } from 'react';
import {
  Music,
  Utensils,
  Wine,
  ShoppingBag,
  Info,
  Clock,
  Layers,
  Bus,
  Car,
  MapPin,
  Compass,
} from 'lucide-react';
import { MAP_POIS, MapPOI } from '../data/festivalData';
import { Translations } from '../data/translations';

interface MapShuttlePageProps {
  t: Translations;
  initialPOIId?: string;
}

export const MapShuttlePage: React.FC<MapShuttlePageProps> = ({ t, initialPOIId }) => {
  const [activeTab, setActiveTab] = useState<'map' | 'shuttle'>('map');
  const [activeFloor, setActiveFloor] = useState<'1F' | '2F'>('2F');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePOI, setActivePOI] = useState<MapPOI | null>(() => {
    if (initialPOIId) {
      const match = MAP_POIS.find((p) => p.id === initialPOIId);
      if (match) return match;
    }
    return MAP_POIS.find((p) => p.id === 'poi-stage-main') || MAP_POIS[0];
  });

  const filteredPOIs = MAP_POIS.filter((poi) => {
    if (poi.floor !== activeFloor) return false;
    if (activeCategory !== 'all' && poi.category !== activeCategory) return false;
    return true;
  });

  const getPoiIcon = (category: string) => {
    switch (category) {
      case 'stage':
        return <Music className="w-3.5 h-3.5" />;
      case 'food':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'drink':
        return <Wine className="w-3.5 h-3.5" />;
      case 'goods':
        return <ShoppingBag className="w-3.5 h-3.5" />;
      default:
        return <Info className="w-3.5 h-3.5" />;
    }
  };

  const getPinColor = (category: string) => {
    switch (category) {
      case 'stage':
        return 'bg-[#FF6565] text-white';
      case 'food':
        return 'bg-[#F98B6E] text-white';
      case 'drink':
        return 'bg-[#FF7D95] text-white';
      case 'goods':
        return 'bg-[#C4CA85] text-slate-900';
      default:
        return 'bg-slate-700 text-white';
    }
  };

  return (
    <div id="map-shuttle" className="py-16 md:py-20 scroll-mt-24 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.mapShuttle.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.mapShuttle.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
          {t.mapShuttle.desc}
        </p>

        {/* Unified Tab Switcher: Map vs Shuttle */}
        <div className="mt-8 inline-flex p-1 bg-rose-50/80 rounded-full border border-rose-100">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-6 py-2.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'map'
                ? 'bg-white text-[#FF6565] shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{t.mapShuttle.mapTab}</span>
          </button>
          <button
            onClick={() => setActiveTab('shuttle')}
            className={`px-6 py-2.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'shuttle'
                ? 'bg-white text-[#FF6565] shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>{t.mapShuttle.shuttleTab}</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE FLOOR MAP */}
      {activeTab === 'map' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Controls: Floor switch & category filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-rose-100">
            {/* Floor Selection */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveFloor('1F')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFloor === '1F'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#FF6565]" />
                <span>{t.mapShuttle.floor1}</span>
              </button>
              <button
                onClick={() => setActiveFloor('2F')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFloor === '2F'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#FF6565]" />
                <span>{t.mapShuttle.floor2}</span>
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium no-scrollbar">
              {[
                { id: 'all', label: t.mapShuttle.categoryAll },
                { id: 'stage', label: '공연 무대' },
                { id: 'food', label: '푸드 존' },
                { id: 'drink', label: '주류 바' },
                { id: 'goods', label: '굿즈·전시' },
                { id: 'facility', label: '편의시설' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === c.id
                      ? 'bg-[#FF6565] text-white font-bold'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-rose-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Map & Inspector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Architectural Blueprint Map */}
            <div className="lg:col-span-8 bg-[#FFF9F8] rounded-3xl border border-rose-100 p-4 sm:p-6 shadow-sm">
              <div className="relative aspect-[16/11] bg-slate-50 rounded-2xl border-2 border-rose-200/80 overflow-hidden shadow-inner select-none">
                
                {/* Architectural Blueprint SVG Base */}
                <svg
                  viewBox="0 0 800 550"
                  className="w-full h-full object-cover"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFE4E8" strokeWidth="0.8" />
                    </pattern>
                    <pattern id="pavingPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                      <rect width="16" height="16" fill="#FDFBF7" />
                      <path d="M 0 8 L 16 8 M 8 0 L 8 16" fill="none" stroke="#F0E8DC" strokeWidth="0.8" />
                    </pattern>
                    <pattern id="brickPattern" width="24" height="12" patternUnits="userSpaceOnUse">
                      <rect width="24" height="12" fill="#FFF2F4" />
                      <path d="M 0 6 L 24 6 M 12 0 L 12 6 M 0 12 L 24 12 M 24 6 L 24 12" fill="none" stroke="#FFD8DF" strokeWidth="0.8" />
                    </pattern>
                  </defs>

                  {/* Blueprint Grid Background */}
                  <rect width="800" height="550" fill="#FFFFFF" />
                  <rect width="800" height="550" fill="url(#gridPattern)" opacity="0.7" />

                  {/* Outer Building Concrete Wall */}
                  <rect x="40" y="30" width="720" height="490" rx="20" fill="#FCFAF8" stroke="#E2DCD5" strokeWidth="3" />

                  {activeFloor === '2F' ? (
                    /* ================= 2F MIRO ARTS MARKET (4 WINGS + CENTRAL COURTYARD) ================= */
                    <g id="floor-2f">
                      {/* Corridors / Walkways */}
                      <rect x="40" y="30" width="720" height="490" fill="url(#pavingPattern)" />

                      {/* Wing Ga (가동 - North West: 청년 공방 & 버스킹) */}
                      <g id="wing-ga">
                        <rect x="70" y="60" width="280" height="180" rx="12" fill="#FFF4ED" stroke="#FFC5A8" strokeWidth="2" />
                        <rect x="85" y="75" width="110" height="70" rx="6" fill="#FFFFFF" stroke="#FFE4D6" strokeWidth="1" />
                        <text x="140" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#D9663D">가동 공방거리</text>
                        <rect x="85" y="155" width="250" height="70" rx="6" fill="#FFEFE5" stroke="#FFD5C0" strokeWidth="1" strokeDasharray="3,3" />
                        <text x="210" y="195" textAnchor="middle" fontSize="12" fontWeight="800" fill="#C84B1F">🎵 버스킹 스퀘어 골목</text>
                        <text x="80" y="50" fontSize="13" fontWeight="900" fill="#E05320">가동 (청년몰·버스킹)</text>
                      </g>

                      {/* Wing Na (나동 - North East: 미디어아트 & 중앙무대 연결) */}
                      <g id="wing-na">
                        <rect x="450" y="60" width="280" height="180" rx="12" fill="#FFF0F3" stroke="#FFBDCA" strokeWidth="2" />
                        {/* Brick Wall for 3D Media Art */}
                        <rect x="465" y="75" width="250" height="70" rx="6" fill="url(#brickPattern)" stroke="#FFB0C0" strokeWidth="1.5" />
                        <text x="590" y="115" textAnchor="middle" fontSize="12" fontWeight="800" fill="#E63956">✨ 3D 미디어아트 벽면</text>
                        <rect x="465" y="155" width="120" height="70" rx="6" fill="#FFFFFF" stroke="#FFD6DE" strokeWidth="1" />
                        <text x="525" y="195" textAnchor="middle" fontSize="11" fontWeight="700" fill="#B83A4F">포토존 라운지</text>
                        <text x="450" y="50" fontSize="13" fontWeight="900" fill="#E63956">나동 (미디어아트·이벤트)</text>
                      </g>

                      {/* Wing Da (다동 - South West: 복숭아주 시음 & 커스텀 바) */}
                      <g id="wing-da">
                        <rect x="70" y="300" width="280" height="190" rx="12" fill="#FFF0F5" stroke="#F5BCD2" strokeWidth="2" />
                        <rect x="85" y="315" width="120" height="100" rx="8" fill="#FFFFFF" stroke="#FAD2E1" strokeWidth="1.5" />
                        <text x="145" y="365" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D43F7A">🍸 커스텀 바 부스</text>
                        <text x="145" y="385" textAnchor="middle" fontSize="9" fill="#999">DIY 하이볼 스테이션</text>
                        <rect x="215" y="315" width="120" height="100" rx="8" fill="#FFE4EE" stroke="#F7B2CE" strokeWidth="1.5" />
                        <text x="275" y="365" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D43F7A">🍑 복숭아주 시음처</text>
                        <text x="275" y="385" textAnchor="middle" fontSize="9" fill="#999">치악산 생발효주</text>
                        <text x="80" y="515" fontSize="13" fontWeight="900" fill="#D43F7A">다동 (피치 바·시음 라운지)</text>
                      </g>

                      {/* Wing Ra (라동 - South East: 굿즈샵 & 편의동) */}
                      <g id="wing-ra">
                        <rect x="450" y="300" width="280" height="190" rx="12" fill="#F4F8EB" stroke="#C5DBA2" strokeWidth="2" />
                        <rect x="465" y="315" width="150" height="100" rx="8" fill="#FFFFFF" stroke="#D7E6BD" strokeWidth="1.5" />
                        <text x="540" y="365" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5F8226">🛍️ 복숭아 굿즈샵</text>
                        <text x="540" y="385" textAnchor="middle" fontSize="9" fill="#777">피치퐁 마스코트 & 스티커</text>
                        <rect x="625" y="315" width="90" height="100" rx="8" fill="#EAF0DC" stroke="#CBDCB1" strokeWidth="1" />
                        <text x="670" y="365" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5F8226">화장실 (동편)</text>
                        <text x="450" y="515" fontSize="13" fontWeight="900" fill="#5F8226">라동 (굿즈샵·편의동)</text>
                      </g>

                      {/* Central Plaza (중앙광장 하늘마당) & Main Stage */}
                      <g id="central-courtyard">
                        {/* Connecting Sky-Bridges */}
                        <rect x="345" y="110" width="110" height="80" fill="#FFFFFF" stroke="#FFC7CF" strokeWidth="2" strokeDasharray="4,4" />
                        <text x="400" y="155" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FF6565">북측 연결통로</text>

                        <rect x="345" y="350" width="110" height="80" fill="#FFFFFF" stroke="#FFC7CF" strokeWidth="2" strokeDasharray="4,4" />
                        <text x="400" y="395" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FF6565">남측 연결통로</text>

                        <rect x="160" y="235" width="90" height="70" fill="#FFFFFF" stroke="#FFC7CF" strokeWidth="2" strokeDasharray="4,4" />
                        <rect x="550" y="235" width="90" height="70" fill="#FFFFFF" stroke="#FFC7CF" strokeWidth="2" strokeDasharray="4,4" />

                        {/* Courtyard Circle */}
                        <circle cx="400" cy="270" r="105" fill="#FFF8F6" stroke="#FF6565" strokeWidth="2.5" />
                        <circle cx="400" cy="270" r="85" fill="#FFEBEF" stroke="#FFB4C0" strokeWidth="1" />

                        {/* Stage Platform */}
                        <rect x="330" y="175" width="140" height="60" rx="8" fill="#FF6565" stroke="#FFFFFF" strokeWidth="2" />
                        <text x="400" y="210" textAnchor="middle" fontSize="13" fontWeight="900" fill="#FFFFFF">🎤 MAIN STAGE</text>
                        <text x="400" y="225" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFE2E7">메인 무대 & 잔디 관람석</text>

                        {/* Audience Standing Area */}
                        <text x="400" y="280" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E63956">중앙 하늘마당 광장</text>
                        <text x="400" y="300" textAnchor="middle" fontSize="9" fill="#888">스탠딩석 & 휴게 벤치</text>
                      </g>

                      {/* 4 Corner Stairwells */}
                      <rect x="45" y="35" width="30" height="30" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
                      <text x="60" y="53" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">계단</text>

                      <rect x="725" y="35" width="30" height="30" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
                      <text x="740" y="53" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">계단</text>

                      <rect x="45" y="485" width="30" height="30" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
                      <text x="60" y="503" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">계단</text>

                      <rect x="725" y="485" width="30" height="30" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
                      <text x="740" y="503" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">계단</text>
                    </g>
                  ) : (
                    /* ================= 1F CENTRAL MARKET ARCADE & NIGHT STREET ================= */
                    <g id="floor-1f">
                      {/* North & South Main Gates */}
                      {/* North Gate & Shuttle Stop Area */}
                      <rect x="40" y="30" width="720" height="110" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                      <rect x="110" y="50" width="220" height="70" rx="10" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
                      <text x="220" y="85" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E40AF">🚌 셔틀버스 승하차 광장</text>
                      <text x="220" y="103" textAnchor="middle" fontSize="9" fill="#3B82F6">KTX 원주역·터미널 직통 (북문)</text>

                      <rect x="470" y="50" width="220" height="70" rx="10" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
                      <text x="580" y="85" textAnchor="middle" fontSize="12" fontWeight="800" fill="#166534">🚗 공영주차타워 연결통로</text>
                      <text x="580" y="103" textAnchor="middle" fontSize="9" fill="#16A34A">350대 주차타워 도보 2분 (동문)</text>

                      {/* Main Central Covered Arcade Street */}
                      <rect x="70" y="160" width="660" height="200" rx="16" fill="url(#pavingPattern)" stroke="#CBD5E1" strokeWidth="2" />
                      
                      {/* Daytime Dessert Stalls Lane */}
                      <rect x="90" y="180" width="280" height="160" rx="10" fill="#FFF5EB" stroke="#FDBA74" strokeWidth="2" />
                      <text x="230" y="215" textAnchor="middle" fontSize="13" fontWeight="900" fill="#C2410C">🍰 낮 디저트 & 베이커리 거리</text>
                      <text x="230" y="235" textAnchor="middle" fontSize="10" fill="#EA580C">(운영시간: 12:00 ~ 18:00)</text>
                      <rect x="110" y="255" width="240" height="65" rx="6" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="1" />
                      <text x="230" y="285" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9A3412">생복숭아 빙수 · 타르트 · 수제 에이드</text>
                      <text x="230" y="303" textAnchor="middle" fontSize="9" fill="#777">원주 청년 베이커스 팝업 존</text>

                      {/* Night Market Street Lane */}
                      <rect x="430" y="180" width="280" height="160" rx="10" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2" />
                      <text x="570" y="215" textAnchor="middle" fontSize="13" fontWeight="900" fill="#BE123C">🏮 밤 중앙시장 야시장 골목</text>
                      <text x="570" y="235" textAnchor="middle" fontSize="10" fill="#E11D48">(운영시간: 18:00 ~ 23:00)</text>
                      <rect x="450" y="255" width="240" height="65" rx="6" fill="#FFFFFF" stroke="#FECDD3" strokeWidth="1" />
                      <text x="570" y="285" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9F1239">70년 손만두 · 가마솥 통닭 · 해물파전</text>
                      <text x="570" y="303" textAnchor="middle" fontSize="9" fill="#777">치악산 복숭아주 페어링 야식 마켓</text>

                      {/* Central Arcade Pathway Indicator */}
                      <path d="M 400 160 L 400 360" stroke="#FF6565" strokeWidth="2" strokeDasharray="6,4" />
                      <text x="400" y="260" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FF6565" transform="rotate(-90 400 260)">중앙 보행 아케이드</text>

                      {/* South Facilities & Service Hub */}
                      <rect x="40" y="380" width="720" height="130" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                      
                      {/* Info & Jelly Booth */}
                      <rect x="100" y="400" width="180" height="90" rx="10" fill="#FFF0F3" stroke="#FFCCD5" strokeWidth="1.5" />
                      <text x="190" y="435" textAnchor="middle" fontSize="11" fontWeight="800" fill="#E63956">ℹ️ 종합안내소 & 젤리 나눔</text>
                      <text x="190" y="455" textAnchor="middle" fontSize="9" fill="#777">손목밴드 수령 · 우비 배부</text>

                      {/* Smart Lockers */}
                      <rect x="310" y="400" width="180" height="90" rx="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="400" y="435" textAnchor="middle" fontSize="11" fontWeight="800" fill="#334155">🛅 스마트 물품보관소</text>
                      <text x="400" y="455" textAnchor="middle" fontSize="9" fill="#777">120칸 코인라커 (카드 결제)</text>

                      {/* Medical Station */}
                      <rect x="520" y="400" width="180" height="90" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5" />
                      <text x="610" y="435" textAnchor="middle" fontSize="11" fontWeight="800" fill="#DC2626">🚑 의무실 & 응급센터</text>
                      <text x="610" y="455" textAnchor="middle" fontSize="9" fill="#777">전문 의료진 상시 대기 (남문)</text>
                    </g>
                  )}
                </svg>

                {/* Compass & Scale Indicator */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-rose-100 text-[10px] font-mono text-slate-600 font-bold shadow-xs flex items-center gap-1.5 pointer-events-none">
                  <span className="text-[#FF6565]">▲</span>
                  <span>NORTH</span>
                </div>

                {/* Floor Label Badge */}
                <div className="absolute top-3 left-3 bg-[#FF6565] text-white px-3 py-1 rounded-full shadow-xs text-xs font-black tracking-wider flex items-center gap-1.5 pointer-events-none">
                  <span>{activeFloor}</span>
                  <span className="text-[10px] font-medium opacity-90">
                    {activeFloor === '2F' ? '미로예술시장 청춘문화층' : '중앙시장 1층 & 야시장 거리'}
                  </span>
                </div>

                {/* Interactive POI Pins Overlay */}
                {filteredPOIs.map((poi) => {
                  const isSelected = activePOI?.id === poi.id;
                  return (
                    <button
                      key={poi.id}
                      onClick={() => setActivePOI(poi)}
                      style={{
                        left: `${poi.coordinates.x}%`,
                        top: `${poi.coordinates.y}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform duration-200 ${
                        isSelected ? 'scale-125 z-40' : 'hover:scale-115 z-30'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all ${getPinColor(
                          poi.category
                        )} ${isSelected ? 'ring-4 ring-[#FF6565]/50 animate-pulse' : ''}`}
                      >
                        {getPoiIcon(poi.category)}
                      </div>
                      <span
                        className={`hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-md transition-all ${
                          isSelected
                            ? 'bg-[#FF6565] text-white ring-1 ring-white scale-105'
                            : 'bg-white text-slate-800 border border-rose-100 opacity-95 group-hover:opacity-100'
                        }`}
                      >
                        {poi.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Map Guide Notes */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span>* 지도의 구역 또는 아이콘 핀을 클릭하면 운영시간과 세부 팁을 확인할 수 있습니다.</span>
                <span className="font-medium text-rose-500">전 구역 실내 돔 아케이드 완비</span>
              </div>
            </div>

            {/* POI Inspector Detail */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-rose-100 shadow-xl shadow-rose-100/30">
              {activePOI ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-rose-50">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 text-[#FF6565] border border-rose-100">
                      {activePOI.floor} · {activePOI.categoryName}
                    </span>
                    <div className={`p-1.5 rounded-full ${getPinColor(activePOI.category)}`}>
                      {getPoiIcon(activePOI.category)}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {activePOI.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF6565]" />
                      <span>{t.mapShuttle.hoursLabel}: {activePOI.hours}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activePOI.summary}
                  </p>

                  <div className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-100/60 text-xs">
                    <span className="font-bold text-[#FF6565] block mb-0.5">{t.mapShuttle.tipLabel}:</span>
                    <span className="text-slate-600">{activePOI.tip}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-slate-400 text-xs">
                  지도에서 핀을 클릭하세요
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: SHUTTLE BUS & TRANSIT */}
      {activeTab === 'shuttle' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Shuttle Timetable Table */}
          <div className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-rose-50">
              <div className="flex items-center gap-2.5">
                <Bus className="w-5 h-5 text-[#FF6565]" />
                <h3 className="text-lg font-bold text-slate-900">
                  {t.mapShuttle.shuttleTitle}
                </h3>
              </div>
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 w-fit">
                {t.mapShuttle.shuttleInterval}
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              {t.mapShuttle.shuttleRoute}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-rose-50/70 text-slate-700">
                    <th className="py-3 px-4 font-semibold rounded-l-xl">구분</th>
                    <th className="py-3 px-4 font-semibold">KTX 원주역 출발</th>
                    <th className="py-3 px-4 font-semibold">원주터미널 경유</th>
                    <th className="py-3 px-4 font-semibold rounded-r-xl">중앙시장 도착</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-50 font-mono text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">오전 첫차</td>
                    <td className="py-3 px-4">11:00</td>
                    <td className="py-3 px-4">11:15</td>
                    <td className="py-3 px-4">11:25</td>
                  </tr>
                  <tr className="bg-rose-50/20">
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">정규 운행</td>
                    <td className="py-3 px-4">매시 00, 20, 40분</td>
                    <td className="py-3 px-4">매시 15, 35, 55분</td>
                    <td className="py-3 px-4">약 10~15분 소요</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">야간 피크</td>
                    <td className="py-3 px-4">18:00 ~ 22:00</td>
                    <td className="py-3 px-4">15분 간격 탄력 증차</td>
                    <td className="py-3 px-4">정문 승하차장</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="py-3 px-4 font-sans font-medium text-slate-900">심야 막차</td>
                    <td className="py-3 px-4">23:00 (회송)</td>
                    <td className="py-3 px-4">23:15</td>
                    <td className="py-3 px-4 text-[#FF6565] font-bold">23:30 (최종)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-3 border-t border-rose-50">
              <span>* 탑승: 티켓링크 예매 바코드 또는 축제 모바일 화면 제시</span>
              <span>* 승차: KTX 원주역 1번 출구 앞 전용 셔틀 정류장</span>
            </div>
          </div>

          {/* Transit & Parking Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Bus className="w-4 h-4 text-[#FF6565]" />
                <span>{t.mapShuttle.transitTitle}</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <div className="p-3 bg-slate-50/80 rounded-2xl">
                  <strong className="text-slate-900 block mb-0.5">KTX 원주역</strong>
                  셔틀버스(15분) 또는 시내버스 30번, 51번 승차 후 ‘중앙시장’ 하차
                </div>
                <div className="p-3 bg-slate-50/80 rounded-2xl">
                  <strong className="text-slate-900 block mb-0.5">원주시외·고속버스터미널</strong>
                  셔틀버스(10분) 또는 시내버스 2번, 3번, 4번 탑승 후 ‘원주중앙시장’ 하차
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Car className="w-4 h-4 text-[#FF6565]" />
                <span>{t.mapShuttle.parkingTitle}</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <div className="p-3 bg-slate-50/80 rounded-2xl">
                  <strong className="text-slate-900 block mb-0.5">원주전통시장 공영주차타워 (350대)</strong>
                  도보 2분 거리 · 축제 방문객 주차 지원
                </div>
                <div className="p-3 bg-slate-50/80 rounded-2xl">
                  <strong className="text-slate-900 block mb-0.5">자유시장 지하 공영주차장 (180대)</strong>
                  도보 1분 거리 공영주차장
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
