import React from 'react';
import donate_pic from '../../utils/images/balloons-charity-colorful-colourful.jpg';
import upi_qrcode from '../../utils/images/upi_amarjeet_qrcode.png';
import './Donate.css';

const Donate = () => {
  return (
    <div className="term-page-fluid">
      {/* Donation Section */}
      <div className='image_div1'>
        <div className='center-containerr'></div>
      </div>
      {/* Concept in Business Section */}
      <div className="business-concept-section">
        <h2 className="business-title">CONCEPT IN BUSINESS</h2>
        <p className="business-description">
          In business, a concept refers to a foundational idea, principle, or framework that serves as the basis for creating, developing, and operating a product, service, or organization. It is essentially the "big idea" or vision that defines the purpose, direction, and value proposition of a business or venture. Concepts are crucial for innovation, differentiation, and the development of strategies that align with market needs and opportunities.
        </p>
        <ul className="business-list">
          <li>Product Concept</li>
          <li>Service Concept</li>
          <li>Business Model Concept</li>
          <li>Brand Concept</li>
        </ul>
      </div>
    </div>
  );
}

export default Donate;
