import React from 'react';

const BarberDashboard = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-text-light antialiased transition-colors duration-200">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-surface-light dark:bg-surface-dark px-4 py-3 shadow-sm transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" data-alt="Profile picture of the barber" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCa2asZ_AkYvwdoNPUMlZ7AmkRZ8VaHOcY2vkPqOzaTb_giKgfxHuDYBhZ8ftnWbNuZRQCDihYk9kdx1n9UhX0U3PLPdzZV6sQQLHNrOXlR8LinGzktKlGgC-6u_5PTE7M8cSDBivT9exBXwzRTv_MCY4RbxFghFMcXNfhurAsm1_QU6AAIjn7AAyzqB6er45aa49bM7N4YtGNfwimbdAaIqNNMIqtaPSWRJLYZpBUe-MDo7REAlTf-qzeVEhsSkNo18esW7e2YuOXI")'}}>
            </div>
            <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border-2 border-white dark:border-surface-dark"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-text-dark/60 dark:text-text-light/60 uppercase tracking-wide">Location</span>
            <span className="text-sm font-bold leading-none text-text-dark dark:text-text-light">Kosamba</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-text-dark dark:text-text-light" style={{fontSize: '24px'}}>notifications</span>
          </button>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 gap-6">
        {/* Greeting */}
        <section className="flex flex-col pt-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-text-dark dark:text-text-light leading-tight">
            Good morning,<br/><span className="text-primary">Rashid</span>
          </h1>
          <p className="text-text-dark/60 dark:text-text-light/60 text-base mt-2 font-medium">
            You have <span className="text-text-dark dark:text-text-light font-bold">5 appointments</span> scheduled for today.
          </p>
        </section>
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5 flex flex-col items-start gap-1">
            <span className="material-symbols-outlined text-primary mb-1">calendar_clock</span>
            <span className="text-2xl font-bold">5h 30m</span>
            <span className="text-xs text-text-dark/60 dark:text-text-light/60 font-medium">Total Duration</span>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5 flex flex-col items-start gap-1">
            <span className="material-symbols-outlined text-primary mb-1">payments</span>
            <span className="text-2xl font-bold">$420</span>
            <span className="text-xs text-text-dark/60 dark:text-text-light/60 font-medium">Est. Revenue</span>
          </div>
        </div>
        {/* Appointments List */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-dark dark:text-text-light">Today's Appointments</h3>
            <button className="text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-wider">View Calendar</button>
          </div>
          {/* Appointment Card 1 (Upcoming) */}
          <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden border border-black/5 dark:border-white/5 transition-transform hover:scale-[1.01]">
            <div className="flex items-center p-4 gap-4">
              <div className="shrink-0 relative">
                <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 shadow-inner" data-alt="Customer portrait" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW2ISLmWlJvs2rBe1FG7Wf2d4AYb77rVvuhY1yco6dGsS0ur38Io-vIDKVRbn8ogxn6aZNREk-FyP0cWMtjbE_Vz-_ZfnpkAm2AyG-Jot7whmMq_XC43Gk2SZ33LVS36rl1_QfXiIAj_i2DckScnT4d0v4odzO3OfIEfUyuSP0GscFWFSqMdETcFEbwQH4BWBM6OCxWYQ1fsXVWeQ04guDET1wXRdZpN5nyz1pqvkXQQ8Ym6xmRymSnhylpa9y9No6uV-BlUaOPcCh")'}}>
                </div>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-text-dark dark:text-text-light text-base font-bold truncate">David Miller</h4>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary dark:text-primary">
                    10:00 AM
                  </span>
                </div>
                <p className="text-text-dark/60 dark:text-text-light/60 text-sm mt-0.5 truncate">Haircut & Beard Trim</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-text-dark/60 dark:text-text-light/60 bg-background-light dark:bg-background-dark px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> 60m
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-text-dark/60 dark:text-text-light/60 bg-background-light dark:bg-background-dark px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">history</span> Regular
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 pt-0">
              <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Mark as Completed
              </button>
            </div>
          </div>
          {/* Appointment Card 2 */}
          <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden border border-black/5 dark:border-white/5">
            <div className="flex items-center p-4 gap-4">
              <div className="shrink-0 relative">
                <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 shadow-inner" data-alt="Customer portrait" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4SPZ8uPBQ-JgGdUc3_Hqgv8Z38Sb6XAc0sTxFq4RzFChSHqvZOVD9tAQw4dcYOGewoHIJgAHFVkRxxlqcsYI9yO2WEhtfmmNastg5VAcL8jxYhgpb1xYM9VRUbHqJaHTV4yDzqy37lotqUHAWwR8dS6dHCX72FTp0xRR7w5SFPUnwePNO4pRdClpE9Q8mAsUQXLfmEe3nbL9G8tSbYs3FR1oHNe_uiJ5Av5r55IizySq7RA6bMxkJYxvoXHvqkCwIhbtuLU3eAiQb")'}}>
                </div>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-text-dark dark:text-text-light text-base font-bold truncate">Michael Chen</h4>
                  <span className="inline-flex items-center rounded-full bg-background-light dark:bg-white/5 px-2.5 py-0.5 text-xs font-bold text-text-dark dark:text-text-light">
                    11:30 AM
                  </span>
                </div>
                <p className="text-text-dark/60 dark:text-text-light/60 text-sm mt-0.5 truncate">Royal Shave</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-text-dark/60 dark:text-text-light/60 bg-background-light dark:bg-background-dark px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> 30m
                  </span>
                </div>
              </div>
            </div>
            {/* Secondary Action Style */}
            <div className="px-4 pb-4 pt-0 flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 border border-primary/30 text-primary dark:text-primary hover:bg-primary/5 font-bold py-2 rounded-lg transition-colors text-sm">
                Details
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-text-dark dark:bg-white text-white dark:text-black font-bold py-2 rounded-lg transition-colors text-sm">
                Complete
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/5 px-6 py-3 pb-6 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>grid_view</span>
          <span className="text-[10px] font-bold">Dashboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-dark/60 dark:text-text-light/60 hover:text-text-dark dark:hover:text-text-light transition-colors">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="text-[10px] font-medium">Schedule</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-dark/60 dark:text-text-light/60 hover:text-text-dark dark:hover:text-text-light transition-colors">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-medium">Clients</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-dark/60 dark:text-text-light/60 hover:text-text-dark dark:hover:text-text-light transition-colors">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default BarberDashboard;
