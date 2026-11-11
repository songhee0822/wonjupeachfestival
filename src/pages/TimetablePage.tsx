import React, { useState } from 'react';
import { Play, Bookmark, BookmarkCheck, MapPin, Volume2, X } from 'lucide-react';
import { LINEUP_SCHEDULE } from '../data/festivalData';
import { Translations } from '../data/translations';

interface TimetablePageProps {
  t: Translations;
  onNavigateToMap: (poiId?: string) => void;
}

export const TimetablePage: React.FC<TimetablePageProps> = ({ t, onNavigateToMap }) => {
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2' | 'day3'>('day2');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['d2-3', 'd2-4']);
  const [playingTrack, setPlayingTrack] = useState<{ artist: string; title: string } | null>(null);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredSchedule = LINEUP_SCHEDULE.filter((item) => item.day === selectedDay);

  return (
    <div id="timetable" className="py-16 md:py-20 scroll-mt-24">
      {/* Prominent Section Headline */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-widest text-[#FF6565] uppercase">
          {t.timetable.subtitle}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
          {t.timetable.title}
        </h2>
        <p className="mt-3 text-base text-slate-500 font-normal">
          {t.timetable.desc}
        </p>

        {/* Clean Segmented Day Tabs */}
        <div className="mt-8 inline-flex p-1 bg-rose-50/70 rounded-full border border-rose-100">
          {[
            { id: 'day1', label: t.timetable.day1, sub: t.timetable.day1Sub },
            { id: 'day2', label: t.timetable.day2, sub: t.timetable.day2Sub },
            { id: 'day3', label: t.timetable.day3, sub: t.timetable.day3Sub },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDay(d.id as any)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                selectedDay === d.id
                  ? 'bg-white text-[#FF6565] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div>{d.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredSchedule.map((item) => {
          const isBookmarked = bookmarkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-rose-200 shadow-sm hover:shadow-md hover:shadow-rose-100/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              {/* Time & Stage */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="text-xl font-extrabold text-[#FF6565] font-mono tracking-tight w-16">
                  {item.time}
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100/80">
                    {item.stageName}
                  </span>
                  <span className="text-xs text-slate-400 font-medium ml-2">
                    {item.genre}
                  </span>
                </div>
              </div>

              {/* Artist & Summary */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#FF6565] transition-colors truncate">
                    {item.artist}
                  </h3>
                  {item.hasGiveaway && (
                    <span className="text-[11px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      EVENT
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 truncate">
                  {item.summary}
                </p>

                {item.highlightTrack && (
                  <button
                    onClick={() =>
                      setPlayingTrack({
                        artist: item.artist,
                        title: item.highlightTrack || '',
                      })
                    }
                    className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-rose-500 hover:text-rose-600 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-rose-500" />
                    <span>대표곡: {item.highlightTrack}</span>
                  </button>
                )}
              </div>

              {/* Actions: Bookmark & Map Location */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => toggleBookmark(item.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-rose-50 text-[#FF6565]'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {isBookmarked ? (
                    <>
                      <BookmarkCheck className="w-3.5 h-3.5 text-[#FF6565]" />
                      <span>담김</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>일정 담기</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    onNavigateToMap(
                      item.stage === 'main'
                        ? 'poi-stage-main'
                        : item.stage === 'busking'
                        ? 'poi-stage-busking'
                        : 'poi-media-art'
                    )
                  }
                  className="p-2 text-slate-400 hover:text-[#FF6565] hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
                  title={t.timetable.locBtn}
                >
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Sound Preview */}
      {playingTrack && (
        <div className="fixed bottom-6 right-6 z-50 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3">
          <Volume2 className="w-5 h-5 text-[#FF6565] animate-pulse" />
          <div className="text-xs">
            <div className="font-bold text-slate-900">{playingTrack.title}</div>
            <div className="text-slate-400 text-[11px]">{playingTrack.artist}</div>
          </div>
          <button
            onClick={() => setPlayingTrack(null)}
            className="p-1 hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
