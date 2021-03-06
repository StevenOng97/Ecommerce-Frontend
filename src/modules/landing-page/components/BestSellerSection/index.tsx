import './style.scss';
import './responsive.scss';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import ProductCard from '../../../../components/ProductCard';
import { modifyImagesArray } from '../../../../constants/helpers';
import BenefitCard from '../../../../components/BenefitCard';
import benefits from '../../../../mockData/benefits';
import useOnScreen from '../../../../hooks/UseOnScreen';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
];

const BestSellerSection = ({ getItemToCart }: any) => {
  const productsFromApi = useSelector((state: any) => state.products.products);
  const [products, setProducts] = useState<any[]>([]);
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

  const containerRef: any = useRef(null);
  const onMobileScreen = window.innerWidth <= 997;
  const rootMargin = onMobileScreen ? '0px' : '-200px';
  const onScreen = useOnScreen(containerRef, rootMargin, 0.1);

  const renderProduct = (): JSX.Element[] => {
    return products.map((product: any, i: any) => {
      return <ProductCard card={product} key={i} />;
    });
  };

  const renderBenefits = (): JSX.Element[] => {
    return benefits.map((benefit, i) => {
      return <BenefitCard card={benefit} key={i} />;
    });
  };

  const className = onScreen ? 'content-wrapper animated' : 'content-wrapper';

  return (
    <div className="best-seller__section section">
      <div className="container">
        <h2 className="section-title">Best Sellers</h2>

        <div className={className} ref={containerRef}>
          <Carousel isRTL={false} breakPoints={breakPoints} className="mt-5">
            {renderProduct()}
          </Carousel>

          <div className="delivery-area d-flex mt-5">{renderBenefits()}</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
