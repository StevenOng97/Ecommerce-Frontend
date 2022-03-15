import ProductCard from '../../../../components/ProductCard';
import { Card } from '../../../../interface/Card';
import CategoryCard from './components/CategoryCard';
import './style.scss';
import './responsive.scss';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../../../hooks/UseOnScreen';
import { useSelector } from 'react-redux';
import { modifyImagesArray } from '../../../../constants/helpers';

const NewArrivals = ({ cardAction, getItemToCart, currentFilter }: any) => {
  const containerRef: any = useRef(null);
  const [products, setProducts] = useState<any[]>([]);
  const productsFromApi = useSelector((state: any) => state.products.products);

  const onMobileScreen = window.innerWidth <= 997;
  const rootMargin = onMobileScreen ? '0px' : '-200px';
  const onScreen = useOnScreen(containerRef, rootMargin, 0.1);

  useEffect(() => {
    const imagesMapping = productsFromApi.map(
      (products: any) => products.images
    );
    const finalImages = imagesMapping.map((image: string[]) => {
      return modifyImagesArray(image);
    });

    const finalProduct = productsFromApi.map((product: any, i: any) => {
      return {
        ...product,
        images: finalImages[i],
        action: () => getItemToCart(product._id),
      };
    });

    setProducts(finalProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsFromApi]);

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
      value: 'accessories',
      action: () => cardAction('accessories'),
    },
    { label: "MEN'S", value: 'men', action: () => cardAction('men') },
  ];

  const renderCategoryCards = (): JSX.Element[] => {
    return categories.map((category, i) => {
      return (
        <CategoryCard
          categoryCard={category}
          key={i}
          currentFilter={currentFilter}
        />
      );
    });
  };

  const renderProduct = (): JSX.Element[] => {
    return products.map((product: any, i: any) => {
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
        <div className="fix-margin">
          <div className={className} ref={containerRef}>
            {renderProduct()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
