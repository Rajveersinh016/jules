import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display transition-colors duration-200">
      {/* Header / Navigation */}
      <div className="flex items-center justify-between px-4 py-4 pt-8 md:pt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full text-text-dark dark:text-text-light hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        {/* Logo / Title Area */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-8 rounded-full bg-primary text-background-dark">
            <span className="material-symbols-outlined text-[18px]">content_cut</span>
          </div>
          <h2 className="text-text-dark dark:text-text-light text-lg font-bold tracking-tight">Final Touch – Kosamba</h2>
        </div>
        <div className="size-10"></div> {/* Spacer for optical centering */}
      </div>
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col justify-center px-6 py-6 sm:px-8 max-w-md mx-auto w-full">
        {/* Hero Text */}
        <div className="mb-8 text-center">
          <h1 className="text-text-dark dark:text-text-light text-3xl font-bold leading-tight tracking-tight mb-3">Welcome Back</h1>
          <p className="text-[#827a68] dark:text-[#a8a295] text-base font-medium">Log in to book your premium grooming experience.</p>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); navigate('/home'); }}>
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-text-dark dark:text-text-light text-sm font-semibold ml-1">Email</label>
            <div className="relative">
              <input
                className="block w-full rounded-xl border-none bg-white dark:bg-[#2c2820] py-4 px-4 text-text-dark dark:text-text-light placeholder-[#827a68] shadow-sm ring-1 ring-inset ring-[#e4e2dd] dark:ring-[#454035] focus:ring-2 focus:ring-primary focus:outline-none sm:text-base sm:leading-6 transition-all"
                placeholder="Enter your email address"
                type="email"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[#827a68]">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
            </div>
          </div>
          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-text-dark dark:text-text-light text-sm font-semibold ml-1">Password</label>
            <div className="relative">
              <input
                className="block w-full rounded-xl border-none bg-white dark:bg-[#2c2820] py-4 px-4 text-text-dark dark:text-text-light placeholder-[#827a68] shadow-sm ring-1 ring-inset ring-[#e4e2dd] dark:ring-[#454035] focus:ring-2 focus:ring-primary focus:outline-none sm:text-base sm:leading-6 transition-all pr-12"
                placeholder="Enter your password"
                type="password"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#827a68] hover:text-text-dark dark:hover:text-text-light transition-colors cursor-pointer" type="button">
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </button>
            </div>
          </div>
          {/* Forgot Password */}
          <div className="flex justify-end">
            <a className="text-sm font-semibold text-primary hover:text-[#b08d43] transition-colors" href="#">Forgot Password?</a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 flex w-full justify-center rounded-xl bg-[#1e1b14] dark:bg-primary px-3 py-4 text-sm font-bold leading-6 text-white dark:text-[#1e1b14] shadow-md hover:bg-[#38332a] dark:hover:bg-[#d6b05e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform active:scale-[0.98]"
          >
            Log In
          </button>
        </form>
        {/* Sign Up Link */}
        <p className="mt-10 text-center text-base text-[#827a68] dark:text-[#a8a295]">
          Don’t have an account?
          <a className="font-bold text-primary hover:text-[#b08d43] transition-colors" href="#">Sign up</a>
        </p>
      </div>
      {/* Decorative Bottom Element */}
      <div className="h-4 w-full bg-gradient-to-t from-[#e4e2dd]/20 to-transparent dark:from-black/20"></div>
    </div>
  );
};

export default Login;
