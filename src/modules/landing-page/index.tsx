import Loader from '../../components/Loader';
import BestSellerSection from './components/BestSellerSection';
import Category from './components/CategorySection';
import DealSection from './components/DealSection';
import Header from './components/Header';
import Main from './components/Main';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/TestimonialSection';
import Footer from './components/Footer';
import './style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';

const LandingPage = () => {
  const loading = useSelector((state: any) => state.products.isLoading);

  const cartCount = 2;

  const dispatch = useDispatch();
  useEffect(() => {
    const emptyString = {};
    // const queryParams = {
    //  category: 'Value'
    // }
    dispatch(fetchProducts(emptyString));
  }, [])

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
      <Loader loading={loading} />
      <Header cartCount={cartCount} />
      <Main />
      <Category cardAction={cardAction} />
      <NewArrivals cardAction={cardAction} getItemToCart={getItemToCart} />
      <DealSection />
      <BestSellerSection getItemToCart={getItemToCart} />
      <Testimonials />
      <Footer />
      {/* <LocationSection /> */}
    </div>
  );
};

export default LandingPage;
