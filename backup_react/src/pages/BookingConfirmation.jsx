import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-[430px] mx-auto shadow-2xl bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light font-display">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          onClick={() => navigate('/home')}
          className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Confirmation</h2>
        <div className="w-10"></div>
      </div>
      <div className="flex flex-col items-center pt-10 pb-6 px-4">
        {/* Success Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-white text-5xl">check_circle</span>
          </div>
        </div>
        <h1 className="text-[32px] font-extrabold leading-tight tracking-tight text-center pb-2">Booking Confirmed!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-[280px]">Your appointment at Final Touch – Kosamba has been scheduled successfully.</p>
      </div>
      {/* Appointment Card */}
      <div className="p-4">
        <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#2d271a] p-5 shadow-sm border border-gray-200 dark:border-white/5">
          <div className="flex items-center gap-4 border-b border-gray-100 dark:border-white/5 pb-4">
            <div className="h-16 w-16 rounded-full bg-center bg-cover border-2 border-primary" data-alt="Portrait of professional male barber smiling" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACKZszvgHjSlSVpS79MN3H877RWmX-U6Z5ml6rBjbruIb1YEWaWuuGoZN4MslM6vGB4qIyme1eSR26rXzcS3WK7lSA1UKEgDEuTmNKecgOLhndLVpAe18BP36YcOInZMGgD-9e4QbthGn6feV878HokZLTLYsED06q9ir3kUt7ZScaIAUpjFJoZUNi3BYKxQCdGv0DDmwsOAV-2fLrC7WstNIZEjrXuVk8lqKaCmC6H0BSJ-hNmW8MV-AmShzeQyxTjoXPkx78oRi-")'}}></div>
            <div className="flex flex-col">
              <p className="text-primary text-xs font-bold uppercase tracking-wider">With Alex Rivers</p>
              <h3 className="text-xl font-bold">Haircut & Beard Trim</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Final Touch – Kosamba</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <p className="text-xs font-medium uppercase tracking-tight">Date</p>
              </div>
              <p className="font-semibold text-base">Monday, Oct 24</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <p className="text-xs font-medium uppercase tracking-tight">Time</p>
              </div>
              <p className="font-semibold text-base">10:30 AM</p>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-black/20 rounded-lg">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-none mb-1">Location</p>
                <p className="text-sm font-medium">123 Premium Plaza, Kosamba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar Suggestion */}
      <div className="px-4 py-2">
        <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-gray-400">event_note</span>
            <span className="text-sm font-medium">Add to Google Calendar</span>
          </div>
          <span className="material-symbols-outlined text-gray-400">chevron_right</span>
        </button>
      </div>
      {/* Spacer */}
      <div className="flex-grow"></div>
      {/* Actions */}
      <div className="p-6 flex flex-col gap-3">
        <button
          onClick={() => navigate('/home')} // Ideally to /bookings
          className="w-full h-14 bg-primary hover:bg-primary-dark text-black font-bold rounded-xl flex items-center justify-center transition-all shadow-lg shadow-primary/20"
        >
          View My Bookings
        </button>
        <button
          onClick={() => navigate('/home')}
          className="w-full h-14 bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 font-semibold rounded-xl flex items-center justify-center transition-all"
        >
          Back to Home
        </button>
      </div>
      {/* iOS Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1.5 bg-gray-300 dark:bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
