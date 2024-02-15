import React from "react";
import bgImage from "../Assets/th.jpeg";

const Whyfreight = () => {
  return (
    <div>

<div className="home-container">
    
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h4 className="primary-heading2">
          Why Freight-Calculator.Com?
          </h4>
          <p className="primary-text">
          We are experts in worldwide shipping services and our multi-language
          support team will do their best to satisfy your international
          shipping requirements.
          </p>
          <div style={{display: "flex"}}>
          <button className="secondary-button">
            Readmore {" "}
          </button>
         
          </div>
        </div>
        <div> 
          <img src = {bgImage} alt="" style={{borderRadius:"2rem", width: "650px"}}/>
      </div>
      </div>
    </div>
</div>
  );
};

export default Whyfreight;
