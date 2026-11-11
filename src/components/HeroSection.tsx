import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Ticket, ArrowRight, Eye } from 'lucide-react';

interface HeroSectionProps {
  onOpenTicketModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTicketModal }) => {
  const [posterZoomed, setPosterZoomed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-07-09T12:00:00+09:00').getTime();
    const updateCountdown = () => {
      const difference = targetDate - new Date().getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Subtle, airy D-Day pill at the top */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-semibold text-rose-600">
            <span className="w-2 h-2 rounded-full bg-[#FF6565] animate-pulse" />
            2027.07.09 — 07.11 · 원주중앙시장
          </span>
          <span className="text-xs font-mono text-slate-400">
            D-{timeLeft.days}일 {timeLeft.hours}시간
          </span>
        </div>

        {/* 2-Column Split: Poster on the LEFT, Big Headlines on the RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Festival Poster (Clean, Airy Frame) */}
          <div className="lg:col-span-5 order-1">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div className="relative bg-white p-3 rounded-2xl shadow-xl shadow-rose-100/50 border border-rose-100 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-rose-100">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-rose-50">
                  <img
                    src="/src/assets/images/festival_main_poster_1794209096046.jpg"
                    alt="2027 원주 피치피치 페스티벌 공식 포스터"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={() => setPosterZoomed(true)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/95 text-slate-800 rounded-full shadow-sm backdrop-blur-xs hover:bg-white hover:text-[#FF6565] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>크게보기</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Large Headlines & Minimal Clean Metadata */}
          <div className="lg:col-span-7 order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
                WONJU SUMMER FESTIVAL 2027
              </span>

              {/* Big Clean Title */}
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                원주 피치피치
                <br />
                <span className="text-[#FF6565]">페스티벌</span>
              </h1>

              {/* Minimal 1-line subtitle */}
              <p className="text-lg sm:text-xl font-normal text-slate-600 max-w-xl leading-relaxed pt-1">
                달콤한 복숭아 디저트와 낭만 야시장,
                <br />
                골목길을 채우는 인디 밴드 라이브의 여름 축제.
              </p>
            </div>

            {/* Clean, Airy Key Points (No dark confining boxes! Floating softly) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-rose-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>일정</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  07.09(금) — 07.11(일)
                </div>
                <div className="text-xs text-slate-500">3일간 상시 진행</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-rose-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>장소</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  미로예술 원주중앙시장
                </div>
                <div className="text-xs text-slate-500">실내 돔 아케이드</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-rose-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>운영시간</span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  12:00 — 23:00
                </div>
                <div className="text-xs text-slate-500">야시장 18시부터</div>
              </div>
            </div>

            {/* Clean Ticket Action (Airy & Soft) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenTicketModal()}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#FF6565] hover:bg-[#fa5050] active:scale-98 transition-all rounded-full shadow-lg shadow-rose-200/50 cursor-pointer"
              >
                <Ticket className="w-4 h-4" />
                <span>티켓링크 사전예매</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#timetable"
                className="inline-flex items-center gap-1 px-5 py-3.5 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
              >
                <span>타임테이블 바로가기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {posterZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setPosterZoomed(false)}
        >
          <div className="relative max-w-md w-full bg-white rounded-2xl p-3 shadow-2xl">
            <img
              src="/src/assets/images/festival_main_poster_1794209096046.jpg"
              alt="2027 원주 피치피치 페스티벌 포스터 확대"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
            <div className="mt-2 text-center text-xs text-slate-500">
              클릭하면 닫힙니다 (ESC)
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
