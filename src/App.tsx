import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import './main.scss';
import LandingPage from './modules/landing-page';

import 'react-phone-input-2/lib/style.css';
import RegisterPage from './modules/register-page';
import LoginPage from './modules/login-page';
import { authenticated } from './redux/actions/auth';

function App() {
  const loading = useSelector((state: any) => state.products.isLoading);
  const dispatch = useDispatch();
  const className = loading ? 'App disabled-page' : 'App';
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken') || '';
    console.log(token);
    if (token) {
      dispatch(authenticated(token));
    };
  }, []);

  return (
    <div className={className}>
      <Loader loading={loading} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
