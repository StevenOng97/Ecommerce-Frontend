import BestSellerSection from './components/BestSellerSection';
import Category from './components/CategorySection';
import DealSection from './components/DealSection';
import Main from './components/Main';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/TestimonialSection';
import './style.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import Layout from '../main-layout';

const LandingPage = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    const query = currentFilter ? { categories: currentFilter } : {};
    dispatch(fetchProducts(query));
  }, [currentFilter]);

  const cardAction = (filter: string) => {
    if (currentFilter === filter) return;
    setCurrentFilter(filter);
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
        <NewArrivals
          cardAction={cardAction}
          getItemToCart={getItemToCart}
          currentFilter={currentFilter}
        />
        <DealSection />
        <BestSellerSection getItemToCart={getItemToCart} />
        <Testimonials />
      </Layout>
    </div>
  );
};

export default LandingPage;
