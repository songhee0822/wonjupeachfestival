import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { GOODS_LIST } from '../data/festivalData';
import { Translations } from '../data/translations';

interface GoodsPageProps {
  t: Translations;
}

export const GoodsPage: React.FC<GoodsPageProps> = ({ t }) => {
  const [alertRequested, setAlertRequested] = useState<boolean>(false);

  return (
    <div id="goods" className="py-16 md:py-20 scroll-mt-24 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.goods.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.goods.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
          {t.goods.desc}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-rose-600 shadow-2xs">
          <Gift className="w-4 h-4 text-[#FF6565]" />
          <span>{t.goods.banner}</span>
        </div>
      </div>

      {/* Goods Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {GOODS_LIST.map((goods) => (
          <div
            key={goods.id}
            className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:shadow-rose-100/50 transition-all flex flex-col justify-between"
          >
            <div>
              {goods.badge && (
                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 mb-2">
                  {goods.badge}
                </span>
              )}
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {goods.name}
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                {goods.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-rose-50 flex items-center justify-between text-xs text-slate-400">
              <span>{t.goods.limited}</span>
              <span className="text-rose-500 font-semibold">{t.goods.freeJelly}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Status & Events Grid */}
      <div className="border-t border-rose-100 pt-16">
        <h3 className="text-xl font-bold text-slate-900 mb-8 text-center sm:text-left">
          체험 프로그램 & 현장 이벤트
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience Program: On Hold */}
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-500">EXPERIENCE</span>
              <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                {t.goods.expStatus}
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900">
              {t.goods.expTitle}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.goods.expDesc}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setAlertRequested(true)}
                className={`w-full py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                  alertRequested
                    ? 'bg-rose-50 text-rose-700 font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {alertRequested ? '알림 신청 완료 ✓' : '오픈 알림 신청'}
              </button>
            </div>
          </div>

          {/* Photo Zone */}
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
            <span className="text-xs font-bold text-rose-500">PHOTO ZONE</span>
            <h4 className="text-base font-bold text-slate-900">
              {t.goods.photoTitle}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.goods.photoDesc}
            </p>
            <div className="pt-2 text-xs text-rose-500 font-medium">
              점등: 매일 18:00 — 23:00 상시
            </div>
          </div>

          {/* Dress Code Event */}
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
            <span className="text-xs font-bold text-rose-500">EVENT</span>
            <h4 className="text-base font-bold text-slate-900">
              {t.goods.dressTitle}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.goods.dressDesc}
            </p>
            <div className="pt-2 text-xs text-rose-500 font-medium">
              인증 장소: 1F 종합안내소
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
