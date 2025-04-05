import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ppcImage from "../../utils/images/seo.jpeg"; 
import { useEffect } from "react";


const services = [
  {
    title: "Google Ads Management",
    details: [
      "Search Ads (Google Search) – Appear on top of Google’s search results.",
      "Display Ads – Visually appealing banners on websites.",
      "Shopping Ads – Promote e-commerce products.",
      "YouTube Ads – Engage audiences with video ads.",
      "Remarketing Ads – Retarget visitors who didn’t convert.",
    ],
  },
  {
    title: "Bing Ads Management",
    details: ["Expand beyond Google & tap into new markets.", "Lower competition & cost-effective results."],
  },
  {
    title: "Social Media Advertising",
    details: [
      "Facebook & Instagram Ads – Drive sales & leads.",
      "LinkedIn Ads – B2B targeting for professionals.",
      "TikTok & Snapchat Ads – Engage younger audiences.",
    ],
  },
  {
    title: "E-Commerce PPC Campaigns",
    details: [
      "PPC campaigns for Shopify, WooCommerce & Amazon.",
      "Maximize ROAS (Return on Ad Spend).",
    ],
  },
  {
    title: "PPC for Lead Generation",
    details: [
      "Generate high-quality leads for real estate, healthcare, finance, & more.",
      "Strategic targeting to maximize conversions.",
    ],
  },
  {
    title: "PPC Remarketing & Retargeting",
    details: [
      "Convert lost visitors into customers.",
      "Stay top-of-mind with potential buyers.",
    ],
  },
  {
    title: "Landing Page Optimization",
    details: [
      "Improve ad relevance & increase conversions.",
      "Reduce cost-per-click (CPC).",
    ],
  },
  {
    title: "PPC Audit & Competitor Analysis",
    details: [
      "Analyze keyword effectiveness & ad performance.",
      "Competitor strategies & budget allocation.",
    ],
  },
];

const Ppc = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Redirects to the top of the page on load
  }, []);
  
  return (
    <>
<div className="text-center mb-4 position-relative" style={{ position: "relative" }}>
  <img
    src={ppcImage}
    alt="PPC Services"
    className="img-fluid rounded shadow-lg w-100"
    style={{ maxHeight: "400px", objectFit: "cover" }}
  />
  <div
    className="position-absolute text-white d-flex flex-column justify-content-center align-items-center"
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      padding: "20px",
    }}
  >
    <h2 className="fw-bold display-5">Pay-Per-Click (PPC) Advertising</h2>
    <p>
          In today’s digital landscape, organic growth takes time. With Pay-Per-Click (PPC) advertising, you can
          instantly attract highly targeted traffic and boost conversions. At Marine Boost, we craft data-driven
          PPC campaigns that maximize your ROI.
        </p>
  </div>
</div>



  <div className="container py-2">
      <h2 className="text-primary fw-semibold">🚀 Why PPC?</h2>
      <div className="row justify-content mb-5">
        <div className="col-md-8">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Immediate visibility on search engines & social media.</li>
            <li className="list-group-item">✅ Targeted ads for high-intent customers.</li>
            <li className="list-group-item">✅ Flexible budgets—scale up or down as needed.</li>
            <li className="list-group-item">✅ Trackable & measurable results for better ROI.</li>
          </ul>
        </div>
      </div>

      {/* Our PPC Services */}
      <h2 className="text-primary fw-semibold text-center">Our PPC Advertising Services</h2>
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <h3 className="text-primary">{index + 1}. {service.title}</h3>
              <ul className="list-unstyled mt-2">
              {service.details.map((detail, i) => (
              
                  <li key={i} className="d-flex align-items-center mb-2">
                    <span className="me-2">✅</span>
                    <span className="fw-semibold text-dark">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Our PPC Process */}
      <h2 className="text-primary fw-semibold mt-5">Our PPC Process: How We Deliver Results</h2>
      <div className="row justify-content">
        <div className="col-md-8">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Step 1:</strong> Research & Strategy Development – Understanding your business, goals & competitors.</li>
            <li className="list-group-item"><strong>Step 2:</strong> Campaign Creation & Setup – Ad copywriting, landing page optimization & audience targeting.</li>
            <li className="list-group-item"><strong>Step 3:</strong> Campaign Management & Optimization – Performance tracking, bid adjustments & A/B testing.</li>
            <li className="list-group-item"><strong>Step 4:</strong> Reporting & Performance Analysis – Real-time insights & ongoing improvements.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Marine Boost? */}
      <h2 className="text-primary fw-semibold mt-5">Why Choose Marine Boost for PPC?</h2>
      <div className="row justify-content">
        <div className="col-md-8">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">💡 Certified PPC Experts – Google & Meta Ads certified professionals.</li>
            <li className="list-group-item">📊 Data-Driven Approach – Advanced analytics & AI-driven campaign management.</li>
            <li className="list-group-item">💰 ROI-Focused Strategies – Maximizing returns while reducing ad spend.</li>
            <li className="list-group-item">🔄 Continuous Optimization – Real-time adjustments for better performance.</li>
            <li className="list-group-item">📞 Dedicated Support – Personalized account management & 24/7 assistance.</li>
          </ul>
        </div>
      </div>
    </div>
      </>
  );
};

export default Ppc;
