import React from 'react';
import { Bus, MapPin, Car, Clock } from 'lucide-react';

export const ShuttlePage: React.FC = () => {
  return (
    <div className="py-12 md:py-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          TRANSPORTATION & SHUTTLE
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          셔틀버스 & 오시는 길
        </h1>
        <p className="mt-3 text-base text-slate-500 font-normal">
          KTX 원주역과 고속버스터미널에서 축제장까지 20분 간격 무료 순환 셔틀을 운행합니다.
        </p>
      </div>

      {/* Shuttle Timetable Table */}
      <div className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 mb-16 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-rose-50">
          <div className="flex items-center gap-2.5">
            <Bus className="w-5 h-5 text-[#FF6565]" />
            <h2 className="text-lg font-bold text-slate-900">
              무료 셔틀버스 순환 운행 시간표
            </h2>
          </div>
          <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            20분 간격 순환
          </span>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          순환 노선: KTX 원주역(1번 출구) ↔ 원주고속버스터미널 건너편 ↔ 미로예술 중앙시장 정문
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-rose-50/70 text-slate-700">
                <th className="py-3 px-4 font-semibold rounded-l-xl">구분</th>
                <th className="py-3 px-4 font-semibold">KTX 원주역 출발</th>
                <th className="py-3 px-4 font-semibold">원주터미널 경유</th>
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
                <td className="py-3 px-4 font-sans font-medium text-slate-900">야간 피크</td>
                <td className="py-3 px-4">18:00 ~ 22:00</td>
                <td className="py-3 px-4">15분 간격 탄력 증차</td>
                <td className="py-3 px-4">정문 승하차장</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="py-3 px-4 font-sans font-medium text-slate-900">심야 막차</td>
                <td className="py-3 px-4">23:00 (회송)</td>
                <td className="py-3 px-4">23:15</td>
                <td className="py-3 px-4 text-[#FF6565] font-bold">23:30 (최종)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-3 border-t border-rose-50">
          <span>* 탑승: 티켓링크 예매 바코드 또는 축제 화면 제시</span>
          <span>* 승차: 원주역 1번 출구 전용 셔틀 정류장</span>
        </div>
      </div>

      {/* Transit & Parking Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Bus className="w-4 h-4 text-[#FF6565]" />
            <span>대중교통 안내</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <div className="p-3 bg-slate-50/80 rounded-xl">
              <strong className="text-slate-900 block mb-0.5">KTX 원주역</strong>
              셔틀버스(15분) 또는 시내버스 30번, 51번 승차 후 ‘중앙시장’ 하차
            </div>
            <div className="p-3 bg-slate-50/80 rounded-xl">
              <strong className="text-slate-900 block mb-0.5">원주시외·고속버스터미널</strong>
              셔틀버스(10분) 또는 시내버스 2번, 3번, 4번 탑승 후 ‘원주중앙시장’ 하차
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Car className="w-4 h-4 text-[#FF6565]" />
            <span>주차장 안내</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <div className="p-3 bg-slate-50/80 rounded-xl">
              <strong className="text-slate-900 block mb-0.5">원주전통시장 공영주차타워 (350대)</strong>
              도보 2분 거리 · 축제 방문객 주차 지원
            </div>
            <div className="p-3 bg-slate-50/80 rounded-xl">
              <strong className="text-slate-900 block mb-0.5">자유시장 지하 공영주차장 (180대)</strong>
              도보 1분 거리 공영주차장
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
