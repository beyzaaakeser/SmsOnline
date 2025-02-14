import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

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
