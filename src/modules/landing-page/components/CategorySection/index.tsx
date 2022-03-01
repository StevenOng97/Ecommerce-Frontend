import React, { useRef } from 'react';
import './style.scss';
import card1 from '../../../../assets/card3.jpg';
import card2 from '../../../../assets/card2.jpg';
import card3 from '../../../../assets/card1.jpg';
import ZoomInCard from '../../../../components/ZoomInCard';
import { Card } from '../../../../interface/Card';
import useOnScreen from '../../../../hooks/UseOnScreen';

const Category = ({ cardAction }: any) => {
  const containerRef: any = useRef(null);

  const onScreen = useOnScreen(containerRef, '-200px', 0.1);
  const Cards: Card[] = [
    {
      label: "WOMEN'S",
      image: card1,
      action: () => cardAction('women'),
    },
    {
      label: "ACCESSORIES'S",
      image: card2,
      action: () => cardAction('accessory'),
    },
    {
      label: "MENS'S",
      image: card3,
      action: () => cardAction('men'),
    },
  ];

  const renderCard = (): JSX.Element[] => {
    return Cards.map((card, i) => {
      return <ZoomInCard card={card} key={i} />;
    });
  };

  const className = onScreen
    ? 'category__section section animated'
    : 'category__section section';

  return (
    <div className={className} ref={containerRef}>
      <div className="container d-flex w-100">{renderCard()}</div>
    </div>
  );
};

export default Category;
