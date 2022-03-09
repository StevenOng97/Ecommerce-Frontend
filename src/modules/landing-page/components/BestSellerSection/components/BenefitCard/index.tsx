import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import FaIcon from '../../../../../../components/FaIcon/FaIcon';

const BenefitCard = ({ card }: any) => {
  const { title, icon, text } = card;

  return (
    <div className="benefit-card d-flex align-items-center">
      <div className="icon-wrapper">
        <FaIcon icon={icon} className="icon" />
      </div>
      <div className="text-wrapper">
        <h6>{title}</h6>
        <p className="text-secondary">{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;