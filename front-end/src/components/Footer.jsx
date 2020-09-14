import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        <Link to={"/"}>
          <li className="footer__list--item">Home</li>
        </Link>

        <Link to="/about">
          <li className="footer__list--item">About Us</li>
        </Link>

        <Link to={"/contact"}>
          <li className="footer__list--item">Contact Us</li>
        </Link>
        <li className="footer__list--agreement">&copy; 2020 Rental Agency</li>
      </ul>

      <ul className="footer__icons">
        <li className="footer__icons--icon">
          {/* <i className="fab fa-facebook-square"></i> */}
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </li>
        <li className="footer__icons--icon">
          {/* <i className="fab fa-twitter-square"></i> */}
          <FontAwesomeIcon icon={['fab', 'twitter-square']} />
          </li>
        <li className="footer__icons--icon">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          {/* <i className="fab fa-instagram"></i> */}
          </li>
      </ul>
    </div>
  )
}
