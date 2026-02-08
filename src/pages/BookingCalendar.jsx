import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingCalendar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-gray-100 flex flex-col min-h-screen">
      {/* Top App Bar */}
      <header className="flex items-center justify-between p-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-10">
        <div
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center justify-start cursor-pointer"
        >
          <span className="material-symbols-outlined text-text-dark dark:text-white text-2xl">arrow_back</span>
        </div>
        <h2 className="text-text-dark dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Pick Schedule</h2>
      </header>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {/* Calendar Section */}
        <div className="px-4 pt-2">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-[#e6e6e6] dark:border-[#3e3b33] p-4">
            {/* Month Navigator */}
            <div className="flex items-center justify-between mb-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-text-dark dark:text-white text-lg">chevron_left</span>
              </button>
              <p className="text-text-dark dark:text-white text-base font-bold leading-tight">October 2023</p>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-text-dark dark:text-white text-lg">chevron_right</span>
              </button>
            </div>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-y-1">
              {/* Day Headers */}
              {['S','M','T','W','T','F','S'].map((day, i) => (
                <p key={i} className="text-gray-500 dark:text-gray-400 text-[13px] font-bold text-center pb-2">{day}</p>
              ))}

              {/* Days */}
              {/* Empty slots for previous month (offset 3) */}
              <div className="col-start-1"></div>
              <div className="col-start-2"></div>
              <div className="col-start-3"></div>

              {/* Date Buttons */}
              {[1,2,3].map(d => (
                <button key={d} className="h-10 w-full flex items-center justify-center text-sm font-medium text-gray-400 dark:text-gray-600 cursor-not-allowed">{d}</button>
              ))}

              {/* Selected Date (4) */}
              <button className="h-10 w-full flex items-center justify-center relative">
                <div className="size-8 flex items-center justify-center rounded-full bg-primary text-text-dark text-sm font-bold shadow-md">4</div>
              </button>

              {/* Available Dates (5-30) */}
              {Array.from({length: 26}, (_, i) => i + 5).map(d => (
                <button key={d} className="h-10 w-full flex items-center justify-center text-sm font-medium text-text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">{d}</button>
              ))}
            </div>
          </div>
        </div>
        {/* Available Time Slots */}
        <div className="mt-6">
          <h3 className="text-text-dark dark:text-white tracking-tight text-xl font-bold leading-tight px-6 pb-4">Available Time Slots</h3>
          <div className="px-4">
            <div className="flex flex-wrap gap-3">
              {/* Morning Slots */}
              <div className="w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 mt-1">Morning</div>
              {['10:00 AM', '10:30 AM'].map(time => (
                <button key={time} className="flex-1 min-w-[100px] h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#3e3b33] hover:border-primary dark:hover:border-primary transition-colors">
                  <p className="text-text-dark dark:text-white text-sm font-medium leading-normal">{time}</p>
                </button>
              ))}
              {/* Selected Slot */}
              <button className="flex-1 min-w-[100px] h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-text-dark shadow-md transition-colors">
                <p className="text-text-dark text-sm font-bold leading-normal">11:00 AM</p>
              </button>
              <button className="flex-1 min-w-[100px] h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#3e3b33] hover:border-primary dark:hover:border-primary transition-colors">
                <p className="text-text-dark dark:text-white text-sm font-medium leading-normal">11:30 AM</p>
              </button>

              {/* Afternoon Slots */}
              <div className="w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 mt-3">Afternoon</div>
              {['01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'].map(time => (
                <button key={time} className="flex-1 min-w-[100px] h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#3e3b33] hover:border-primary dark:hover:border-primary transition-colors">
                  <p className="text-text-dark dark:text-white text-sm font-medium leading-normal">{time}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Appointment Summary Hint */}
        <div className="mt-4 px-4 pb-4">
          <div className="bg-primary/5 rounded-lg border border-primary/20 p-3 flex items-start gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            <div>
              <p className="text-xs text-slate-800 dark:text-zinc-300 font-medium">Selected Slot: <span className="text-primary font-bold">Oct 4, 11:00 AM</span></p>
              <p className="text-[10px] text-zinc-500">Duration: 45 min • Executive Haircut</p>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 w-full bg-background-light dark:bg-background-dark p-4 border-t border-gray-100 dark:border-[#2c2820]">
        <button
          onClick={() => navigate('/confirmation')}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-text-dark dark:bg-[#2c2820] active:scale-[0.98] transition-transform shadow-lg"
        >
          <span className="text-primary text-lg font-bold leading-normal tracking-wide">Confirm Booking</span>
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;
