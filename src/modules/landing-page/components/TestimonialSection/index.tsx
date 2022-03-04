import { FeedbackCard as FeedbackCardInterface } from '../../../../interface/Card';
import FeedbackCard from './components/FeedbackCard';
import feedbackCard from './mockData';
import Carousel from 'react-elastic-carousel';
import './style.scss';
import './responsive.scss';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../../../hooks/UseOnScreen';

const Testimonials = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
  ];

  const containerRef: any = useRef(null);

  const onMobileScreen = window.innerWidth <= 997;

  const onScreen = useOnScreen(containerRef, '-200px', 0.1);

  const data1: FeedbackCardInterface[] = feedbackCard.slice(0, 6);
  const data2: FeedbackCardInterface[] = feedbackCard.slice(6, 12);
  const data3: FeedbackCardInterface[] = feedbackCard.slice(
    12,
    feedbackCard.length
  );

  const finalData = [data1, data2, data3];

  const renderCard = (cardWrapper: FeedbackCardInterface[]): JSX.Element[] => {
    return cardWrapper.map((card, i) => {
      return <FeedbackCard card={card} key={i} />;
    });
  };

  const renderCardWrapper = (): JSX.Element[] => {
    if (onMobileScreen) {
      return renderMobileScreen();
    } else {
      return finalData.map((cardWrapper, i) => {
        return (
          <div className="card-wrapper d-flex flex-wrap" key={i}>
            {renderCard(cardWrapper)}
          </div>
        );
      });
    }
  };

  const renderMobileScreen = (): JSX.Element[] => {
    return renderCard(feedbackCard);
  };

  const className = onScreen
    ? 'carousel-wrapper mt-5 animated'
    : 'carousel-wrapper mt-5';

  return (
    <div className="testimonial__section section" ref={containerRef}>
      <div className="section-wrapper container">
        <h2 className="section-title">Testimonials</h2>
        <Carousel isRTL={false} breakPoints={breakPoints} className={className}>
          {renderCardWrapper()}
        </Carousel>
        {/* <div className="card-wrapper mt-5 d-flex flex-column flex-wrap">
          {renderCard()}
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
