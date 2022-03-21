import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import './main.scss';
import 'react-phone-input-2/lib/style.css';
import LandingPage from './modules/landing-page';
import RegisterPage from './modules/register-page';
import LoginPage from './modules/login-page';
import Products from './modules/products-page';
import Product from './modules/products-page/product-id-page';
import { authenticated } from './redux/actions/auth';
import Modal from './components/Modal';
import useModal from './hooks/UseModal';

function App() {
  const loading = useSelector((state: any) => state.products.isLoading);
  const dispatch = useDispatch();
  const className = loading ? 'App disabled-page' : 'App';
  const location = useLocation();
  const { showModal } = useModal();

  useEffect(() => {
    const token = localStorage.getItem('authToken') || '';
    console.log(token);
    if (token) {
      dispatch(authenticated(token));
    }
  }, []);

  return (
    <div className={className}>
      <Loader loading={loading} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </AnimatePresence>
      <Modal showModal={showModal} />
    </div>
  );
}

export default App;
