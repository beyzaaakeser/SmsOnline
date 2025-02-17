'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
 
  const [state, setState] = useState({ service: null, country: null });

  useEffect(() => {
   
    const savedService = sessionStorage.getItem('selectedService');
    const savedCountry = sessionStorage.getItem('selectedCountry');

    setState({
      service: savedService ? JSON.parse(savedService) : null,
      country: savedCountry ? JSON.parse(savedCountry) : null,
    });
  }, []);

  useEffect(() => {
    if (state.service) {
      sessionStorage.setItem('selectedService', JSON.stringify(state.service));
    } else {
      sessionStorage.removeItem('selectedService');
    }

    if (state.country) {
      sessionStorage.setItem('selectedCountry', JSON.stringify(state.country));
    } else {
      sessionStorage.removeItem('selectedCountry');
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
