import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { Translations } from '../data/translations';

interface HeroCarouselProps {
  t: Translations;
  onOpenTicketModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  t,
  onOpenTicketModal,
  onScrollToSection,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = t.hero.slides;
  const slideCount = slides.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slideCount]);

  return (
    <div className="relative w-full bg-[#18181B] text-white overflow-hidden select-none">
      {/* Grand Rotating Visual Stage */}
      <div
        className="relative h-[560px] sm:h-[620px] md:h-[680px] lg:h-[720px] w-full flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Slides */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + slideCount) % slideCount;
          const isNext = index === (currentSlide + 1) % slideCount;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${
                isActive
                  ? 'opacity-100 scale-100 z-20 pointer-events-auto'
                  : isPrev
                  ? 'opacity-0 -translate-x-full scale-95 z-10 pointer-events-none'
                  : isNext
                  ? 'opacity-0 translate-x-full scale-95 z-10 pointer-events-none'
                  : 'opacity-0 scale-90 z-0 pointer-events-none'
              }`}
            >
              {/* Slide Background Image with subtle cinematic zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />
                {/* Asymmetric Gradient Overlay: Darkens only bottom-left so the main image is crystal clear! */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent sm:bg-gradient-to-tr sm:from-black/90 sm:via-black/35 sm:to-transparent" />
              </div>

              {/* Slide Content Layer: Positioned at the BOTTOM LEFT */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 text-left flex flex-col items-start justify-end h-full">
                <div className="max-w-2xl">
                  {/* Tag Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-extrabold tracking-widest uppercase text-white shadow-lg mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC49A]" />
                    <span>{slide.tag}</span>
                  </span>

                  {/* Big Stylized Festival Headline */}
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] text-white drop-shadow-2xl whitespace-pre-line mb-3 animate-in fade-in slide-in-from-bottom-3 duration-600">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-white/90 font-medium leading-relaxed drop-shadow-md mb-4 sm:mb-6 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {slide.desc}
                  </p>

                  {/* Date & Location Pill Strip */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-white/95 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 shadow-lg w-fit">
                    <div className="flex items-center gap-1.5 text-[#FCBBAF]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.hero.dates}</span>
                    </div>
                    <span className="text-white/40">•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6565]" />
                      <span>{t.hero.location}</span>
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (slide.targetId === 'about') {
                          onOpenTicketModal();
                        } else {
                          onScrollToSection(slide.targetId);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#FF6565] hover:bg-[#fa5050] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xl shadow-rose-900/50 transition-all cursor-pointer"
                    >
                      <span>{slide.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onOpenTicketModal}
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      <span>{t.actions.ticketBooking}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label={t.actions.prev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label={t.actions.next}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicator Dots: Positioned at Bottom Right so they never cover text */}
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-7 h-2 bg-[#FF6565]'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/90'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* High-Impact Ticker Bar Directly Beneath Hero (Seoul Spring Festival Style from User Image!) */}
      <div className="relative bg-[#FF6565] text-white py-3 border-y border-rose-400 overflow-hidden font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            {t.hero.tickerText}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-mono">
            2027.07.09 — 07.11
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            {t.hero.tickerText}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-mono">
            WONJU JUNGANG MARKET
          </span>
        </div>

        <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center gap-6" aria-hidden="true">
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            {t.hero.tickerText}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-mono">
            2027.07.09 — 07.11
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            {t.hero.tickerText}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-mono">
            WONJU JUNGANG MARKET
          </span>
        </div>
      </div>
    </div>
  );
};
