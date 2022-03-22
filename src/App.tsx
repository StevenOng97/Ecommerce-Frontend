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
import Modal from './components/Modal';
import { handleModalState } from './redux/actions/modal';

function App() {
  const loading = useSelector((state: any) => state.products.isLoading);
  const showModal = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch();
  const className = loading ? 'App disabled-page' : 'App';
  const location = useLocation();

  useEffect(() => {
    let token = localStorage.getItem('authToken') || '';
    if (token) {
      dispatch(authenticated(token));
    }

    return () => {
      token = '';
    };
  }, []);

  const modalActionBtn = () => {
    dispatch(handleModalState(false));
  };

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
      <Modal showModal={showModal} closeBtnAction={modalActionBtn} />
    </div>
  );
}

export default App;
