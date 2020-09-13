import React from 'react';
import { Link } from 'react-router-dom';

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
        <li className="footer__list--agreement">&copy; 2019 Toronto Rental Agency</li>
      </ul>

      <ul className="footer__icons">
        <li className="footer__icons--icon"><i className="fab fa-facebook-square"></i></li>
        <li className="footer__icons--icon"><i className="fab fa-twitter-square"></i></li>
        <li className="footer__icons--icon"><i className="fab fa-instagram"></i></li>
      </ul>
    </div>
  )
}
