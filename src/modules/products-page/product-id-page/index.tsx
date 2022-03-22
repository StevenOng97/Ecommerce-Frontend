import "./style.scss"
import "./responsive.scss"
import Layout from '../../main-layout'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchProductsById } from '../../../redux/actions/products';
import Icon from '../../../components/Icon/Icon';
import benefits from '../../../mockData/benefits';
import {
  faMinus,
  faPlus,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import Button from "../../../components/Button/Button";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsData = useSelector((state: any) => state.products.products)
  const currentProduct = productsData.find((item: any) => item._id === id)
  const { title, price, images, desc, categories } = currentProduct

  useEffect(() => {
    dispatch(fetchProducts)
  }, []);

  // const currentProduct = useSelector((state: any) => state.products.product)
  // console.log(currentProduct)
  // const { title, price, images, desc, categories } = currentProduct

  // useEffect(() => {
  //   dispatch(fetchProductsById(id))
  // }, []);


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
    <Layout>
      <div className="container single-product-wrapper">
        <div className="directory-wrapper">
          <ul className="directory-list">
            <li className="directory-item">Home</li>
            <li className="directory-item">{categories}</li>
            <li className="directory-item">{title}</li>
          </ul>
        </div>
        <div className="single-product-detail">
          <div className="product-image-list">
            <ul>
              {currentProduct.images.map((image: any, index: any) => {
                return (
                  <li key={index} className="product-image-list-item" onClick={() => handleChangeHighlightedImage(index)}>
                    <img src={image} alt={`product_image_${index}`} className={imageSelected === index ? "image-selected" : ""} />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="product-image-highlight">
            {/* <img src={images[imageSelected]} alt={`product_image_${imageSelected}`} /> */}
            {currentProduct.images.map((image: any, index: any) => {
              return (
                <img src={image} alt={`product_image_${index}`} className={`image-highlight ${imageSelected === index ? "highlighted" : "transparent"}`} />
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
        </div>
      </div>
    </Layout>
  )
}

export default Product