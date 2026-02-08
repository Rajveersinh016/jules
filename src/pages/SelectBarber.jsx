import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectBarber = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-text-light antialiased transition-colors duration-200">
      {/* TopAppBar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <button
          onClick={() => navigate(-1)}
          className="text-text-dark dark:text-text-light flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        {/* Progress Indicators for Onboarding (Step 2 of 3) */}
        <div className="flex gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="text-[#827a68] dark:text-[#afa898] hover:text-primary dark:hover:text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 transition-colors">
            Skip
          </button>
        </div>
      </div>
      {/* Header Section */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-text-dark dark:text-text-light text-[32px] font-extrabold leading-tight tracking-tight text-left">
          Choose Your <span className="text-primary">Expert</span>
        </h1>
        <p className="text-[#827a68] dark:text-[#afa898] text-base font-medium leading-relaxed mt-3">
          Select a barber to view their portfolio and availability. You can switch professionals at any time.
        </p>
      </div>
      {/* Content Area: Barber Cards */}
      <div className="flex-1 px-4 py-6 flex flex-col gap-5">
        {/* Card 1: David Ross */}
        <div className="group relative flex flex-col sm:flex-row items-stretch justify-start rounded-2xl bg-surface-light dark:bg-surface-dark shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-none border border-transparent dark:border-white/5 overflow-hidden transition-all hover:shadow-lg dark:hover:bg-surface-dark/80">
          <div className="w-full sm:w-32 h-48 sm:h-auto shrink-0 bg-center bg-no-repeat bg-cover relative" data-alt="Professional barber with beard trimming a client" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACxJuX3Eb4y5X77nGCpMlb5sJ8BNZ_GZHYEVX5RgvQPBy7ieqHh-HOrmtxYafe79L8vYfJPgH2nLtbz4ddz13MHMAKTWlpoan-Bt1jNzuL7lD_KR1uHAQMxpA5TB_Ey4WbOaSMUPALDWxNBStIReKkTa-CRE_Njx0hGcxWtylGeQWftf05mqMUTiQphBmRP8WcEKN1vK90B6HCNUi_oX8-CuOhHY48elxOifbMzb3MlN6pmJgg2T3KqMwyFRgiXKUeezZfvh3Hdh_5")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
            <span className="absolute bottom-3 left-3 sm:hidden text-white font-bold text-lg">David Ross</span>
          </div>
          <div className="flex grow flex-col justify-center p-5 gap-3">
            <div className="hidden sm:block">
              <h3 className="text-text-dark dark:text-text-light text-xl font-bold leading-tight">David 'The Fade' Ross</h3>
              <p className="text-primary text-sm font-semibold mt-1">Senior Master Barber</p>
            </div>
            {/* Mobile view title replacement */}
            <div className="sm:hidden">
              <p className="text-primary text-sm font-semibold">Senior Master Barber</p>
            </div>
            <div className="flex items-center gap-1.5 text-[#827a68] dark:text-[#afa898] text-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">star</span>
              <span className="font-bold text-text-dark dark:text-text-light">4.9</span>
              <span>(1.2k Reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2 my-1">
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Fades</span>
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Beard Trim</span>
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Hot Towel</span>
            </div>
            <div className="pt-2 mt-auto">
              <button
                onClick={() => navigate('/booking')}
                className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-primary-dark text-white dark:text-[#1e1b14] text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Select David
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 2: Sarah Jenkins */}
        <div className="group relative flex flex-col sm:flex-row items-stretch justify-start rounded-2xl bg-surface-light dark:bg-surface-dark shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-none border border-transparent dark:border-white/5 overflow-hidden transition-all hover:shadow-lg dark:hover:bg-surface-dark/80">
          <div className="w-full sm:w-32 h-48 sm:h-auto shrink-0 bg-center bg-no-repeat bg-cover relative" data-alt="Female stylist working on hair coloring" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKrJ98f64fqOYcnKu4BFPZkd4FrEtMK9t9797eEWAT2RSA4En21eXJG0RfK7Ar0c-XD3-s-bdfZ0WGmQluA-W1_eIHct2Rek7hWrmQrog8_j0AQLO6Jg8C2EgKLQ3htyixfvMIbRYNmGYGOyMb72A1ug0kRuOFjPCk2SRP15Kl7hCSvYJ1XKNZBPXbw8qMNDC8MhhpvUl_8pmfr4Bx0oNKCP-OSBvOTmmCR7zT0HyVot9K86YJx7gX0lH-hYRKseu4bnUjNRL0IU6Z")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
            <span className="absolute bottom-3 left-3 sm:hidden text-white font-bold text-lg">Sarah Jenkins</span>
          </div>
          <div className="flex grow flex-col justify-center p-5 gap-3">
            <div className="hidden sm:block">
              <h3 className="text-text-dark dark:text-text-light text-xl font-bold leading-tight">Sarah Jenkins</h3>
              <p className="text-primary text-sm font-semibold mt-1">Color Specialist</p>
            </div>
            <div className="sm:hidden">
              <p className="text-primary text-sm font-semibold">Color Specialist</p>
            </div>
            <div className="flex items-center gap-1.5 text-[#827a68] dark:text-[#afa898] text-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">star</span>
              <span className="font-bold text-text-dark dark:text-text-light">4.8</span>
              <span>(850 Reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2 my-1">
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Coloring</span>
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Styling</span>
            </div>
            <div className="pt-2 mt-auto">
              <button
                onClick={() => navigate('/booking')}
                className="w-full sm:w-auto px-6 py-2.5 bg-surface-light dark:bg-white/10 border border-neutral-200 dark:border-transparent text-text-dark dark:text-white text-sm font-bold rounded-xl transition-colors hover:bg-neutral-50 dark:hover:bg-white/20 flex items-center justify-center gap-2"
              >
                Select Sarah
              </button>
            </div>
          </div>
        </div>
        {/* Card 3: Marcus Chen */}
        <div className="group relative flex flex-col sm:flex-row items-stretch justify-start rounded-2xl bg-surface-light dark:bg-surface-dark shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-none border border-transparent dark:border-white/5 overflow-hidden transition-all hover:shadow-lg dark:hover:bg-surface-dark/80">
          <div className="w-full sm:w-32 h-48 sm:h-auto shrink-0 bg-center bg-no-repeat bg-cover relative" data-alt="Barber holding scissors and comb focusing on work" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjT-OpPf1yIIEgF-l0TXx9ZCLW5XG5KkJWSQE3XH9lCYsW5VmxfEEZMEMrZVODDVw7wFqPS1PJjBJ-kuxEjpyCqDv4TcubevLPyugkZS53q3RgvFIMnKW8S2RgyMl4lQEGDSKZRyYswfY_u1KwqrYH9vwy5Rz1NcBSZcv0fmhjoi-RX3M9BBJ88F5M8cQJTSVQr8Djwf7x69UoJ0aBqwOCNZvVjqOlC3sd5VVaWQA2sdMpp6w_l4WlpxaY39zYUBAXVk2Y32rTllyn")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
            <span className="absolute bottom-3 left-3 sm:hidden text-white font-bold text-lg">Marcus Chen</span>
          </div>
          <div className="flex grow flex-col justify-center p-5 gap-3">
            <div className="hidden sm:block">
              <h3 className="text-text-dark dark:text-text-light text-xl font-bold leading-tight">Marcus Chen</h3>
              <p className="text-primary text-sm font-semibold mt-1">Precision Stylist</p>
            </div>
            <div className="sm:hidden">
              <p className="text-primary text-sm font-semibold">Precision Stylist</p>
            </div>
            <div className="flex items-center gap-1.5 text-[#827a68] dark:text-[#afa898] text-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">star</span>
              <span className="font-bold text-text-dark dark:text-text-light">5.0</span>
              <span>(340 Reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2 my-1">
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Classic Cuts</span>
              <span className="px-2 py-1 rounded-md bg-background-light dark:bg-white/5 text-xs font-medium text-[#827a68] dark:text-[#afa898]">Shave</span>
            </div>
            <div className="pt-2 mt-auto">
              <button
                onClick={() => navigate('/booking')}
                className="w-full sm:w-auto px-6 py-2.5 bg-surface-light dark:bg-white/10 border border-neutral-200 dark:border-transparent text-text-dark dark:text-white text-sm font-bold rounded-xl transition-colors hover:bg-neutral-50 dark:hover:bg-white/20 flex items-center justify-center gap-2"
              >
                Select Marcus
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer / Continue */}
      <div className="p-4 bg-background-light dark:bg-background-dark sticky bottom-0 z-10 border-t border-neutral-200 dark:border-white/5 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
        <button
          onClick={() => navigate('/booking')}
          className="w-full rounded-xl bg-text-dark dark:bg-white h-14 text-white dark:text-background-dark text-lg font-bold leading-normal shadow-lg active:scale-[0.99] transition-transform"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectBarber;
