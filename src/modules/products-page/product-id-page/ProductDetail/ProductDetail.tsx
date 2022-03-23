import "./style.scss"
import "./responsive.scss"
import { useState } from 'react';
import {
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../../components/Icon/Icon';
import benefits from '../../../../mockData/benefits';
import Button from "../../../../components/Button/Button";

function ProductDetail({ currentProduct }: any) {
  const { title, desc, price, images } = currentProduct;
  const [imageSelected, setImageSelected] = useState<number>(0);
  const [quantityAmount, setQuantityAmount] = useState<number>(1);

  const handleChangeHighlightedImage = (imageIndex: number) => {
    setImageSelected(imageIndex);
  }
  const handleMinusQuantityChange = () => {
    if (quantityAmount === 1) return;
    setQuantityAmount(quantityAmount - 1);
  }

  return (
    <div className="single-product-detail">
      <div className="product-image-list">
        <ul>
          {images.map((image: any, index: any) => {
            return (
              <li key={index} className="product-image-list-item" onClick={() => handleChangeHighlightedImage(index)}>
                <img src={image} alt={`product_image_${index}`} className={imageSelected === index ? "image-selected" : ""} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className="product-image-highlight">
        {images.map((image: any, index: any) => {
          return (
            <img key={index} src={image} alt={`product_image_${index}`} className={`image-highlight ${imageSelected === index ? "highlighted" : "transparent"}`} />
          )
        })}
      </div>

      <div className="product-description">
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="product-benefit-wrapper">
          <div className="product-benefit-icon">
            <Icon icon={benefits[0].icon} />
          </div>
          <div className="product-text-wrapper">
            <h5>FREE DELIVERY</h5>
          </div>
        </div>
        <p className="product-price">{`$${price * quantityAmount}.00`}</p>
        <div className="product-quantity-selector">
          <div className="quantity-selector-wrapper">
            Quantity:
            <div className="quantity-selector">
              <span className="plus-minus-button" onClick={handleMinusQuantityChange}>
                <Icon icon={faMinus} />
              </span>
              <span className="quantity-value">{quantityAmount}</span>
              <span className="plus-minus-button" onClick={() => setQuantityAmount(quantityAmount + 1)}>
                <Icon icon={faPlus} />
              </span>
            </div>
          </div>
          <div className="product-addtocart-wrapper">
            <Button context="ADD TO CART" className="main-btn addtocart-responsive" />
          </div>
        </div>
      </div>

    </div>)
}

export default ProductDetail