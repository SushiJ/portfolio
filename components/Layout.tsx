import React from 'react';

interface LayoutProps {
  children: React.ReactChild;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto relative px-6 ">{children}</div>;
};

export default Layout;
