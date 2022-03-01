import BestSellerSection from './components/BestSellerSection';
import Category from './components/CategorySection';
import DealSection from './components/DealSection';
import Header from './components/Header';
import LocationSection from './components/LocationSection';
import Main from './components/Main';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/TestimonialSection';
import './style.scss';

const LandingPage = () => {
  const cartCount = 2;

  const cardAction = (filter: string) => {
    // filter fetch api here
    console.log('Filtered: ', filter);
  };

  const getItemToCart = (_id: string) => {
    // fetch api to draft the product 123
    console.log(`item with id: ${_id} already get into cart`);
  }

  return (
    <div className="landing__page">
      <Header cartCount={cartCount} />
      <Main />
      <Category cardAction={cardAction} />
      <NewArrivals cardAction={cardAction} getItemToCart={getItemToCart} />
      <DealSection />
      <BestSellerSection getItemToCart={getItemToCart} />
      <Testimonials />
      <LocationSection />
    </div>
  );
};

export default LandingPage;
