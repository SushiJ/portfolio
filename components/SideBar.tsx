import React from 'react';

import { NavigationOptions } from './Navbar';

export const SideBar: React.FC = () => {
  return (
    <div className="absolute top-16 left-5 z-10">
      <ul className="flex space-x-2">
        <NavigationOptions />
      </ul>
    </div>
  );
};
