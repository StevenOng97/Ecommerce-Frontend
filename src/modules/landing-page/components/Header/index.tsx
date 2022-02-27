import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import './style.scss';
const data = ['home', 'shop', 'promotion', 'pages', 'blog', 'contact'];
const Header = (props: any) => {
  const renderCenterItems = (): JSX.Element[] => {
    return data.map((item, i) => {
      return <li key={i}>{item.toUpperCase()}</li>;
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
        <div className="center-items-wrapper">
          <ul className="d-flex p-0 m-0">{renderCenterItems()}</ul>
        </div>
        <div className="right-items-wrapper">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <div className="cart position-relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="counter"><span>{props.cartCount}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
