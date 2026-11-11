import React, { useState } from 'react';
import { X, Ticket, Calendar, Clock, Users, ShieldCheck, ArrowRight, Phone, UserCheck } from 'lucide-react';
import { TICKET_PACKAGES } from '../data/festivalData';
import { Translations } from '../data/translations';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
  t: Translations;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  isOpen,
  onClose,
  initialPackageId = 'ticket-1day',
  t,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(initialPackageId);
  const [selectedDate, setSelectedDate] = useState<string>('2027.07.09 (금)');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<'day' | 'night'>('day');
  const [ticketQuantity, setTicketQuantity] = useState<number>(2);
  const [ageGroup, setAgeGroup] = useState<string>('20');
  const [gender, setGender] = useState<string>('female');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhoneNumber(formatted);
  };

  const handleTicketLinkRedirect = () => {
    setIsRedirecting(true);
    const targetUrl = 'https://www.ticketlink.co.kr';
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-rose-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Soft, Light Header */}
        <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-white px-6 py-4 border-b border-rose-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white text-[#FF6565] flex items-center justify-center shadow-xs">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {t.ticketModal.title}
              </h3>
              <p className="text-xs text-rose-500 font-medium">
                {t.ticketModal.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-white transition-colors cursor-pointer"
            aria-label={t.actions.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* 1. Ticket Package Selection */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-700">{t.ticketModal.step1}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TICKET_PACKAGES.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-rose-50/70 border-[#FF6565] shadow-2xs'
                        : 'bg-white border-slate-200 hover:border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {pkg.name}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                        {pkg.badge}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">
                      {pkg.summary}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Pure Dates & Time Slot */}
          <div className="space-y-3 p-4 bg-[#FFF9F8] rounded-2xl border border-rose-100/70">
            {/* Pure Date Selection (No auxiliary text) */}
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6565]" />
                <span>{t.ticketModal.step2Date}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {['2027.07.09 (금)', '2027.07.10 (토)', '2027.07.11 (일)'].map((date) => {
                  const isSelected = selectedDate === date;
                  return (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FF6565] text-white border-[#FF6565] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-rose-200'
                      }`}
                    >
                      {date}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Daytime vs Nighttime Slot Selection */}
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF6565]" />
                <span>{t.ticketModal.step2Time}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTimeSlot('day')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedTimeSlot === 'day'
                      ? 'bg-white border-[#FF6565] text-[#FF6565] ring-2 ring-rose-200 shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{t.ticketModal.timeDay}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTimeSlot('night')}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedTimeSlot === 'night'
                      ? 'bg-slate-900 border-slate-900 text-white shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>{t.ticketModal.timeNight}</span>
                </button>
              </div>
            </div>

            {/* Party Size */}
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#FF6565]" />
                <span>{t.ticketModal.step2Qty}</span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setTicketQuantity(qty)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      ticketQuantity === qty
                        ? 'bg-[#FF6565] text-white border-[#FF6565]'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {qty}명
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Visitor Registration (연령대, 성별, 전화번호) */}
          <div className="space-y-3 pt-1 border-t border-rose-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <UserCheck className="w-3.5 h-3.5 text-[#FF6565]" />
              <span>{t.ticketModal.userInfoTitle}</span>
            </div>

            {/* Age Group */}
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                {t.ticketModal.ageLabel}
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: '10', label: t.ticketModal.age10 },
                  { id: '20', label: t.ticketModal.age20 },
                  { id: '30', label: t.ticketModal.age30 },
                  { id: '40', label: t.ticketModal.age40 },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAgeGroup(item.id)}
                    className={`py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                      ageGroup === item.id
                        ? 'bg-[#FF6565] text-white border-[#FF6565] font-bold'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-rose-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                {t.ticketModal.genderLabel}
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'female', label: t.ticketModal.genderF },
                  { id: 'male', label: t.ticketModal.genderM },
                  { id: 'none', label: t.ticketModal.genderNone },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGender(item.id)}
                    className={`py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                      gender === item.id
                        ? 'bg-[#FF6565] text-white border-[#FF6565] font-bold'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-rose-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1 flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#FF6565]" />
                <span>{t.ticketModal.phoneLabel}</span>
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength={13}
                placeholder={t.ticketModal.phonePlaceholder}
                className="w-full px-3.5 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#FF6565] focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{t.ticketModal.supportNote}</span>
          </div>
        </div>

        {/* Direct Ticketlink Button */}
        <div className="p-4 sm:p-5 bg-white border-t border-rose-100 shrink-0">
          <button
            onClick={handleTicketLinkRedirect}
            disabled={isRedirecting}
            className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#FF6565] hover:bg-[#fa5050] active:scale-98 transition-all rounded-full shadow-lg shadow-rose-200/60 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{isRedirecting ? t.ticketModal.redirecting : t.ticketModal.btnSubmit}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

