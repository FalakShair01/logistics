import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Ocean Container Shipping Rates from USA</span>
          <span>Air Freight</span>
          <span>Ground Transportation</span>
          <span>Warehousing & Distribution</span>
          <span>Customs Clearance</span>
          <span>Testimonials</span>
          <span>Work</span>
           
        </div>
        <div className="footer-section-columns">
          <span>Tel: 1-803-884-5729</span>
          <span>info@riverrocklogistics.com</span>
          <span>STE 300-#9001</span>
          <span>Columbia, SC 29201</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Our Story</span>
          <span>Premium Club</span>
          <span>FAQ</span>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
