import './style.scss';
import './responsive.scss';
import Button from '../Button/Button';
const ProductCard = ({ card }: any) => {
  const {
    sale = '',
    isNew,
    priceAfterSale,
    price,
    label,
    image,
    action = () => { },
  } = card;

  const priceCardClass = priceAfterSale ? 'line-through' : 'price-after-sale';
  return (
    <div className="product-card">
      {(sale || isNew) && (
        <div
          className={`product-tag d-flex flex-column align-items-center ${isNew ? 'product-tag-new' : 'product-tag-sale'
            }`}
        >
          <span className="text-white">{isNew ? 'NEW' : `-${sale}`}</span>
        </div>
      )}
      <div className="image__overlay">
        <Button
          context="REVIEW ITEM"
          contextStyle="mb-0"
          className="btn main-btn"
          onClick={action} />
      </div>
      <img src={image} alt="product" />
      <p className="fw-bold text-center truncate">{label}</p>
      <div className="price-wrapper d-flex justify-content-center">
        {priceAfterSale && (
          <span className="price-after-sale">${priceAfterSale}</span>
        )}
        <span className={priceCardClass}>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
