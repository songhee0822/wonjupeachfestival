import React, { useState } from 'react';
import { Music, Utensils, Wine, ShoppingBag, Info, Clock, Layers } from 'lucide-react';
import { MAP_POIS, MapPOI } from '../data/festivalData';

interface MapPageProps {
  initialPOIId?: string;
}

export const MapPage: React.FC<MapPageProps> = ({ initialPOIId }) => {
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
    <div className="py-12 md:py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          FESTIVAL VENUE MAP
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          페스티벌 사이트맵
        </h1>
        <p className="mt-3 text-base text-slate-500 font-normal">
          미로예술 원주중앙시장 1층과 2층 무대 및 주요 편의시설 위치 안내
        </p>

        {/* Floor Switcher */}
        <div className="mt-8 inline-flex p-1 bg-rose-50/70 rounded-full border border-rose-100">
          <button
            onClick={() => {
              setActiveFloor('2F');
              const first2f = MAP_POIS.find((p) => p.floor === '2F');
              if (first2f) setActivePOI(first2f);
            }}
            className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFloor === '2F'
                ? 'bg-white text-[#FF6565] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2층 (공연무대 · 칵테일바 · 굿즈샵)</span>
          </button>
          <button
            onClick={() => {
              setActiveFloor('1F');
              const first1f = MAP_POIS.find((p) => p.floor === '1F');
              if (first1f) setActivePOI(first1f);
            }}
            className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFloor === '1F'
                ? 'bg-white text-[#FF6565] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>1층 (야시장 · 디저트 · 종합안내)</span>
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium">
        {[
          { id: 'all', label: '전체' },
          { id: 'stage', label: '무대' },
          { id: 'food', label: '푸드' },
          { id: 'drink', label: '복숭아주' },
          { id: 'goods', label: '굿즈' },
          { id: 'facility', label: '편의시설' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-rose-50 text-[#FF6565] font-bold border border-rose-200'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Map & Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Map Visualizer */}
        <div className="lg:col-span-8 bg-white p-3 rounded-2xl border border-rose-100 shadow-xl shadow-rose-100/30">
          <div className="relative aspect-[16/10] w-full bg-[#FFF9F8] rounded-xl overflow-hidden border border-rose-50">
            {/* Vector Blueprint */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <rect x="50" y="40" width="900" height="520" rx="16" fill="#FFF5F4" stroke="#FEE1DC" strokeWidth="2" />
              <path d="M 50 300 L 950 300" stroke="#FDCEC7" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 500 40 L 500 560" stroke="#FDCEC7" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="500" cy="300" r="90" fill="#FFFFFF" stroke="#FCBBAF" strokeWidth="2" />
              <text x="500" y="296" textAnchor="middle" fill="#FF6565" fontSize="18" fontWeight="bold">
                {activeFloor === '2F' ? '2F 미로예술거리' : '1F 원주중앙시장'}
              </text>
              <text x="500" y="322" textAnchor="middle" fill="#94A3B8" fontSize="11">
                {activeFloor === '2F' ? '중앙 광장 무대 & 칵테일 라운지' : '야시장 골목 & 편의시설 허브'}
              </text>
            </svg>

            {/* Pins */}
            {filteredPOIs.map((poi) => {
              const isSelected = activePOI?.id === poi.id;
              return (
                <button
                  key={poi.id}
                  onClick={() => setActivePOI(poi)}
                  style={{ left: `${poi.coordinates.x}%`, top: `${poi.coordinates.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group transition-transform ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md ring-2 ring-white ${getPinColor(
                      poi.category
                    )} ${isSelected ? 'ring-rose-300 ring-4' : ''}`}
                  >
                    {getPoiIcon(poi.category)}
                  </div>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 top-8 px-2 py-0.5 text-[10px] font-bold rounded-full whitespace-nowrap shadow-sm pointer-events-none ${
                      isSelected
                        ? 'bg-[#FF6565] text-white'
                        : 'bg-white text-slate-800 border border-rose-100'
                    }`}
                  >
                    {poi.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-2 text-center text-xs text-slate-400">
            * 지도 내 마커를 누르면 상세 위치 정보를 확인할 수 있습니다.
          </div>
        </div>

        {/* POI Inspector Detail */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-rose-100 shadow-xl shadow-rose-100/30">
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
                  <span>운영시간: {activePOI.hours}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activePOI.summary}
              </p>

              <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-100/60 text-xs">
                <span className="font-bold text-[#FF6565] block mb-0.5">방문 팁:</span>
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
  );
};
