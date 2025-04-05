import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import socialMediaImage from "../../utils/images/digital_marketing_services.webp";
import { useEffect } from "react";

const services = [
  {
    title: "Social Media Strategy & Planning",
    details: [
      "Competitor & Industry Analysis",
      "Platform Selection (Facebook, Instagram, LinkedIn, etc.)",
      "Content Calendar & Posting Schedule",
      "Engagement & Growth Strategies",
    ],
  },
  {
    title: "Social Media Management",
    details: [
      "Daily Posting & Scheduling – High-quality content, optimized for each platform.",
      "Community Engagement – Replying to comments & messages to build trust.",
      "Hashtag Research – Maximizing reach & discoverability.",
      "Performance Monitoring – Tracking growth & engagement.",
    ],
  },
  {
    title: "Content Creation & Graphic Design",
    details: [
      "Custom Graphics & Social Media Posts",
      "Branded Images & Infographics",
      "Reels, TikTok Videos & GIFs",
      "Engaging Captions & Copywriting",
    ],
  },
  {
    title: "Social Media Advertising (Paid Campaigns)",
    details: [
      "Facebook & Instagram Ads – Drive leads & sales with highly targeted campaigns.",
      "LinkedIn Ads – B2B marketing for professionals & businesses.",
      "TikTok & Snapchat Ads – Engage younger audiences with video ads.",
      "YouTube Ads – Promote video content & boost brand awareness.",
      "Retargeting & Remarketing – Re-engage website visitors & previous customers.",
    ],
  },
  {
    title: "Influencer Marketing & Brand Collaborations",
    details: [
      "Influencer Outreach & Collaboration",
      "Sponsored Posts & Product Reviews",
      "Affiliate Marketing Campaigns",
    ],
  },
  {
    title: "Social Media Analytics & Reporting",
    details: [
      "Real-Time Data & Insights",
      "Monthly Performance Reports",
      "ROI Analysis & Recommendations",
    ],
  },
];

const SocialMedia = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Redirects to the top of the page on load
      }, []);

  return (
    <>
 <div className="text-center mb-4 position-relative" style={{ position: "relative" }}>
  <img
    src={socialMediaImage}
    alt="Social Media Marketing"
    className="img-fluid rounded shadow-lg w-100"
    style={{ maxHeight: "600px", objectFit: "cover" }}
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
    <h2 className="fw-bold display-5">Social Media Marketing (SMM)</h2>
    <p className="lead">Boost Engagement, Build Your Brand & Drive Conversions</p>
  </div>
</div>

<div className="container py-2">
  <h1 className="fw-bold text-dark">Social Media Marketing (SMM) Services</h1>
  <p className="lead">Boost Engagement, Build Your Brand & Drive Conversions</p>
  <p>
    In today’s digital world, social media is the key to brand success. At Marine Boost, we provide expert social media marketing services to help businesses increase brand awareness, engage their audience, and drive sales. Whether you're looking to grow your followers, generate leads, or increase website traffic, our data-driven social media strategies ensure your business stays ahead of the competition.
  </p>



        <h2 className="text-dark fw-semibold text-center">Our Social Media Marketing Services</h2>
        <div className="row mt-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <h3 className="text-dark">{index + 1}. {service.title}</h3>
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
      </div>
    </>
  );
};

export default SocialMedia;
