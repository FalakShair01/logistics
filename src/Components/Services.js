import React from "react";
import PickMeals from "../Assets/fcl.png";
import ChooseMeals from "../Assets/lcl.png";
import DeliveryMeals from "../Assets/d2.png";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const workInfoData = [
    {
      image: PickMeals,
      title: "FCL",
      text: "Ocean Container Shipping Rate Calculator",
      link: "/fcl"
    },
    {
      image: ChooseMeals,
      title: "LCL",
      text: "Ocean LCL Shipping Calculator",
      link: "/lcl"
    },
    {
      image: DeliveryMeals,
      title: "International",
      text: "International Moving Shipping Calculator",
      link: "/internation"
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading" style={{textAlign:"center"}}>International Shipping Services Calculators</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} onClick={() => navigate(data.link)}>
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

export default Service;
