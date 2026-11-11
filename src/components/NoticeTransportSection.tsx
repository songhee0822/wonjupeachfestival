import React, { useState } from 'react';
import {
  ShieldAlert,
  CloudRain,
  Bus,
  ChevronDown,
  ChevronUp,
  WineOff,
  Flame,
  Wine,
  Tent,
} from 'lucide-react';
import { FAQS } from '../data/festivalData';

export const NoticeTransportSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="notices" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Prominent Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
            INFORMATION & BUS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            관람 안내 & 셔틀버스
          </h2>
          <p className="mt-3 text-base text-slate-500 font-normal">
            반입 금지 물품, 우천 시 운영 정책, 무료 셔틀버스 시간표와 FAQ
          </p>
        </div>

        {/* 1. Prohibited Items Grid (Clean, Floating & Soft - No Dark Borders!) */}
        <div className="mb-16">
          <h3 className="text-base font-bold text-slate-900 mb-6 text-center sm:text-left">
            반입 금지 물품
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto">
                <WineOff className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900">외부 주류</div>
              <div className="text-[11px] text-slate-400">소주·맥주 반입 금지</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900">휴대용 화기</div>
              <div className="text-[11px] text-slate-400">버너·토치·폭죽 불가</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto">
                <Wine className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900">유리병류</div>
              <div className="text-[11px] text-slate-400">깨지기 쉬운 식기 제한</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#FF6565] flex items-center justify-center mx-auto">
                <Tent className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-900">대형 텐트·드론</div>
              <div className="text-[11px] text-slate-400">통행 방해 용품 제한</div>
            </div>
          </div>
        </div>

        {/* 2. Rain Policy Callout (Airy & Soft) */}
        <div className="bg-[#FFF9F8] border border-rose-100 rounded-3xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-[#FF6565] flex items-center justify-center shadow-xs shrink-0">
              <CloudRain className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900">
                비가 와도 100% 정상 진행됩니다
              </div>
              <div className="text-xs text-slate-500 mt-1">
                미로예술 원주중앙시장은 전 구역이 돔형 실내 아케이드로 지붕이 완비되어 있습니다. (우천 시 우비 무료 증정)
              </div>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold text-rose-600 bg-white px-4 py-1.5 rounded-full border border-rose-100 text-center">
            실내 아케이드
          </span>
        </div>

        {/* 3. Free Shuttle Bus Timetable (Clean Light Table) */}
        <div className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 mb-16 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-rose-50">
            <div className="flex items-center gap-2.5">
              <Bus className="w-5 h-5 text-[#FF6565]" />
              <h3 className="text-base font-bold text-slate-900">
                무료 셔틀버스 시간표 (20분 간격 운행)
              </h3>
            </div>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              무료 탑승
            </span>
          </div>

          <p className="text-xs text-slate-500 mb-6">
            노선: KTX 원주역(1번 출구) ↔ 원주고속버스터미널 ↔ 미로예술 중앙시장 정문
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-rose-50/70 text-slate-700">
                  <th className="py-3 px-4 font-semibold rounded-l-xl">구분</th>
                  <th className="py-3 px-4 font-semibold">KTX 원주역 출발</th>
                  <th className="py-3 px-4 font-semibold">터미널 경유</th>
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
                  <td className="py-3 px-4 font-sans font-medium text-slate-900">심야 막차</td>
                  <td className="py-3 px-4">23:00 (회송)</td>
                  <td className="py-3 px-4">23:15</td>
                  <td className="py-3 px-4 text-[#FF6565] font-bold">23:30 (최종)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-2 border-t border-rose-50">
            <span>* 주차: 전통시장 공영주차타워 (축제 영수증 지참 시 2시간 50% 감면)</span>
            <span>* 티켓 예매 확인 또는 홈페이지 화면 제시 시 무료 탑승</span>
          </div>
        </div>

        {/* 4. FAQ Accordion (Clean & Airy) */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-6 text-center sm:text-left">
            자주 묻는 질문 (FAQ)
          </h3>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-rose-100 rounded-2xl overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-rose-50/30 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-slate-900 flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-rose-50 text-[#FF6565] text-xs font-bold flex items-center justify-center shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50 bg-[#FFFDFD]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
