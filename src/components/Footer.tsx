import React from 'react';
import { Ticket, ArrowRight } from 'lucide-react';
import { CATEGORIES } from './Navbar';
import { Translations } from '../data/translations';

interface FooterProps {
  t: Translations;
  onScrollToSection: (sectionId: string) => void;
  onOpenTicketModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onScrollToSection, onOpenTicketModal }) => {
  return (
    <footer className="bg-[#FFF9F8] text-slate-600 py-16 border-t border-rose-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Branding & Ticket */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-rose-100/70">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF6565]" />
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                {t.festivalName}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {t.footer.description}
            </p>
          </div>

          <button
            onClick={onOpenTicketModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#FF6565] hover:bg-[#fa5050] rounded-full shadow-sm transition-all cursor-pointer"
          >
            <Ticket className="w-4 h-4" />
            <span>{t.actions.ticketBooking}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Quick Links Grid in the Footer */}
        <div className="py-8 border-b border-rose-100/70">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            NAVIGATION
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onScrollToSection(cat.id)}
                className="hover:text-[#FF6565] transition-colors cursor-pointer py-1"
              >
                {t.nav[cat.key]}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            {t.footer.host}
          </div>
          <div>
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};
