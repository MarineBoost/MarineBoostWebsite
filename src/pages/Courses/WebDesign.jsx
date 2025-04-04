import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import webDesignImage from "../../utils/images/computer-science-course.jpg"; 

const services = [
  {
    title: "Custom Website Design",
    details: [
      "Modern & Aesthetic – Clean, professional, and brand-aligned designs.",
      "User-Friendly – Intuitive navigation for a seamless experience.",
      "Responsive & Mobile-Optimized – Perfect on all devices.",
      "SEO-Optimized – Designed to rank higher on search engines.",
    ],
  },
  {
    title: "Website Development (Front-End & Back-End)",
    details: [
      "HTML, CSS, JavaScript, React, Vue.js (Front-End).",
      "PHP, Python, Node.js, Laravel (Back-End).",
      "CMS Platforms: WordPress, Shopify, Magento, WooCommerce.",
    ],
  },
  {
    title: "E-Commerce Website Development",
    details: [
      "Shopify, WooCommerce, Magento, and Custom E-Commerce Development.",
      "Product Page Optimization & Secure Checkout.",
      "Payment Gateway Integration (PayPal, Stripe, etc.).",
      "Inventory & Order Management System.",
    ],
  },
  {
    title: "WordPress Website Development",
    details: [
      "Custom Themes & Plugins.",
      "SEO & Speed Optimization.",
      "Secure & Scalable Architecture.",
    ],
  },
  {
    title: "Web Application Development",
    details: [
      "React, Angular, Vue.js for interactive UI.",
      "Node.js, Django, Flask for backend development.",
      "API & Database Integration.",
    ],
  },
  {
    title: "UI/UX Design & User Experience Optimization",
    details: [
      "Wireframing & Prototyping.",
      "Mobile-First Design.",
      "Fast Loading Speed & Performance Optimization.",
      "Call-to-Action (CTA) Strategy for Higher Conversions.",
    ],
  },
  {
    title: "Website Redesign & Revamp",
    details: [
      "Modernize outdated websites with a fresh design.",
      "Improve user experience and site performance.",
    ],
  },
  {
    title: "SEO & Performance Optimization",
    details: [
      "Fast & Secure – Optimized for speed & performance.",
      "SEO-Ready – Implementing best SEO practices for search rankings.",
      "Mobile-Friendly – Adaptive for all screen sizes.",
    ],
  },
  {
    title: "Website Maintenance & Support",
    details: [
      "Bug Fixes & Security Updates.",
      "Content & Plugin Updates.",
      "Performance & Speed Optimization.",
    ],
  },
];

const WebDesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Redirects to the top of the page on load
  }, []);

  return (
    <>
      <div className="text-center mb-4">
        <img src={webDesignImage} alt="Web Design Services" className="img-fluid rounded shadow-lg w-100" style={{ maxHeight: "400px", objectFit: "cover" }} />
      </div>
      <div className="container py-2">
        <div className="mb-5">
          <h1 className="fw-bold text-dark">Web Design & Development Services</h1>
          <p className="lead">Build a Stunning, High-Performing Website with Marine Boost</p>
          <p>
            Your website is the digital face of your brand. At Marine Boost, we specialize in custom web design and development
            to create stunning, user-friendly, and high-converting websites tailored to your business needs.
          </p>
        </div>

        <h2 className="text-dark fw-semibold text-center">Our Web Design & Development Services</h2>
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

export default WebDesign;
