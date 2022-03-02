import './style.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeedbackCard = ({ card }: any) => {
  const renderStar = (): JSX.Element[] => {
    const totalStars = 5;

    return [...new Array(totalStars)].map((star: number, index) => {
      const className = card.star > index ? 'active-star star' : 'star';
      return <FontAwesomeIcon className={className} icon={faStar} key={index} />;
    });
  };

  return (
    <div className="feedback-card">
      <div className="star-wrapper d-flex mb-3 justify-content-center">{renderStar()}</div>
      <blockquote className="mb-3 truncate">{card.text}</blockquote>
      <div className="d-flex align-items-center mt-auto">
        <div className="avatar-wrapper me-3">
          <img src={card.avatar} className="avatar" alt="avatar" />
        </div>
        <div className="user-information-wrapper">
          <h6 className="user-name mb-0">{card.userName}</h6>
          <span className="user-job-title">{card.jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
