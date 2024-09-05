import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <Header />
      <Outlet /> {/* Routed components will render here */}
    </div>
  );
};

export default Layout;
