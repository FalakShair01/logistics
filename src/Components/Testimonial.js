import React from "react";
import test1 from '../Assets/test1.png';
import test2 from '../Assets/test2.png';
import test3 from '../Assets/test3.png';
import test4 from '../Assets/test4.png';

const Testimonial = () => {
    const workInfoData = [
      {
        image: test1,
        title: "Shipping Worldwide Solutions",
      },
      {
        image: test2,
        title: "Logistics",
      },
      {
        image: test3,
        title: "Savings",
      },
      {
        image: test4,
        title: "Reliability"
      }
    ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">What We Do</p>
        <h1 className="primary-heading" style={{textAlign:"center"}}>Automatic Air Ocean Freight Calculator Solutions</h1>
        <p className="primary-text" >
        Automatic International Freight Calculators designed to save you time and money on all your international shipping needs.  Air and Ocean Container Rates posted worldwide
        </p>
      </div>
   
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div key={data.title} style={{width:"300px",textAlign:"center"}}>
            <div>
              <img src={data.image} alt="" style={{textAlign:"center"}}/>
            </div>
            <p style={{textAlign:"center"}}>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
