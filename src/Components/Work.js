import React from "react";
import PickMeals from "../Assets/fcl.png";
import ChooseMeals from "../Assets/lcl.png";
import DeliveryMeals from "../Assets/d2.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "FCL",
      text: "Ocean Container Shipping Rate Calculator",
    },
    {
      image: ChooseMeals,
      title: "LCL",
      text: "Ocean LCL Shipping Calculator",
    },
    {
      image: DeliveryMeals,
      title: "International",
      text: "International Moving Shipping Calculator",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading" style={{textAlign:"center"}}>International Shipping Services Calculators</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container" >
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
