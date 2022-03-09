import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import './style.scss';
import './responsive.scss';
import Icon from '../../../../components/Icon/Icon';

interface contactInterface {
  name: string;
  url: string;
}

interface socialIconInterface {
  name: string;
  icon: IconDefinition;
  url: string;
}
const Footer = () => {
  const contact: contactInterface[] = [
    {
      name: 'Blog',
      url: '',
    },
    {
      name: 'FAQs',
      url: '',
    },
    {
      name: 'Contact us',
      url: '',
    },
  ];

  const socialIcon: socialIconInterface[] = [
    {
      name: 'facebook',
      icon: faFacebook,
      url: '',
    },
    {
      name: 'twitter',
      icon: faTwitter,
      url: '',
    },
    {
      name: 'instagram',
      icon: faInstagram,
      url: '',
    },
    {
      name: 'Skype',
      icon: faLinkedin,
      url: '',
    },
  ];
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="contact-wrapper">
          <ul className="contact-list">
            {contact.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-icon-wrapper">
          <ul className="social-icon-list">
            {socialIcon.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    <Icon icon={item.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="copyright-wrapper container">
        ©2018 All Rights Reserved. This project is made by
        <span className="highlight"> Dust </span> &
        <span className="highlight"> StevenOng</span>
      </div>
    </div>
  );
};
export default Footer;
