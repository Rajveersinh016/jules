import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      {/* Header Image Container */}
      <div className="@container flex-grow flex flex-col justify-center">
        <div className="@[480px]:px-4 @[480px]:py-8 pt-8 pb-4 flex flex-col items-center">
          <div
            className="w-full aspect-[4/5] max-w-[360px] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl shadow-sm"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRgHAxmDDSrsQpZIctO8bvIg3jmyxWfNO_647Z9ayU6H4W3ERb2cl4-1yXzdOkLsg5mf35z8d7KceuuPaY7sBXGs_xSEW7D7osqyggGqWUJU9XC7KhjFvY832EeUnZ9iE-phJBvDPI-Cp03o3YhFylpzBBCXYvBXgQtb8DU49nVwB3X7Jy5IBT_zU_3P9oZUAu-I7EYLWGHAL7vTVgiavyk2xqUlnREk4FxAQCrubxwCw_YpsMFkC4oVd0BoqgLGZt626O5tpurtER")'}}
          >
            {/* Overlay gradient */}
            <div className="w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center px-6">
          <h1 className="text-charcoal dark:text-white tracking-tight text-[32px] font-extrabold leading-tight text-center pb-3 pt-4">
            Book Your <span className="text-primary">Perfect Look</span>
          </h1>
          <p className="text-charcoal/70 dark:text-white/70 text-base font-medium leading-relaxed pb-6 text-center max-w-[320px]">
            Experience premium grooming services tailored just for you. Find the best barbers and stylists in Kosamba.
          </p>
        </div>
      </div>
      {/* Footer Actions */}
      <div className="w-full pb-8 pt-2">
        {/* Page Indicators */}
        <div className="flex w-full flex-row items-center justify-center gap-2 pb-6">
          <div className="h-2 w-8 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-[#e4e2dd] dark:bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-[#e4e2dd] dark:bg-white/20"></div>
        </div>
        {/* Single Button */}
        <div className="flex px-6">
          <button
            onClick={() => navigate('/login')}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary hover:bg-primary-dark transition-colors text-charcoal text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/20"
          >
            <span className="truncate">Next</span>
            <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
          </button>
        </div>
        {/* Skip Link */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/home')}
            className="text-charcoal/50 dark:text-white/50 text-sm font-semibold hover:text-charcoal dark:hover:text-white transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
