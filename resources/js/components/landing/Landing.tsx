import { useState } from "react";
import Slider from "./Slider";
import './Landing.css';
import React from "react";

const Landing = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div id="home">
        <div className="content-left">
            <img
              className="absolute w-full inset-0 h-full object-cover object-center"
              src="images/landing_curve.png"
              alt="landing"
            />
            <div className="lg:flex items-center relative container mx-auto">
              <div role="contentinfo" className="w-full h-full">
                <p data-tablanding="0" className="primary-color uppercase text-2xl mb-4" style={{fontWeight:'900',fontSize:'50px',lineHeight:'50px',textAlign:'center'}}>
                  Our company gives great importance to
                </p>
                <h1 data-tablanding="0" className="primary-color text-4xl lg:text-6xl font-black mb-8" style={{textAlign:'center'}}>
                  quality at every stage of production and ensures
                </h1>
                <p data-tablanding="0" className="text-gray-800 font-regular mb-8">
                  To be a pioneering leader in the modern manufacture and be most advanced company
                  of Concrete finishing and and to be able to contribute
                  consistently in the best service for customers, the community and the
                  country's development. Reaching unparalleled levels of product quality and
                  maximum service efficiency through the successful application of the latest
                  technologies.
                </p>
              </div>

              <div className="slider-container w-full lg:w-1/3 p-8 relative z-10">
                <Slider />
              </div>
            </div>
        </div>
    </div>
  );
};

export default Landing;
