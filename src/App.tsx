import { Button } from 'bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import './main.scss';
import LandingPage from './modules/landing-page';

import 'react-phone-input-2/lib/style.css'
import RegisterPage from './modules/register-page';


function App() {
  const loading = useSelector((state: any) => state.products.isLoading);

  const className = loading ? 'App disabled-page' : 'App';
  const location = useLocation();

  return (
    <div className={className}>
      <Loader loading={loading} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
