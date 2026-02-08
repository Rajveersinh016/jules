import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-card-light dark:bg-card-dark border-t border-black/5 dark:border-white/5 pb-6 pt-3 px-6 flex justify-between items-center z-20">
      <button
        onClick={() => navigate('/home')}
        className="flex flex-col items-center gap-1 text-primary w-16"
      >
        <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>home</span>
        <span className="text-[10px] font-bold">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-text-dark/40 dark:text-text-light/40 hover:text-primary dark:hover:text-primary transition-colors w-16">
        <span className="material-symbols-outlined text-[28px]">calendar_month</span>
        <span className="text-[10px] font-medium">Bookings</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-text-dark/40 dark:text-text-light/40 hover:text-primary dark:hover:text-primary transition-colors w-16">
        <span className="material-symbols-outlined text-[28px]">person</span>
        <span className="text-[10px] font-medium">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
