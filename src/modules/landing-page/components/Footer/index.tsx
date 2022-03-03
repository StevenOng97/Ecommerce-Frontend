import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaseball,
  faBed,
  faBeer,
  faBell,
  faBlender,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import './responsive.scss';

interface contactInterface {
  name: string,
  url: string,
}

interface socialIconInterface{
  name: string,
  icon: IconDefinition,
  url: string,
}
const Footer = () => {
  const contact: contactInterface[] = [
    {
      name:"Blog",
      url:"",
    },
    {
       name:"FAQs",
       url:"",
    },
    {
        name: "Contact us",
        url: "",
    }];
     
  const socialIcon : socialIconInterface[] = [
    {
      name: "facebook",
      icon: faBaseball,
      url:"",
    },
    {
      name: "twitter",
      icon: faBed,
      url:"",

    },
    {
      name: "instagram",
      icon: faBeer,
      url:"",

    },
    {
      name: "Skype",
      icon: faBell,
      url:"",

    },
    {
      name: "Pinterest",
      icon: faBlender,
      url:"",

    }
  ]
  return (
      <>
        <div className="footer-wrapper">

          <div className="contact-wrapper">
        <ul className="contact-list">
          {contact.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            )
          })}
        </ul>
          </div>
          <div className="social-icon-wrapper">
            <ul className="social-icon-list">
              {socialIcon.map((item,index) => {
                return (
                  <li key={index}>
                    <a href={item.url}><FontAwesomeIcon icon={item.icon}/></a>
                  </li>
                )
              })}
            </ul>
          </div>
          </div>
          <div className="copyright-wrapper">
          ©2018 All Rights Reserved. This project is made by <span className="highlight">Dust</span> & <span className="highlight">StevenOng</span>
          </div>
      </>
      
  )
  }
export default Footer;
