import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import './responsive.scss';
import item1 from '../../../../assets/item1.png';
import item2 from '../../../../assets/item2.png';
import item3 from '../../../../assets/item3.png';
import item4 from '../../../../assets/item4.png';
import item5 from '../../../../assets/item5.png';
import { useState } from 'react';
import { Card } from '../../../../interface/Card';
import CartItem from './CartItem';


const data = ['home', 'shop', 'promotion', 'pages', 'blog', 'contact'];

const Header = (props: any) => {
  const [show, setShow] = useState(false);

  const data = ['home', 'shop', 'promotion', 'pages', 'blog', 'contact'];

  const [isOpenCart, setOpenCart] = useState<boolean>(false);
  const renderCenterItems = (): JSX.Element[] => {
    return data.map((item, i) => {
      return <li key={i}>{item.toUpperCase()}</li>;
    });
  };

  const productsFromApi: Card[] = [
    {
      _id: '1',
      size: 'M',
      label: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
      price: 590.0,
      priceAfterSale: 520.0,
      sale: '70$',
      image: item1,
    },
    {
      _id: '2',
      size: 'M',
      label: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
      price: 610.0,
      isNew: true,
      image: item2,
    },
    {
      _id: '3',
      size: 'M',
      label: 'Blue Yeti USB Microphone Blackout Edition',
      price: 120.0,
      image: item3,
    },
    {
      _id: '4',
      size: 'M',
      label: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
      price: 410.0,
      priceAfterSale: 328.0,
      sale: '20%',
      image: item4,
    },
    {
      _id: '5',
      size: 'M',
      label: 'Pryma Headphones, Rose Gold & Grey',
      price: 410.0,
      priceAfterSale: 180.0,
      sale: '20%',
      image: item5,
    },
    {
      _id: '6',
      size: 'M',
      label: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
      price: 410.0,
      priceAfterSale: 328.0,
      sale: '20%',
      image: item4,
    },
    {
      _id: '7',
      size: 'M',
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
      action: () => console.log('abc'),
    };
  });

  const renderProduct = (): JSX.Element[] => {
    return products.map((product, i) => {
      return <CartItem card={product} key={i} />;
    });
  };

  return (
    <div className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo-wrapper">
          <a href="/">
            style
            <span>shop</span>
          </a>
        </div>
        <div className={`center-items-wrapper ${show && "show"} `}>
          <div className={`closeBtn-wrapper`}>
            <FontAwesomeIcon icon={faXmark} className="closeBtn" onClick={() => { setShow(false) }} />
          </div>
          <ul className="d-flex p-0 m-0">{renderCenterItems()}</ul>
        </div>
        <div className="right-items-wrapper position-relative">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <div
            className="cart position-relative"
            onClick={() => setOpenCart(!isOpenCart)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="counter">
              <span>{props.cartCount}</span>
            </div>
          </div>
          <FontAwesomeIcon icon={faBars} className="dropDownBtn" onClick={() => { setShow(true) }} />

          {isOpenCart && (
            <div className="position-absolute cart-wrapper animated">
              <div className="fix-margin">
                {renderProduct()}
                <div className="total d-flex">
                  <span>Total: </span>
                  <h6 className="mb-0">
                    $12314.01
                  </h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
