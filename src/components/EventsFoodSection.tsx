import React, { useState } from 'react';
import { Utensils, Sun, Moon, ShoppingBag, Camera, Shirt, Wine, Sparkles } from 'lucide-react';
import { FOOD_MENU, GOODS_LIST } from '../data/festivalData';

export const EventsFoodSection: React.FC = () => {
  const [foodTimeFilter, setFoodTimeFilter] = useState<'day' | 'night'>('night');
  const [selectedBase, setSelectedBase] = useState<string>('치악산 복숭아 증류주');
  const [selectedMixer, setSelectedMixer] = useState<string>('스파클링 탄산수');
  const [selectedTopping, setSelectedTopping] = useState<string>('생복숭아 슬라이스');
  const [alertRequested, setAlertRequested] = useState<boolean>(false);

  const filteredFood = FOOD_MENU.filter((item) => item.timeType === foodTimeFilter);

  return (
    <section id="events" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Prominent Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
            FOOD & EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            먹거리 & 굿즈
          </h2>
          <p className="mt-3 text-base text-slate-500 font-normal">
            낮에는 달콤한 복숭아 디저트, 밤에는 전통 야시장과 나만의 피치 칵테일 바
          </p>

          {/* Clean Day/Night Switcher */}
          <div className="mt-8 inline-flex p-1 bg-rose-50/70 rounded-full border border-rose-100">
            <button
              onClick={() => setFoodTimeFilter('day')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                foodTimeFilter === 'day'
                  ? 'bg-white text-[#FF6565] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>낮 디저트 (12:00~18:00)</span>
            </button>
            <button
              onClick={() => setFoodTimeFilter('night')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                foodTimeFilter === 'night'
                  ? 'bg-white text-[#FF6565] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>밤 야시장 (18:00~23:00)</span>
            </button>
          </div>
        </div>

        {/* 1. Food Cards Grid (Spacious & Clean) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredFood.map((food) => (
            <div
              key={food.id}
              className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:shadow-rose-100/50 transition-all flex flex-col justify-between"
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
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {food.name}
                </h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {food.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#FF6565] font-mono">
                  {food.price}
                </span>
                <span className="text-[11px] text-slate-400">
                  {food.timeType === 'day' ? '1F 아케이드' : '1F 야시장거리'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Local Notice Strip */}
        <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100 mb-20 text-center text-xs text-rose-800">
          * 축제장 내부에서는 상생을 위해 오직 <strong>치악산 복숭아주</strong>만 판매하며, 타 외부 주류 반입은 제한됩니다.
        </div>

        {/* 2. Custom Peach Cocktail Bar (Bright, Open & Soft - No Dark Confining Bezel!) */}
        <div className="bg-[#FFF9F8] rounded-3xl border border-rose-100 p-8 sm:p-10 mb-20 shadow-xl shadow-rose-100/30">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold tracking-wider text-[#FF6565] uppercase">
              NIGHT SPECIAL · DIY COCKTAIL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              나만의 피치 하이볼 커스텀 바
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              베이스 주류, 탄산, 토핑을 골라 나만의 복숭아 칵테일을 즉석에서 조합해보세요. (무알콜 옵션 가능)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
              <div className="text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-rose-50">
                1. 베이스 선택
              </div>
              <div className="space-y-2">
                {['치악산 복숭아 증류주', '복숭아 과실 와인', '무알콜 피치 퓌레'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBase(b)}
                    className={`w-full py-2 px-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer ${
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
            <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
              <div className="text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-rose-50">
                2. 믹서 선택
              </div>
              <div className="space-y-2">
                {['스파클링 탄산수', '달콤 진저에일 토닉', '얼그레이 홍차 티'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMixer(m)}
                    className={`w-full py-2 px-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer ${
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
            <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
              <div className="text-xs font-bold text-slate-700 mb-3 pb-2 border-b border-rose-50">
                3. 토핑 가니시
              </div>
              <div className="space-y-2">
                {['생복숭아 슬라이스', '핑크 식용 글리터', '복숭아 보바 젤리'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopping(t)}
                    className={`w-full py-2 px-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer ${
                      selectedTopping === t
                        ? 'bg-rose-50 text-[#FF6565] font-bold border border-rose-200'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Recipe Bar (Airy & Clean) */}
          <div className="p-4 bg-white rounded-2xl border border-rose-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#FF6565] mr-2">내 커스텀 레시피:</span>
              <strong className="text-slate-800">{selectedBase} + {selectedMixer} + {selectedTopping}</strong>
            </div>
            <span className="font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full text-center">
              2F 커스텀 바 부스에서 즉석 제조
            </span>
          </div>
        </div>

        {/* 3. Peach Goods Catalog (Spacious & Airy) */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-rose-50">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FF6565]" />
              <span>복숭아 굿즈</span>
            </h3>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              구매자 전원 피치 젤리 증정
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOODS_LIST.map((goods) => (
              <div
                key={goods.id}
                className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:shadow-rose-100/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {goods.badge && (
                    <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 mb-2">
                      {goods.badge}
                    </span>
                  )}
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {goods.name}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {goods.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#FF6565] font-mono">
                    {goods.price}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    + 젤리 무료
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Experience & Events (Airy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience Program: On Hold */}
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-500">EXPERIENCE</span>
              <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                준비 중
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900">
              복숭아 향수 조향 & 에코백 DIY
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              체험형 팝업은 세부 일정 조율 중입니다. 오픈 시 알림 신청을 받아보세요.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setAlertRequested(true)}
                className={`w-full py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                  alertRequested
                    ? 'bg-rose-50 text-rose-700'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {alertRequested ? '오픈 알림 신청 완료 ✓' : '오픈 알림 신청'}
              </button>
            </div>
          </div>

          {/* Photo Zone */}
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
            <span className="text-xs font-bold text-rose-500">PHOTO ZONE</span>
            <h4 className="text-base font-bold text-slate-900">
              골목 미디어아트 & 네온 파사드
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              2층 벽돌 벽면에 투사되는 핑크빛 3D 미디어아트와 네온 포토존.
            </p>
            <div className="pt-2 text-xs text-rose-500 font-medium">
              점등: 매일 18:00 — 23:00
            </div>
          </div>

          {/* Event */}
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-2">
            <span className="text-xs font-bold text-rose-500">EVENT</span>
            <h4 className="text-base font-bold text-slate-900">
              핑크 드레스코드 & 럭키드로우
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              핑크 착장 방문 시 복숭아주 1잔 무료! 영수증 응모 시 일요일 태블릿 경품 추첨.
            </p>
            <div className="pt-2 text-xs text-rose-500 font-medium">
              인증: 1F 종합안내소
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
