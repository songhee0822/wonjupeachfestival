import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { Footer } from './components/Footer';
import { TicketModal } from './components/TicketModal';

import { AboutPage } from './pages/AboutPage';
import { TimetablePage } from './pages/TimetablePage';
import { FoodPage } from './pages/FoodPage';
import { GoodsPage } from './pages/GoodsPage';
import { MapShuttlePage } from './pages/MapShuttlePage';
import { GuidePage } from './pages/GuidePage';
import { StreetStoryPage } from './pages/StreetStoryPage';
import { FaqPage } from './pages/FaqPage';

import { Language, TRANSLATIONS } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ko');
  const [activeSection, setActiveSection] = useState<string>('about');
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string>('ticket-1day');
  const [selectedPOIId, setSelectedPOIId] = useState<string>('poi-stage-main');

  const t = TRANSLATIONS[currentLang];

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to highlight active section in navbar as user scrolls down
  useEffect(() => {
    const sectionIds = [
      'about',
      'timetable',
      'food',
      'goods',
      'map-shuttle',
      'guide',
      'street-story',
      'faq',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenTicketModal = (ticketId?: string) => {
    if (ticketId) {
      setSelectedTicketId(ticketId);
    }
    setTicketModalOpen(true);
  };

  const handleNavigateToMap = (poiId?: string) => {
    if (poiId) {
      setSelectedPOIId(poiId);
    }
    handleScrollToSection('map-shuttle');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-rose-100 selection:text-rose-900">
      {/* Sticky Top Navbar with Language Switcher (KO / EN / CN / JP) and Smooth Scroll Navigation */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        activeSection={activeSection}
        onSelectSection={handleScrollToSection}
        onOpenTicketModal={() => handleOpenTicketModal()}
        t={t}
      />

      {/* Top Grand Visual Rotating Hero Banner with Colorful Marquee Ticker */}
      <HeroCarousel
        t={t}
        onOpenTicketModal={() => handleOpenTicketModal()}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content: Continuous Scrollable Festival Guide */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white divide-y divide-rose-50">
        {/* 1. Festival Intro & Poster */}
        <AboutPage
          t={t}
          onOpenTicketModal={() => handleOpenTicketModal()}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Timetable & Lineup */}
        <TimetablePage
          t={t}
          onNavigateToMap={handleNavigateToMap}
        />

        {/* 3. Food Pop-ups & Night Market & Custom Bar */}
        <FoodPage t={t} />

        {/* 4. Official Merchandise & On-site Events */}
        <GoodsPage t={t} />

        {/* 5. Combined Venue Floor Map & 20-min Circular Shuttle Bus */}
        <MapShuttlePage
          t={t}
          initialPOIId={selectedPOIId}
        />

        {/* 6. Visitor Guidelines, Prohibited Items & Rain Policy */}
        <GuidePage
          t={t}
          onOpenTicketModal={() => handleOpenTicketModal()}
        />

        {/* 7. Market Alley Street Story & Before/After Slider */}
        <StreetStoryPage t={t} />

        {/* 8. Frequently Asked Questions */}
        <FaqPage t={t} />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onScrollToSection={handleScrollToSection}
        onOpenTicketModal={() => handleOpenTicketModal()}
      />

      {/* Ticketlink Quick Booking Modal */}
      <TicketModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
        initialPackageId={selectedTicketId}
        t={t}
      />
    </div>
  );
}
