import React, { useState } from 'react';
import { Ticket, Menu, X, Globe } from 'lucide-react';
import { Language, Translations } from '../data/translations';

export type SectionId =
  | 'about'
  | 'timetable'
  | 'food'
  | 'goods'
  | 'map-shuttle'
  | 'guide'
  | 'street-story'
  | 'faq';

export interface CategoryItem {
  id: SectionId;
  key: keyof Translations['nav'];
}

export const CATEGORIES: CategoryItem[] = [
  { id: 'about', key: 'about' },
  { id: 'timetable', key: 'timetable' },
  { id: 'food', key: 'food' },
  { id: 'goods', key: 'goods' },
  { id: 'map-shuttle', key: 'mapShuttle' },
  { id: 'guide', key: 'guide' },
  { id: 'street-story', key: 'streetStory' },
  { id: 'faq', key: 'faq' },
];

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenTicketModal: () => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  activeSection,
  onSelectSection,
  onOpenTicketModal,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: 'KO' },
    { code: 'en', label: 'EN' },
    { code: 'cn', label: 'CN' },
    { code: 'jp', label: 'JP' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-2xs">
      {/* Top Branding, Language Bar & Ticket CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Name */}
          <button
            onClick={() => onSelectSection('top')}
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
          >
            <span className="w-4 h-4 rounded-full bg-[#FF6565] shadow-xs group-hover:scale-110 transition-transform flex items-center justify-center text-[9px] text-white font-bold">
              🍑
            </span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-[#FF6565] transition-colors">
                {t.festivalName}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-rose-500 font-bold">
                {t.festivalSub}
              </span>
            </div>
          </button>

          {/* Right Action Group: Language Selector (KO / EN / CN / JP) + Ticket CTA + Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Multilingual Switcher (Seoul Spring Festival Style from User Reference Image) */}
            <div className="flex items-center text-xs font-black tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-slate-400 mr-1.5 hidden sm:inline" />
              {languages.map((item, idx) => (
                <React.Fragment key={item.code}>
                  <button
                    onClick={() => onSelectLang(item.code)}
                    className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                      currentLang === item.code
                        ? 'text-[#FF6565] font-black underline underline-offset-4 decoration-2'
                        : 'text-slate-600 hover:text-slate-950 font-bold'
                    }`}
                  >
                    {item.label}
                  </button>
                  {idx < languages.length - 1 && (
                    <span className="text-slate-300 font-normal">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Ticket CTA Button */}
            <button
              onClick={onOpenTicketModal}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-[#FF6565] hover:bg-[#fa5050] active:scale-98 transition-all rounded-full shadow-xs cursor-pointer"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">{t.actions.ticketBooking}</span>
              <span className="xs:hidden">예매</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-rose-500" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar (Combines Shuttle & Map, Click to Smooth Scroll) */}
      <div className="border-t border-rose-50 bg-[#FFFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center justify-between gap-1 overflow-x-auto py-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeSection === cat.id;
              const label = t.nav[cat.key];
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectSection(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold transition-all rounded-full cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-rose-50 text-[#FF6565] shadow-2xs font-black'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Medium/Small Screens Horizontal Scroll Nav */}
          <nav className="flex xl:hidden items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeSection === cat.id;
              const label = t.nav[cat.key];
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectSection(cat.id)}
                  className={`px-3 py-1.5 text-xs font-bold transition-all rounded-full cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-rose-50 text-[#FF6565] border border-rose-200 font-black'
                      : 'text-slate-600 hover:text-slate-900 bg-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-rose-100 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            {CATEGORIES.map((cat) => {
              const isActive = activeSection === cat.id;
              const label = t.nav[cat.key];
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectSection(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 text-left rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-rose-50 text-[#FF6565] font-black'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
