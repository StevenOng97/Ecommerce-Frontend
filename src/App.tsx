import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import './main.scss';
import 'react-phone-input-2/lib/style.css';
import LandingPage from './modules/landing-page';
import RegisterPage from './modules/register-page';
import LoginPage from './modules/login-page';
import Product from './modules/products-page/product-id-page';
import { authenticated } from './redux/actions/auth';
import Modal from './components/Modal';
import { handleModalState } from './redux/actions/modal';
import Layout from './modules/main-layout';
import ErrorPage from './modules/error-page';
import { AnimatePresence } from 'framer-motion';
import Header from './modules/landing-page/components/Header';
import Footer from './modules/landing-page/components/Footer';
import AnimatedPage from './components/AnimatedPage';
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
      <Header cartCount={2} />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={
            <AnimatedPage>
              <LandingPage />
            </AnimatedPage>
          } />
          <Route path="register" element={
            <AnimatedPage>
              <RegisterPage />
            </AnimatedPage>
          } />
          <Route path="login" element={
            <AnimatedPage>
              <LoginPage />
            </AnimatedPage>
          } />
          <Route path="products/:id" element={
            <AnimatedPage>
              <Product />
            </AnimatedPage>
          } />
          <Route path="*" element={
            <AnimatedPage>
              <ErrorPage />
            </AnimatedPage>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Modal showModal={showModal} closeBtnAction={modalActionBtn} />
    </div>
  );
}

export default App;
