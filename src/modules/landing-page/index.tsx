import BestSellerSection from './components/BestSellerSection';
import Category from './components/CategorySection';
import DealSection from './components/DealSection';
import Main from './components/Main';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/TestimonialSection';
import './style.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import Layout from '../main-layout';

const LandingPage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const emptyString = {};
    dispatch(fetchProducts(emptyString));
  }, []);

  const cardAction = (filter: string) => {
    // filter fetch api here
    console.log('Filtered: ', filter);
  };

  const getItemToCart = (_id: string) => {
    // fetch api to draft the product 123
    console.log(`item with id: ${_id} already get into cart`);
  };

  return (
    <div className="landing__page position-relative">
      <Layout>
        <Main />
        <Category cardAction={cardAction} />
        <NewArrivals cardAction={cardAction} getItemToCart={getItemToCart} />
        <DealSection />
        <BestSellerSection getItemToCart={getItemToCart} />
        <Testimonials />
      </Layout>
    </div>
  );
};

export default LandingPage;
