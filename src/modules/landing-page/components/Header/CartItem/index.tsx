import React from 'react';
import './style.scss';

const CartItem = ({ card }: any) => {
  console.log(card);

  const { image, label: name, size } = card;
  const price = card.priceAfterSale | card.price;

  return (
    <div className="cart-item-wrapper d-flex align-items-center">
      <div className="item-image-wrapper">
        <img src={image} alt="cart" />
      </div>
      <div className="item-information">
        <p className="mb-0">{name}</p>
        <p className="mb-0">Size: {size}</p>
      </div>
      <div className="item-price">
        <p className="mb-0">${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
