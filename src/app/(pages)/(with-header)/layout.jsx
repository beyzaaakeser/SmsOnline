import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/navbar';
import React from 'react';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
