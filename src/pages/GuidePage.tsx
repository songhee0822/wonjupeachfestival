import React from 'react';
import { WineOff, Flame, Wine, Tent, CloudRain, ShieldCheck, Ticket } from 'lucide-react';
import { Translations } from '../data/translations';

interface GuidePageProps {
  t: Translations;
  onOpenTicketModal: () => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({ t, onOpenTicketModal }) => {
  return (
    <div id="guide" className="py-16 md:py-20 scroll-mt-24 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.guide.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.guide.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
          {t.guide.desc}
        </p>
      </div>

      {/* 1. Prohibited Items 4 Cards */}
      <div className="mb-14">
        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center sm:text-left">
          {t.guide.prohibitedTitle}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto mb-3">
              <WineOff className="w-6 h-6" />
            </div>
            <div className="text-sm font-bold text-slate-900">{t.guide.prohibited1Title}</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {t.guide.prohibited1Desc}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto mb-3">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-sm font-bold text-slate-900">{t.guide.prohibited2Title}</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {t.guide.prohibited2Desc}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto mb-3">
              <Wine className="w-6 h-6" />
            </div>
            <div className="text-sm font-bold text-slate-900">{t.guide.prohibited3Title}</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {t.guide.prohibited3Desc}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto mb-3">
              <Tent className="w-6 h-6" />
            </div>
            <div className="text-sm font-bold text-slate-900">{t.guide.prohibited4Title}</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {t.guide.prohibited4Desc}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Rain Policy Card */}
      <div className="bg-[#FFF9F8] border border-rose-100 rounded-3xl p-6 sm:p-8 mb-14 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white text-[#FF6565] flex items-center justify-center shadow-xs shrink-0">
              <CloudRain className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.guide.rainTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {t.guide.rainDesc}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold text-rose-600 bg-white px-4 py-2 rounded-full border border-rose-100 text-center w-fit">
            {t.guide.rainBadge}
          </span>
        </div>
      </div>

      {/* 3. Admission Rules */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#FF6565]" />
          <span>{t.guide.stepTitle}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-slate-50/70 rounded-2xl space-y-1">
            <span className="text-xs font-bold text-rose-500 block">STEP 01</span>
            <strong className="text-sm text-slate-900 block">{t.guide.step1Title}</strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.guide.step1Desc}
            </p>
          </div>
          <div className="p-4 bg-slate-50/70 rounded-2xl space-y-1">
            <span className="text-xs font-bold text-rose-500 block">STEP 02</span>
            <strong className="text-sm text-slate-900 block">{t.guide.step2Title}</strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.guide.step2Desc}
            </p>
          </div>
          <div className="p-4 bg-slate-50/70 rounded-2xl space-y-1">
            <span className="text-xs font-bold text-rose-500 block">STEP 03</span>
            <strong className="text-sm text-slate-900 block">{t.guide.step3Title}</strong>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.guide.step3Desc}
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={onOpenTicketModal}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#FF6565] hover:bg-[#fa5050] rounded-full shadow-sm transition-all cursor-pointer"
          >
            <Ticket className="w-4 h-4" />
            <span>{t.actions.ticketBooking}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
