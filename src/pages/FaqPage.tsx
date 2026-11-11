import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/festivalData';
import { Translations } from '../data/translations';

interface FaqPageProps {
  t: Translations;
}

export const FaqPage: React.FC<FaqPageProps> = ({ t }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  return (
    <div id="faq" className="py-16 md:py-20 scroll-mt-24 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.faq.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.faq.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
          {t.faq.desc}
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto text-xs font-medium no-scrollbar">
          {[
            { id: 'all', label: t.faq.catAll },
            { id: 'ticket', label: '예매' },
            { id: 'alcohol', label: '주류 · 성인인증' },
            { id: 'venue', label: '장소 · 우천' },
            { id: 'shuttle', label: '셔틀 · 교통' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-rose-50 text-[#FF6565] font-bold border border-rose-200 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-rose-100 rounded-2xl overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-rose-50/30 transition-colors cursor-pointer"
              >
                <span className="text-sm font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-50 text-[#FF6565] text-xs font-black flex items-center justify-center shrink-0">
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
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50 bg-[#FFFDFD]">
                  <div className="flex items-start gap-3 pt-2">
                    <span className="w-6 h-6 rounded-full bg-[#FF6565] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      A
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
