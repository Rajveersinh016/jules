import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light font-display">
      {children}
    </div>
  );
};

export default Layout;
