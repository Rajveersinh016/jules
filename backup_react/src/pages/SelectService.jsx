import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectService = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-[#181611] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-[#181611] dark:text-white">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-[#181611] dark:text-white text-lg font-bold leading-tight tracking-tight">Select Service</h2>
            <p className="text-xs text-[#887c63] font-medium">Final Touch – Kosamba</p>
          </div>
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[#181611] dark:text-white text-[24px]">info</span>
          </button>
        </div>
        <div className="pb-3 overflow-x-auto no-scrollbar">
          <div className="flex border-b border-[#e5e2dc] dark:border-gray-800 px-4 gap-8">
            <a className="flex flex-col items-center justify-center border-b-2 border-primary text-[#181611] dark:text-white pb-3 pt-4 whitespace-nowrap" href="#">
              <p className="text-sm font-bold tracking-wide">Haircuts</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#887c63] pb-3 pt-4 whitespace-nowrap hover:text-[#181611] dark:hover:text-white" href="#">
              <p className="text-sm font-bold tracking-wide">Beard</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#887c63] pb-3 pt-4 whitespace-nowrap hover:text-[#181611] dark:hover:text-white" href="#">
              <p className="text-sm font-bold tracking-wide">Facial</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#887c63] pb-3 pt-4 whitespace-nowrap hover:text-[#181611] dark:hover:text-white" href="#">
              <p className="text-sm font-bold tracking-wide">Combos</p>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-4 space-y-3">
        {/* Service Category Title */}
        <div className="pt-2 pb-1">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#887c63]">Signature Haircuts</h3>
        </div>
        {/* Service Card 1 */}
        <div className="flex items-center gap-4 bg-white dark:bg-[#2c261a] p-4 rounded-xl shadow-sm border border-[#e5e2dc]/50 dark:border-gray-800 justify-between transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-14">
              <span className="material-symbols-outlined text-[28px]">content_cut</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] dark:text-white text-base font-bold leading-tight">Classic Precision Cut</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-primary text-sm font-bold">₹250</p>
                <span className="size-1 bg-[#887c63]/30 rounded-full"></span>
                <p className="text-[#887c63] text-sm font-medium">30 mins</p>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-primary flex size-8 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        {/* Service Card 2 */}
        <div className="flex items-center gap-4 bg-white dark:bg-[#2c261a] p-4 rounded-xl shadow-sm border border-[#e5e2dc]/50 dark:border-gray-800 justify-between transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-14">
              <span className="material-symbols-outlined text-[28px]">dry_cleaning</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] dark:text-white text-base font-bold leading-tight">Final Touch Styling</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-primary text-sm font-bold">₹150</p>
                <span className="size-1 bg-[#887c63]/30 rounded-full"></span>
                <p className="text-[#887c63] text-sm font-medium">20 mins</p>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-primary flex size-8 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        {/* Service Card 3 */}
        <div className="flex items-center gap-4 bg-white dark:bg-[#2c261a] p-4 rounded-xl shadow-sm border border-[#e5e2dc]/50 dark:border-gray-800 justify-between transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-14">
              <span className="material-symbols-outlined text-[28px]">stars</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] dark:text-white text-base font-bold leading-tight">Royal Barber Ritual</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-primary text-sm font-bold">₹400</p>
                <span className="size-1 bg-[#887c63]/30 rounded-full"></span>
                <p className="text-[#887c63] text-sm font-medium">45 mins</p>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-primary flex size-8 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        {/* Service Category Title 2 */}
        <div className="pt-6 pb-1">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#887c63]">Beard & Grooming</h3>
        </div>
        {/* Service Card 4 */}
        <div className="flex items-center gap-4 bg-white dark:bg-[#2c261a] p-4 rounded-xl shadow-sm border border-[#e5e2dc]/50 dark:border-gray-800 justify-between transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-14">
              <span className="material-symbols-outlined text-[28px]">face</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] dark:text-white text-base font-bold leading-tight">Beard Sculpting</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-primary text-sm font-bold">₹120</p>
                <span className="size-1 bg-[#887c63]/30 rounded-full"></span>
                <p className="text-[#887c63] text-sm font-medium">15 mins</p>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-primary flex size-8 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        {/* Service Card 5 */}
        <div className="flex items-center gap-4 bg-white dark:bg-[#2c261a] p-4 rounded-xl shadow-sm border border-[#e5e2dc]/50 dark:border-gray-800 justify-between transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-14">
              <span className="material-symbols-outlined text-[28px]">auto_fix_high</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] dark:text-white text-base font-bold leading-tight">Hot Towel Shave</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-primary text-sm font-bold">₹200</p>
                <span className="size-1 bg-[#887c63]/30 rounded-full"></span>
                <p className="text-[#887c63] text-sm font-medium">25 mins</p>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-primary flex size-8 items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
        {/* Promotional Banner */}
        <div className="mt-8 rounded-xl overflow-hidden relative bg-background-dark p-6">
          <div className="relative z-10">
            <h4 className="text-white text-xl font-bold mb-1">First Visit?</h4>
            <p className="text-primary text-sm font-bold mb-4">Get 20% OFF on Combos</p>
            <button className="bg-primary text-background-dark px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">Claim Now</button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] text-white">content_cut</span>
          </div>
        </div>
        <div className="h-24"></div>
      </main>
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-[#e5e2dc] dark:border-gray-800 px-6 py-4 flex items-center justify-between z-50">
        <div className="flex flex-col">
          <p className="text-xs text-[#887c63] font-medium uppercase tracking-tighter">Selected Items (2)</p>
          <p className="text-[#181611] dark:text-white text-lg font-bold">₹250.00</p>
        </div>
        <button
          onClick={() => navigate('/select-barber')}
          className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default SelectService;
