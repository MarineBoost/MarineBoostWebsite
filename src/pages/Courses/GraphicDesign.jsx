import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import graphicDesignImage from "../../utils/images/graphic_design.jpg";

const services = [
  {
    title: "Logo Design & Brand Identity",
    details: [
      "Custom Logo Design – Unique, creative, and brand-aligned logos.",
      "Brand Identity Development – Color schemes, typography, and design elements.",
      "Brand Guidelines – Ensure consistency across all platforms.",
    ],
  },
  {
    title: "Social Media Graphics & Marketing Materials",
    details: [
      "Facebook, Instagram & LinkedIn Post Graphics.",
      "YouTube Thumbnails & Channel Art.",
      "TikTok & Instagram Stories Graphics.",
      "Banners, Covers, and Ads.",
    ],
  },
  {
    title: "Business & Corporate Designs",
    details: [
      "Business Cards & Letterheads – Sleek, professional branding materials.",
      "Presentation Decks & Infographics – Data-driven visuals for better storytelling.",
      "Company Brochures & Flyers – Eye-catching promotional materials.",
    ],
  },
  {
    title: "Print & Promotional Design",
    details: [
      "Posters & Banners – High-quality prints for events & promotions.",
      "Flyers & Leaflets – Attention-grabbing marketing materials.",
      "Packaging Design – Creative packaging to enhance product appeal.",
    ],
  },
  {
    title: "E-Commerce & Product Design",
    details: [
      "Amazon & Shopify Product Graphics.",
      "Product Labels & Packaging Design.",
      "E-Commerce Ad Creatives.",
    ],
  },
  {
    title: "Website & UI/UX Design",
    details: [
      "Custom Website Banners & Hero Images.",
      "Landing Page & Web Page Designs.",
      "Mobile App & Web App UI Designs.",
    ],
  },
  {
    title: "Motion Graphics & Animated Designs",
    details: [
      "Logo Animations & Intro Videos.",
      "Social Media GIFs & Motion Graphics.",
      "Explainer Videos & Infographics.",
    ],
  },
];

const GraphicDesign = () => {
  return (
    <>
      <div className="text-center mb-4">
        <img src={graphicDesignImage} alt="Graphic Design Services" className="img-fluid rounded shadow-lg w-100" style={{ maxHeight: "600px", objectFit: "cover" }} />
      </div>
      <div className="container py-2">
        <div className="mb-5">
          <h1 className="fw-bold text-dark">Graphic Design Services</h1>
          <p className="lead">Creative, Impactful & Brand-Driven Designs by Marine Boost</p>
          <p>
            In today’s digital world, visual identity is everything. At Marine Boost, we craft stunning, high-quality, and impactful
            graphic designs that bring your brand to life. From logos to social media graphics and marketing materials, our expert designers
            create visually compelling designs that leave a lasting impression.
          </p>
        </div>

        <h2 className="text-dark fw-semibold text-center">Our Graphic Design Services</h2>
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

export default GraphicDesign;
