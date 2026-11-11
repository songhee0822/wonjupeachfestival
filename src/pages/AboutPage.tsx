import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Ticket, ArrowRight, ImageOff } from 'lucide-react';
import { Translations } from '../data/translations';

interface AboutPageProps {
  t: Translations;
  onOpenTicketModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  t,
  onOpenTicketModal,
  onScrollToSection,
}) => {
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
    <div id="about" className="py-16 md:py-20 scroll-mt-24">
      {/* Top D-Day Strip */}
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-rose-600">
          <span className="w-2 h-2 rounded-full bg-[#FF6565] animate-pulse" />
          {t.about.specs.scheduleVal} · {t.about.specs.placeVal}
        </span>
        <span className="text-xs font-mono text-slate-400 font-semibold">
          D-{timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분
        </span>
      </div>

      {/* 2-Column Split: Poster Placeholder on Left, Info on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Festival Poster (포스터 미정) */}
        <div className="lg:col-span-5">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative bg-white p-4 rounded-3xl shadow-xl shadow-rose-100/50 border border-rose-100">
              <div className="relative aspect-[3/4] rounded-2xl bg-gradient-to-b from-rose-50/50 to-pink-50/30 border-2 border-dashed border-rose-200/90 flex flex-col items-center justify-center p-6 text-center select-none">
                <div className="w-14 h-14 rounded-full bg-white text-[#FF6565] flex items-center justify-center shadow-xs mb-3 border border-rose-100">
                  <ImageOff className="w-6 h-6" />
                </div>
                <div className="text-base font-extrabold text-slate-800">
                  {t.about.posterNotice}
                </div>
                <div className="text-xs text-[#FF6565] font-bold mt-1 tracking-wider uppercase">
                  OFFICIAL POSTER
                </div>
                <div className="mt-4 px-3.5 py-1 rounded-full bg-white text-[11px] text-slate-500 font-medium border border-rose-100 shadow-2xs">
                  디자인 최종 확정 시 공개
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Title & Key Specs (간소화) */}
        <div className="lg:col-span-7 space-y-7">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
              {t.about.subtitle}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-base font-normal text-slate-600 max-w-xl leading-relaxed pt-1">
              {t.about.desc1} {t.about.desc2}
            </p>
          </div>

          {/* 3 Clean Key Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
            <div className="p-4 rounded-2xl bg-slate-50/60 border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.about.specs.scheduleTitle}</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900">
                {t.about.specs.scheduleVal}
              </div>
              <div className="text-xs text-slate-500">{t.about.specs.scheduleSub}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/60 border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.about.specs.placeTitle}</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900">
                {t.about.specs.placeVal}
              </div>
              <div className="text-xs text-slate-500">{t.about.specs.placeSub}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/60 border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.about.specs.timeTitle}</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900">
                {t.about.specs.timeVal}
              </div>
              <div className="text-xs text-slate-500">{t.about.specs.timeSub}</div>
            </div>
          </div>

          {/* Clean Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenTicketModal}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold text-white bg-[#FF6565] hover:bg-[#fa5050] active:scale-98 transition-all rounded-full shadow-lg shadow-rose-200/50 cursor-pointer"
            >
              <Ticket className="w-4 h-4" />
              <span>{t.actions.ticketBooking}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onScrollToSection('timetable')}
              className="inline-flex items-center gap-1.5 px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#FF6565] transition-colors cursor-pointer"
            >
              <span>{t.actions.viewTimetable}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

