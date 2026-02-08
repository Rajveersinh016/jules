import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const CustomerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="text-text-dark dark:text-text-light flex size-12 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </div>
        <h2 className="text-text-dark dark:text-text-light text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Final Touch</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-text-dark dark:text-text-light hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
        </div>
      </div>
      {/* Greeting Section */}
      <div className="px-4 py-6">
        <h2 className="text-text-dark dark:text-text-light tracking-light text-[32px] font-bold leading-tight">Hello, Alex</h2>
        <p className="text-text-dark/60 dark:text-text-light/60 text-base font-normal leading-normal pt-2">Choose your premium salon experience.</p>
      </div>
      {/* Main Selection Cards (Men/Women) */}
      <div className="flex flex-col gap-4 px-4 pb-6">
        {/* Men's Salon Card */}
        <div
          onClick={() => navigate('/select-service')}
          className="group relative overflow-hidden rounded-xl h-[240px] w-full cursor-pointer shadow-sm transition-transform hover:scale-[1.01]"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Barber grooming a man's beard in a luxury salon" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2lHRqhdPvSQzE7MU6WH6o5TaHQMDPrbzv5I-1Renno_E7KRwVdpDpP5bHoyN-7rsV4pRrRUi9HyeaXVBbJ8iKS6jEgIFa4o4ayfUi164vjGxIja1-hjqpPN9sskMUPEYGU8jtRzEmxMesK0ZfgC6NDzJDJB1lD127ECRNkT123pdVBxmOI7c-hqOAbYtC5nh4Ex09x4MR2PEHRIPy7lGlRvu5hAsh8MFz96ER0TFKExlsPCgAQJwgjtwLRJfv5LMkB866MGF_N031")'}}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Men Salon</h3>
              <p className="text-white/80 text-sm">Beards, haircuts & grooming</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
        {/* Women's Salon Card */}
        <div
          onClick={() => navigate('/select-service')}
          className="group relative overflow-hidden rounded-xl h-[240px] w-full cursor-pointer shadow-sm transition-transform hover:scale-[1.01]"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Woman getting hair styled in a modern beauty salon" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqHn596WpXERDh4AfByeW-lOKQbTTIZU2jqoa_Cp7hZpbGttD2atjmeEjvElmQzTEfiFAe47ZNmarw8JuDmfxO4jIiPm23PBi6S5Ccm6V_CO9Plz9tS3ZK78x_3m47LzMsqQAECuronehrns3aFyvia9p_-AYiD39Ew4xtAoFFf1j90SdVCMbNepwJtstD6RwILl3O1i4zKtptylldKmCaKXI2OdiAj9udZQT1YF4lcWkL3hFbl8COP6ancauZ33QAx2tOmDq0Ly8J")'}}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Women Salon</h3>
              <p className="text-white/80 text-sm">Styling, spa & treatments</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
      {/* Recommended Section Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-text-dark dark:text-text-light text-xl font-bold leading-tight">Recommended for you</h3>
        <a className="text-primary text-sm font-bold" href="#">See All</a>
      </div>
      {/* Recommended Horizontal Scroll */}
      <div className="flex overflow-x-auto gap-4 px-4 pb-6 scrollbar-hide snap-x snap-mandatory">
        {/* Service Item 1 */}
        <div className="snap-start shrink-0 w-[160px] flex flex-col gap-2">
          <div className="bg-cover bg-center rounded-lg aspect-square relative overflow-hidden" data-alt="Close up of facial massage treatment" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdw7-2Kmb69LuddVFP5MONziRmks7aPCX-X-YUzLbLqMvGLxf4bQJ1dLmyZyBU3-LwoEuM1-fhx5lA8cqEoDAIPq2ePSIQlNYsOOgkbrmOqDglbGE4Ya12N8Su1TcC-uVYsqdGnOkmjIRTakKieycAfDoTwPTOIxAvfIG4G5It1zXrgvXr3h_ewvGrdSh7sQBbqFk6xYSKtIE7swtytr3APMr-LeBSg6TRGLPRjoxfYts70ZVtQ5MlJGAli85gVExlWeVzORVMfzTO")'}}>
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-text-dark dark:text-white">
              4.8 ★
            </div>
          </div>
          <div>
            <h4 className="text-text-dark dark:text-text-light font-bold text-base truncate">Facial Glow</h4>
            <p className="text-text-dark/60 dark:text-text-light/60 text-xs">45 mins • $45</p>
          </div>
        </div>
        {/* Service Item 2 */}
        <div className="snap-start shrink-0 w-[160px] flex flex-col gap-2">
          <div className="bg-cover bg-center rounded-lg aspect-square relative overflow-hidden" data-alt="Hairdresser cutting hair with scissors" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3sU2Ly26QoI0nlBWUlYUSb8iTJ9BPHB2DzxN7HZQeLHVgHWaVjEEXy3kOZ4GOrn-VuUfThlAby2BQB5IQIB5vWczY0KuWqg1HB9rvklT7Pm13al3ytKJSR8RDroPl2y3zikx46kUZ3fsdjcNenkXXnx4p-tAb-8WFFAcPk0DbT6UBlXMDldcMRzunzyvHIQA-1d2c2fBj-Bbv5tub9gWFGW6w3y6kOWZxBr9IDawBKkGnH7Lz7IL_82g-I5oujvL_StZ2JuAkH7KB")'}}>
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-text-dark dark:text-white">
              4.9 ★
            </div>
          </div>
          <div>
            <h4 className="text-text-dark dark:text-text-light font-bold text-base truncate">Classic Cut</h4>
            <p className="text-text-dark/60 dark:text-text-light/60 text-xs">30 mins • $30</p>
          </div>
        </div>
        {/* Service Item 3 */}
        <div className="snap-start shrink-0 w-[160px] flex flex-col gap-2">
          <div className="bg-cover bg-center rounded-lg aspect-square relative overflow-hidden" data-alt="Manicure treatment with pink polish" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjohNQO5q5CMWepHPx-xYL1PKKl-QMld8HRaYaQKmhW4Znc2LIwuwcsDCahP5LinmzuOT7Vx2kZumD9g4VF6UiIM7g5JVFsW9SmcDuAqkRHbqKqZ4NyKYH3d7c0r9wTtBGTrRo69f3TTUa4n5mwfWWjdagAtJ3c9z1eeIOQskZl7VUhLj21L7Zg9aAJzHFszDmBgi5wDPcYJXXPlX3SdlshxJvZumYajsT-WJjoQno1AbxCHZXig7Er8yQNIq4QzrGuhq-1B2IsQ2u")'}}>
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-text-dark dark:text-white">
              4.7 ★
            </div>
          </div>
          <div>
            <h4 className="text-text-dark dark:text-text-light font-bold text-base truncate">Gel Manicure</h4>
            <p className="text-text-dark/60 dark:text-text-light/60 text-xs">60 mins • $55</p>
          </div>
        </div>
      </div>
      {/* Spacer for Bottom Navigation */}
      <div className="h-24"></div>
      <BottomNavigation />
    </div>
  );
};

export default CustomerHome;
