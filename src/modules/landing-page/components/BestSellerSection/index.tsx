import ProductCard from '../../../../components/ProductCard';
import { Card } from '../../../../interface/Card';
import './style.scss';
import Carousel from 'react-elastic-carousel';
import item1 from '../../../../assets/item1.png';
import item2 from '../../../../assets/item2.png';
import item3 from '../../../../assets/item3.png';
import item4 from '../../../../assets/item4.png';
import item5 from '../../../../assets/item5.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
];

const BestSellerSection = ({ getItemToCart }: any) => {
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
      label: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
      price: 590.0,
      priceAfterSale: 520.0,
      sale: '70$',
      image: item1,
    },
    {
      _id: '7',
      label: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
      price: 610.0,
      isNew: true,
      image: item2,
    },
    {
      _id: '8',
      label: 'Blue Yeti USB Microphone Blackout Edition',
      price: 120.0,
      image: item3,
    },
    {
      _id: '9',
      label: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
      price: 410.0,
      priceAfterSale: 328.0,
      sale: '20%',
      image: item4,
    },
    {
      _id: '10',
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

  const renderProduct = (): JSX.Element[] => {
    return products.map((product, i) => {
      return <ProductCard card={product} key={i} />;
    });
  };

  return (
    <div className="best-seller__section section">
      <div className="container">
        <h2 className="section-title">Best Sellers</h2>

        <Carousel isRTL={false} breakPoints={breakPoints} className="mt-5">
          {renderProduct()}
        </Carousel>
      </div>
    </div>
  );
};

export default BestSellerSection;
