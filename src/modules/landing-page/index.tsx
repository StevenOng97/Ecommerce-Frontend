import BestSellerSection from './components/BestSellerSection';
import Category from './components/CategorySection';
import DealSection from './components/DealSection';
import Header from './components/Header';
import Main from './components/Main';
import NewArrivals from './components/NewArrivals';
import './style.scss';

const LandingPage = () => {
  const cartCount = 2;

  const cardAction = (filter: string) => {
    // filter fetch api here
    console.log('Filtered: ', filter);
  };

  const getItemToCart = (_id: string) => {
    // fetch api to draft the product
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
    </div>
  );
};

export default LandingPage;
