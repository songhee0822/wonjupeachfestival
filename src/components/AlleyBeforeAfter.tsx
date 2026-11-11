import React, { useState, useRef } from 'react';
import { Play, Pause, ArrowLeftRight, Store, Sparkles, Wine } from 'lucide-react';

export const AlleyBeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'video'>('slider');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <section id="revitalization" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Prominent Headline & Breathing Room */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
            REVITALIZATION STORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            골목의 변화
          </h2>
          <p className="mt-3 text-base text-slate-500 font-normal">
            70년 전통 중앙시장이 분홍빛 청춘 미디어아트 거리로 변신했습니다.
          </p>

          {/* Clean Airy Switcher */}
          <div className="mt-6 inline-flex p-1 bg-rose-50/70 rounded-full border border-rose-100">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              비포 · 애프터 비교
            </button>
            <button
              onClick={() => setViewMode('video')}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                viewMode === 'video'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              골목 영상 클립
            </button>
          </div>
        </div>

        {/* View 1: Slider (Airy & Soft) */}
        {viewMode === 'slider' && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-rose-100/60 border border-slate-100 select-none cursor-ew-resize">
              <div
                ref={containerRef}
                className="absolute inset-0"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e) => isDragging && handleSliderMove(e.clientX)}
                onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
              >
                {/* AFTER IMAGE (Night Festival) */}
                <img
                  src="/src/assets/images/market_alley_night_1794209098465.jpg"
                  alt="원주 피치 페스티벌 야경"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* BEFORE IMAGE (Vintage Alley) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="/src/assets/images/alley_traditional_day_1794209099586.jpg"
                    alt="원주 중앙시장 옛 풍경"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Divider Line & Soft Pink Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white text-[#FF6565] rounded-full shadow-lg border border-rose-200 flex items-center justify-center text-xs font-bold">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtle Floating Tags */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full pointer-events-none">
                  BEFORE: 옛 중앙시장
                </div>
                <div className="absolute top-4 right-4 bg-[#FF6565]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full pointer-events-none">
                  AFTER: 피치 페스티벌 거리
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Video Mode */}
        {viewMode === 'video' && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-rose-100/60 border border-slate-100 bg-slate-900 flex items-center justify-center">
              <img
                src="/src/assets/images/market_alley_night_1794209098465.jpg"
                alt="미로시장 영상 썸네일"
                className={`w-full h-full object-cover transition-all duration-500 ${isPlaying ? 'scale-105 opacity-90' : 'opacity-70'}`}
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute w-16 h-16 rounded-full bg-white text-[#FF6565] shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
                aria-label={isPlaying ? '일시정지' : '재생'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </button>
            </div>
          </div>
        )}

        {/* 3 Airy, Floating Cards (No claustrophobic dark borders!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-2">
          <div className="space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto sm:mx-0">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">70년 손맛 골목 상생</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              원조 손만두, 가마솥 옛날통닭 로컬 상인들과 축제 부스를 함께 운영합니다.
            </p>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto sm:mx-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">벽면 3D 미디어아트</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              시장 붉은 벽돌 벽면에 감성 미디어 파사드와 핑크빛 조명이 켜집니다.
            </p>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto sm:mx-0">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">치악산 복숭아주 전문</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              원주 로컬 양조장의 복숭아 발효주와 커스텀 하이볼만 공식 판매합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
