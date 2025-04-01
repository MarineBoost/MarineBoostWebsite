import React from 'react';
import donate_pic from '../../utils/images/balloons-charity-colorful-colourful.jpg';
import upi_qrcode from '../../utils/images/upi_amarjeet_qrcode.png';
import './Donate.css';
import { useState, useEffect } from "react";

import Loader from "../../pages/Loader/Loader";


const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Helping your business rank higher and get discovered by your target audience.',
  },
  {
    title: 'Pay-Per Click (PPC) Advertising',
    description: 'Driving targeted traffic with data-backed campaigns.',
  },
  {
    title: 'Web Design & Development',
    description: 'Building user-friendly websites that align with your brand and goals.',
  },
  {
    title: 'Graphic Design',
    description: 'Social Media Posts, Videos.',
  },
  {
    title: 'E-Commerce Market Places',
    description: 'Amazon, Flipkart, Meesho etc.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engaging and growing your online community with impactful social strategies.',
  },
  {
    title: 'Content Marketing',
    description: 'Crafting compelling content that informs, engages, and converts.',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Offering actionable insights to optimize your campaigns continuously.',
  },
];

const Donate = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {
        setData("Fetched Data");
        setLoading(false);
      }, 2000); 
    }, []);

  return (

    <>
      {loading ? <Loader /> :
      <div className="term-page-fluid">

      <div className='image_div1' style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            
              <h1 className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  padding: '10px', borderRadius: '5px' }}>OUR BUSINESS</h1>
            </div>
              <div className="services-container">
         
              <div className="services-grid">
             {services.map((service, index) => (
                <div key={index} className="service-card">
                <b><h3 className="service-title">{service.title}</h3>  </b>  
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
}
    </>
    
  );
}

export default Donate;




