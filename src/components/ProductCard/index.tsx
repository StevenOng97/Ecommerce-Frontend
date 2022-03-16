import './style.scss';
import './responsive.scss';
import Button from '../Button/Button';

import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProductCard = ({ card }: any) => {
  const {
    sale = '',
    isNew,
    priceAfterSale,
    price,
    title,
    images = [],
    action = () => { },
  } = card;

  const priceCardClass = priceAfterSale ? 'line-through' : 'price-after-sale';
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      className="product-card"
    >
      {(sale || isNew) && (
        <div
          className={`product-tag d-flex flex-column align-items-center ${isNew ? 'product-tag-new' : 'product-tag-sale'
            }`}>
          <span className="text-white">{isNew ? 'NEW' : `-${sale}`}</span>
        </div>
      )}
      <div className="image__overlay">
        <Button
          context="REVIEW ITEM"
          contextStyle="mb-0"
          className="btn main-btn"
          onClick={action}
        />
      </div>
      {images.length > 0 && <img src={images[0]} alt="product" className="product-card-image" />}
      <p className="fw-bold text-center truncate">{title}</p>
      <div className="price-wrapper d-flex justify-content-center">
        {priceAfterSale && (
          <span className="price-after-sale">${priceAfterSale}</span>
        )}
        <span className={priceCardClass}>${price}</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
