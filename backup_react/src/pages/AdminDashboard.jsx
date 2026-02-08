import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 min-h-screen flex flex-col font-display transition-colors duration-200">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="flex items-center px-4 h-16 justify-between">
          <button className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-charcoal dark:text-white">menu</span>
          </button>
          <h1 className="text-lg font-bold text-charcoal dark:text-white">Dashboard</h1>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative">
              <span className="material-symbols-outlined text-charcoal dark:text-white">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-background-dark"></span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="w-full h-full bg-cover bg-center" data-alt="Admin profile portrait" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9iU36lFZEgv6SSMz2eDECL759ioMqlT_QTZOxKxfn7nlPY9P1NPIXBzQZi3diWrHVfLIbN_sWsYTGPxLdoIpgTbtqubHAeub5t-Xzrb57fNuiNHZ-WVFBeeVi8GsjClGdE7wmNnMxWMdofz4YZZ2CnwBfAky9LdC3xre-oMlV9Cgp6lbsTIAGWjBddBn4RsKMpqZWjeJfHLH26_8s35uxYEF9DeoSFeWGFlgo6nVBzEaZJv5UszxMvZ7KiAkywOS9zlvCegfYF7bP")'}}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto pb-24">
        {/* Header Text */}
        <div className="px-4 pt-6 pb-2">
          <h2 className="text-charcoal dark:text-white text-[28px] font-extrabold leading-tight tracking-tight">Final Touch – Kosamba</h2>
          <p className="text-gray-500 dark:text-gray-400 text-base font-medium mt-1">Admin Overview</p>
        </div>
        {/* Date Filter */}
        <div className="px-4 py-4 flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-md shadow-primary/20">Today</button>
          <button className="bg-white dark:bg-surface-dark text-charcoal dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Week</button>
          <button className="bg-white dark:bg-surface-dark text-charcoal dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Month</button>
        </div>
        {/* Stats Grid */}
        <div className="px-4 grid grid-cols-2 gap-4 mb-6">
          {/* Card 1: Total Bookings */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
              </div>
              <span className="text-green-600 dark:text-green-400 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+12%</span>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Bookings</p>
              <p className="text-charcoal dark:text-white text-2xl font-bold tracking-tight">1,245</p>
            </div>
          </div>
          {/* Card 2: Today's Appointments */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">schedule</span>
              </div>
              <span className="text-green-600 dark:text-green-400 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+5%</span>
            </div>
            <div className="mt-2 relative z-10">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Today</p>
              <p className="text-charcoal dark:text-white text-2xl font-bold tracking-tight">24</p>
            </div>
          </div>
          {/* Card 3: Pending */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">pending</span>
              </div>
              <span className="text-red-500 text-xs font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">-2%</span>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending</p>
              <p className="text-charcoal dark:text-white text-2xl font-bold tracking-tight">8</p>
            </div>
          </div>
          {/* Card 4: Completed */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
              </div>
              <span className="text-green-600 dark:text-green-400 text-xs font-bold bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+8%</span>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Completed</p>
              <p className="text-charcoal dark:text-white text-2xl font-bold tracking-tight">16</p>
            </div>
          </div>
        </div>
        {/* Recent Activity Header */}
        <div className="px-4 flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-charcoal dark:text-white">Recent Activity</h3>
          <button className="text-primary text-sm font-semibold">View All</button>
        </div>
        {/* List Component */}
        <div className="px-4 flex flex-col gap-3">
          {/* Item 1 */}
          <div className="flex items-center p-3 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <div className="w-full h-full bg-cover bg-center" data-alt="Customer face portrait" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp-ScfwThSh-UQmVPYEuSLHuwQ1WhKuD2cEbuKws9qgv8FrEbkvdkLcLaYxrwxPyalElLV4iBdxX2Ri-o543b7Qh6sgBCJUw42kVm_FRcIb31TlXhNNgV4zeW6s51ZCBui2fw7vz7x-lAqmDiqzBhoxdJJblmcMI7yfw5yM9c-4SKaISaZkIHw9Er-LNlqyojrOn47DVPnunnWwUzY8cSWlV2LKaLuYMajGc6XZWkB0Ed3cXvwTflUfQfloCMs-wGXtiuIXvgYYgJI")'}}></div>
            </div>
            <div className="ml-3 flex-1">
              <h4 className="text-sm font-bold text-charcoal dark:text-white">Arjun Mehta</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Haircut & Beard Trim</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-charcoal dark:text-white">10:00 AM</p>
              <span className="inline-block mt-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center p-3 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <div className="w-full h-full bg-cover bg-center" data-alt="Customer face portrait" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7qPMeajYe09aZKSb5utDd9eczNqh39sk2pow5apSU-Mz15PUOQCHbabELNpJtWCiIaCa71NL1r_1d2NCf5tRPw4xbWfapbHBzdj5Lxvuc0-qH0XBWDXG44zAj4GRr2fGYvh2b4m9oVV5SvGpdLwXVjQRzJu0FGyNXMAGMlTaJgqcAdxYLaZB-F4_yqKypRCUyivSGYXLrpGnYkfXqsZwzlCKW2TE8qLTIElSqF6sWnOieMfbaPHw_E0tePDihm_0AaMMX1tDaxQyH")'}}></div>
            </div>
            <div className="ml-3 flex-1">
              <h4 className="text-sm font-bold text-charcoal dark:text-white">Vikram Singh</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Royal Shave</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-charcoal dark:text-white">11:30 AM</p>
              <span className="inline-block mt-1 w-2 h-2 bg-primary rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="h-6"></div>
      </main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-2 z-50">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {/* Nav Item: Dashboard (Active) */}
          <button className="flex flex-col items-center justify-center w-full h-full gap-1 group">
            <div className="relative p-1 rounded-xl transition-colors bg-primary/10">
              <span className="material-symbols-outlined text-primary fill-1" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
            </div>
            <span className="text-[10px] font-bold text-primary">Dashboard</span>
          </button>
          {/* Nav Item: Appointments */}
          <button className="flex flex-col items-center justify-center w-full h-full gap-1 group">
            <div className="relative p-1 rounded-xl transition-colors group-hover:bg-gray-100 dark:group-hover:bg-white/5">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors">calendar_month</span>
            </div>
            <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors">Appointments</span>
          </button>
          {/* Nav Item: Staff */}
          <button className="flex flex-col items-center justify-center w-full h-full gap-1 group">
            <div className="relative p-1 rounded-xl transition-colors group-hover:bg-gray-100 dark:group-hover:bg-white/5">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors">groups</span>
            </div>
            <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors">Staff</span>
          </button>
          {/* Nav Item: Services */}
          <button className="flex flex-col items-center justify-center w-full h-full gap-1 group">
            <div className="relative p-1 rounded-xl transition-colors group-hover:bg-gray-100 dark:group-hover:bg-white/5">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors">content_cut</span>
            </div>
            <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-gray-200 transition-colors">Services</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AdminDashboard;
