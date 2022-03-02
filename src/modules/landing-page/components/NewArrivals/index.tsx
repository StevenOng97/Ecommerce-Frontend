import ProductCard from '../../../../components/ProductCard';
import { Card } from '../../../../interface/Card';
import CategoryCard from './components/CategoryCard';
import './style.scss';
import './responsive.scss';

import item1 from '../../../../assets/item1.png';
import item2 from '../../../../assets/item2.png';
import item3 from '../../../../assets/item3.png';
import item4 from '../../../../assets/item4.png';
import item5 from '../../../../assets/item5.png';
import { useRef } from 'react';
import useOnScreen from '../../../../hooks/UseOnScreen';

const NewArrivals = ({ cardAction, getItemToCart }: any) => {
  const containerRef: any = useRef(null);

  const onScreen = useOnScreen(containerRef, '-200px', 0.1);

  const categories: Card[] = [
    {
      label: 'ALL',
      value: '',
      action: () => cardAction(''),
    },
    {
      label: "WOMEN'S",
      value: 'women',
      action: () => cardAction('women'),
    },
    {
      label: "ACCESSORIES'S",
      value: 'accessory',
      action: () => cardAction('accessory'),
    },
    { label: "MEN'S", value: 'men', action: () => cardAction('men') },
  ];

  const productsFromApi: Card[] = [
    {
      _id: '1',
      label: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
      price: 590.0,
      priceAfterSale: 520.0,
      sale: '70$',
      image: item1,
    },
    {
      _id: '2',
      label: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
      price: 610.0,
      isNew: true,
      image: item2,
    },
    {
      _id: '3',
      label: 'Blue Yeti USB Microphone Blackout Edition',
      price: 120.0,
      image: item3,
    },
    {
      _id: '4',
      label: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
      price: 410.0,
      priceAfterSale: 328.0,
      sale: '20%',
      image: item4,
    },
    {
      _id: '5',
      label: 'Pryma Headphones, Rose Gold & Grey',
      price: 410.0,
      priceAfterSale: 180.0,
      sale: '20%',
      image: item5,
    },
    {
      _id: '6',
      label: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
      price: 410.0,
      priceAfterSale: 328.0,
      sale: '20%',
      image: item4,
    },
    {
      _id: '7',
      label: 'Pryma Headphones, Rose Gold & Grey',
      price: 410.0,
      priceAfterSale: 180.0,
      sale: '20%',
      image: item5,
    },
  ];

  const products: Card[] = productsFromApi.map((product) => {
    return {
      ...product,
      action: () => getItemToCart(product._id),
    };
  });

  const renderCategoryCards = (): JSX.Element[] => {
    return categories.map((category, i) => {
      return <CategoryCard categoryCard={category} key={i} />;
    });
  };

  const renderProduct = (): JSX.Element[] => {
    return products.map((product, i) => {
      return <ProductCard card={product} key={i} />;
    });
  };

  const className = onScreen
    ? 'products-wrapper d-flex mt-3 animated'
    : 'products-wrapper d-flex mt-3';

  return (
    <div className="new-arrivals__section section">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <div className="category-card-wrapper d-flex justify-content-center mt-5">
          {renderCategoryCards()}
        </div>
        <div className={className} ref={containerRef}>
          {renderProduct()}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
