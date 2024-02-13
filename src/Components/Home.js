import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/back.jpg";
import Navbar from "./Navbar";
import { FaPlaneDeparture } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          International Shipping Services Freight Calculator
          </h1>
          <p className="primary-text">
          Global Shipping Services Since 1991
          </p>
          <div style={{display: "flex"}}>
          <button className="secondary-button">
            Sea <GiCargoShip />{" "}
          </button>
          <button className="secondary-button" style={{marginLeft:"20px"}}>
            Air <FaPlaneDeparture />{" "}
          </button>
          </div>
        </div>
        <div className="home-image-section"> 
          <img src={BannerImage} alt="" style={{borderRadius:"2rem"}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
