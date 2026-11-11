import React, { useState, useRef } from 'react';
import { Play, Pause, ArrowLeftRight, Store, Sparkles, Wine } from 'lucide-react';
import { Translations } from '../data/translations';

interface StreetStoryPageProps {
  t: Translations;
}

export const StreetStoryPage: React.FC<StreetStoryPageProps> = ({ t }) => {
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
    <div id="street-story" className="py-16 md:py-20 scroll-mt-24 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.streetStory.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.streetStory.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
          {t.streetStory.desc}
        </p>

        {/* Mode Switcher */}
        <div className="mt-8 inline-flex p-1 bg-rose-50/70 rounded-full border border-rose-100">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              viewMode === 'slider'
                ? 'bg-white text-slate-900 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.streetStory.sliderTab}
          </button>
          <button
            onClick={() => setViewMode('video')}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              viewMode === 'video'
                ? 'bg-white text-slate-900 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.streetStory.videoTab}
          </button>
        </div>
      </div>

      {/* View 1: Slider */}
      {viewMode === 'slider' && (
        <div className="max-w-4xl mx-auto mb-16 animate-in fade-in duration-300">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl shadow-rose-100/60 border border-slate-100 select-none cursor-ew-resize">
            <div
              ref={containerRef}
              className="absolute inset-0"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={(e) => isDragging && handleSliderMove(e.clientX)}
              onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
            >
              {/* AFTER (Night Festival) */}
              <img
                src="/src/assets/images/market_alley_night_1794209098465.jpg"
                alt="미로예술 원주중앙시장 야경"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* BEFORE (Vintage Traditional Alley) */}
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

              {/* Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white text-[#FF6565] rounded-full shadow-lg border border-rose-200 flex items-center justify-center text-xs font-bold">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Tags */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full pointer-events-none">
                {t.streetStory.beforeLabel}
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6565]/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full pointer-events-none">
                {t.streetStory.afterLabel}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full pointer-events-none">
                {t.streetStory.dragGuide}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 2: Video */}
      {viewMode === 'video' && (
        <div className="max-w-4xl mx-auto mb-16 animate-in fade-in duration-300">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl shadow-rose-100/60 border border-slate-100 bg-slate-900 flex items-center justify-center">
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

      {/* 3 Key Points - Titles only */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-rose-100/80 shadow-xs hover:border-rose-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#FF6565] flex items-center justify-center shrink-0">
            <Store className="w-5 h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">{t.streetStory.point1Title}</h3>
        </div>

        <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-rose-100/80 shadow-xs hover:border-rose-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#FF6565] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">{t.streetStory.point2Title}</h3>
        </div>

        <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-rose-100/80 shadow-xs hover:border-rose-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#FF6565] flex items-center justify-center shrink-0">
            <Wine className="w-5 h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">{t.streetStory.point3Title}</h3>
        </div>
      </div>
    </div>
  );
};
