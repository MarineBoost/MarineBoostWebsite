import React from 'react';
import './term_condition.css';
import image_header from '../../utils/images/about-page-header.jpg'

const Term_condition = () => {
  return (

    <div className="term-page-fluid">
      <div className='image_div'>
      <div className='center-container'>
        <h1 className='text-center'>Terms and Conditions</h1> 
      </div>
    </div>
    <div className='terms' style={{ marginLeft: "11%" }}>
  <div className="text-black p-4">
    <h6 className="mt-4 text-black">1. Acceptance of Terms</h6>
    <p>By accessing this website, you agree to comply with and be bound by these terms and conditions. If you do not agree to all of these terms, you are prohibited from using or accessing this website. Please review these terms regularly as they may be updated from time to time.</p>

    <h6 className="mt-4 text-black">2. Website Content</h6>
    <p>The content provided on Marine Boost is for general informational purposes only. We reserve the right to modify, update, or discontinue any content, products, or services provided on this website without notice at any time.</p>

    <h6 className="mt-4 text-black">3. User Contributions</h6>
    <p>We encourage users to contribute to the website by leaving comments, suggestions, and participating in discussions. However, we reserve the right to monitor and remove any user-generated content that we deem inappropriate or in violation of our policies.</p>

    <h6 className="mt-4 text-black">4. Privacy Policy</h6>
    <p>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information when you visit and interact with the Marine Boost website. By using this site, you consent to the practices outlined in the Privacy Policy.</p>

    <h6 className="mt-4 text-black">5. Disclaimer</h6>
    <p>All information provided on the Marine Boost website is for general informational purposes only. We do not make any guarantees or warranties regarding the accuracy, reliability, or completeness of the information. The use of any information on this site is at your own risk.</p>

    <h6 className="mt-4 text-black">6. Changes to Terms</h6>
    <p>Marine Boost reserves the right to update, amend, or change these terms and conditions at any time without prior notice. By continuing to use the website, you agree to abide by the most recent version of these terms.</p>

    <h6 className="mt-4 text-black">7. Contact Us</h6>
    <p>If you have any questions or concerns regarding these terms and conditions, please feel free to <a href="/contact">contact us</a>.</p>
  </div>
</div>

    </div>
  );
};

export default Term_condition;
