import AvailableServicesCountries from '@/app/components/AvailableServicesCountries';
import Download from '@/app/components/Download';
import Enterprise from '@/app/components/EnterpriseClients';
import Faq from '@/app/components/Faq';
import Features from '@/app/components/Features';
import Hero from '@/app/components/Hero';
import HowItWorks from '@/app/components/HowItWorks';
import LearnMore from '@/app/components/LearnMore';
import Partnership from '@/app/components/Partnership';
import PowefulApi from '@/app/components/PowefulApi';
import RealSim from '@/app/components/RealSim';
import Review from '@/app/components/Review';
import ScrollToTop from '@/app/components/Scroll';
import TrustedBy from '@/app/components/TrustedBy';
import UseCase from '@/app/components/UseCase';
import React from 'react';

const Home = () => {
  return (
    <div>
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
      <ScrollToTop />
    </div>
  );
};

export default Home;
