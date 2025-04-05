import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ecommerceImage from "../../utils/images/e-commerce-marketing.webp";
import { useEffect } from "react";

const ecommerceServices = [
  {
    title: "Marketplace Account Setup & Optimization",
    details: [
      "📌 Account Registration & Verification – Hassle-free setup on Amazon, eBay, Walmart, Flipkart & more.",
      "📌 Store Branding & Optimization – Optimized storefronts for brand visibility.",
      "📌 Category & Product Approval Assistance – Ensuring compliance with platform guidelines.",
      "📌 Tax & Payment Configuration – Smooth financial setup for payouts.",
    ],
  },
  {
    title: "Product Listing & Optimization",
    details: [
      "🛒 High-Quality Product Descriptions – SEO-driven, compelling, and detailed content.",
      "🛒 Keyword Research & Implementation – Enhanced discoverability on search results.",
      "🛒 HD Product Images & Videos – Professional images that attract buyers.",
      "🛒 A+ Content & Enhanced Brand Content (EBC) – Engaging visuals & brand storytelling.",
    ],
  },
  {
    title: "E-Commerce SEO & Search Visibility",
    details: [
      "🔍 Backend Keywords & Metadata Optimization – Improve search ranking.",
      "🔍 Competitor Analysis & Strategy – Stay ahead in your niche.",
      "🔍 SEO-Optimized Titles & Bullet Points – Increase product discoverability.",
    ],
  },
  {
    title: "Marketplace Advertising (PPC Management)",
    details: [
      "📢 Amazon Sponsored Ads (PPC) – Optimize bids, lower ACoS, and increase sales.",
      "📢 eBay Promoted Listings – Get higher product ranking & exposure.",
      "📢 Walmart Sponsored Ads – Targeted ads for better marketplace reach.",
      "📢 Flipkart & Shopify Ads – Improve brand awareness and sales performance.",
      "📢 Retargeting & Display Ads – Reach potential customers and boost conversions.",
    ],
  },
  {
    title: "Order Management & Fulfillment Support",
    details: [
      "🚚 Inventory Tracking & Stock Management – Avoid overselling & stockouts.",
      "🚚 FBA (Fulfillment by Amazon) & FBM Assistance – Optimize fulfillment strategy.",
      "🚚 Order Processing & Returns Handling – Hassle-free customer service.",
    ],
  },
  {
    title: "Customer Service & Reputation Management",
    details: [
      "✔ Handling Customer Inquiries & Messages – 24/7 support.",
      "✔ Review & Feedback Monitoring – Maintain a positive seller rating.",
      "✔ Dispute & Claims Resolution – Protect your account from negative impacts.",
    ],
  },
  {
    title: "Performance Monitoring & Growth Strategy",
    details: [
      "📊 Sales Performance & Conversion Tracking – Improve profitability.",
      "📊 Monthly Reports & Insights – Optimize strategies for continuous growth.",
      "📊 Competitive Benchmarking – Outperform competitors in your category.",
    ],
  },
];

const EcommerceServices = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0); // Redirects to the top of the page on load
      }, []);

  return (
    <>
      <div className="text-center mb-4 position-relative" style={{ position: "relative" }}>
  <img
    src={ecommerceImage}
    alt="E-Commerce Services"
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
    <h2 className="fw-bold display-5">E-Commerce Marketplace Management</h2>
    <p>
    Selling on e-commerce marketplaces is a great way to grow your business. At Marine Boost, we simplify multi-platform management—like Amazon, eBay, Shopify, and more—helping you boost visibility, increase sales, and scale with ease.
  </p>
  </div>
</div>

<div className="container py-2">
        <h2 className="text-dark fw-semibold text-center">Our E-Commerce Marketplace Services</h2>
        <div className="row mt-4">
          {ecommerceServices.map((service, index) => (
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

export default EcommerceServices;
