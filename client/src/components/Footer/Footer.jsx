import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to e-store, the ultimate online shopping destination. We are
            a team of skilled developers who create amazing and easy-to-use
            solutions for you. We also provide fast and secure delivery, easy
            returns, and great customer service. We are e-store, powered by
            deviant.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            We would love to hear from you. If you have any questions,
            suggestions, or feedback, please feel free to contact us using any
            of the following methods: 
            Phone: +12173288 sonarfarouq@gmail.com  john.doe@twitter.com @kingDevs
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">E-store</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
