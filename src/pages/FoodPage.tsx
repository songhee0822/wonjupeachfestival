import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { FOOD_MENU } from '../data/festivalData';
import { Translations } from '../data/translations';

interface FoodPageProps {
  t: Translations;
}

export const FoodPage: React.FC<FoodPageProps> = ({ t }) => {
  const [foodTimeFilter, setFoodTimeFilter] = useState<'day' | 'night'>('night');
  const [selectedBase, setSelectedBase] = useState<string>('치악산 복숭아 증류주');
  const [selectedMixer, setSelectedMixer] = useState<string>('스파클링 탄산수');
  const [selectedTopping, setSelectedTopping] = useState<string>('생복숭아 슬라이스');

  const filteredFood = FOOD_MENU.filter((item) => item.timeType === foodTimeFilter);

  return (
    <div id="food" className="py-16 md:py-20 scroll-mt-24 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.food.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.food.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
          {t.food.desc}
        </p>

        {/* Clean Day/Night Switcher */}
        <div className="mt-8 inline-flex p-1 bg-rose-50/70 rounded-full border border-rose-100">
          <button
            onClick={() => setFoodTimeFilter('day')}
            className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              foodTimeFilter === 'day'
                ? 'bg-white text-[#FF6565] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{t.food.dayTab}</span>
          </button>
          <button
            onClick={() => setFoodTimeFilter('night')}
            className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              foodTimeFilter === 'night'
                ? 'bg-white text-[#FF6565] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>{t.food.nightTab}</span>
          </button>
        </div>
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {filteredFood.map((food) => (
          <div
            key={food.id}
            className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:shadow-rose-100/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-xs font-medium text-slate-400">
                  {food.vendor}
                </span>
                {food.badge && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                    {food.badge}
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {food.name}
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                {food.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
              <span className="text-xs font-bold text-rose-500">
                {food.timeType === 'day' ? '낮 디저트' : '밤 야시장'}
              </span>
              <span className="text-[11px] text-slate-400">
                {food.timeType === 'day' ? '1F 아케이드' : '1F 골목거리'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Peach Cocktail Bar DIY */}
      <div className="bg-[#FFF9F8] rounded-3xl border border-rose-100 p-8 sm:p-10 mb-16 shadow-xl shadow-rose-100/30">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold tracking-wider text-[#FF6565] uppercase">
            NIGHT SPECIAL · DIY COCKTAIL
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            {t.food.diyTitle}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {t.food.diyDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Step 1 */}
          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-rose-50">
              {t.food.step1}
            </div>
            <div className="space-y-2">
              {['치악산 복숭아 증류주', '복숭아 과실 와인', '무알콜 피치 퓌레'].map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBase(b)}
                  className={`w-full py-2.5 px-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer ${
                    selectedBase === b
                      ? 'bg-rose-50 text-[#FF6565] font-bold border border-rose-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-rose-50">
              {t.food.step2}
            </div>
            <div className="space-y-2">
              {['스파클링 탄산수', '달콤 진저에일 토닉', '얼그레이 홍차 티'].map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMixer(m)}
                  className={`w-full py-2.5 px-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer ${
                    selectedMixer === m
                      ? 'bg-rose-50 text-[#FF6565] font-bold border border-rose-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-rose-50">
              {t.food.step3}
            </div>
            <div className="space-y-2">
              {['생복숭아 슬라이스', '핑크 식용 글리터', '복숭아 보바 젤리'].map((tG) => (
                <button
                  key={tG}
                  onClick={() => setSelectedTopping(tG)}
                  className={`w-full py-2.5 px-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer ${
                    selectedTopping === tG
                      ? 'bg-rose-50 text-[#FF6565] font-bold border border-rose-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tG}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Combination Preview */}
        <div className="p-4 bg-white rounded-2xl border border-rose-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-[#FF6565] mr-2">레시피 조합:</span>
            <strong className="text-slate-800">{selectedBase} + {selectedMixer} + {selectedTopping}</strong>
          </div>
          <span className="font-semibold text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full text-center">
            {t.food.diyNote}
          </span>
        </div>
      </div>

      {/* Alcohol Rules Banner */}
      <div className="p-5 bg-rose-50/50 rounded-2xl border border-rose-100 text-center text-xs text-rose-800">
        {t.food.ruleNotice}
      </div>
    </div>
  );
};
