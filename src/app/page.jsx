import React from 'react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import RealSim from './components/RealSim';
import UseCase from './components/UseCase';
import AvailableServicesCountries from './components/AvailableServicesCountries';
import Enterprise from './components/EnterpriseClients';
import PowefulApi from './components/PowefulApi';
import Partnership from './components/Partnership';
import LearnMore from './components/LearnMore';
import Faq from './components/Faq';
import Review from './components/Review';
import Download from './components/Download';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import ScrollToTop from './components/Scroll';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="">
      <div className="container flex flex-col">
        <Hero />
        <TrustedBy />
        <Features />
      </div>
      <HowItWorks />
      <RealSim />
      <UseCase />
      <AvailableServicesCountries />
      <Enterprise />
      <PowefulApi />
      <Partnership />
      <LearnMore />
      <Faq />
      <Review />
      <Download />
      <ScrollToTop/>
    </div>
  );
};

export default Home;
