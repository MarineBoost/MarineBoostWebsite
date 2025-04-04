import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import seoImage from "../../utils/images/seo.jpeg"; // SEO image

const services = [
  {
    title: "SEO Audit & Strategy Development",
    details: ["Technical SEO Issues", "Keyword Analysis", "Competitor Research", "Content Gaps"],
  },
  {
    title: "Keyword Research & Strategy",
    details: ["Short-Tail & Long-Tail Keywords", "Local & Global Keywords", "Industry-Specific Keywords"],
  },
  {
    title: "On-Page SEO Optimization",
    details: [
      "Meta Titles & Descriptions",
      "Header Tag Optimization (H1, H2, H3)",
      "Internal Linking Strategy",
      "URL Structure Optimization",
      "Image SEO & Alt Tags",
    ],
  },
  {
    title: "Technical SEO & Website Optimization",
    details: [
      "Page Speed Optimization",
      "Mobile-Friendliness & Responsiveness",
      "Structured Data Markup (Schema)",
      "XML Sitemap & Robots.txt Setup",
      "Fixing Broken Links & Crawl Errors",
    ],
  },
  {
    title: "Content Marketing & SEO Copywriting",
    details: ["Blog Posts & Articles", "Product Descriptions", "Landing Pages & Website Copy", "Press Releases"],
  },
  {
    title: "Link Building & Off-Page SEO",
    details: ["High-Quality Guest Posts", "Business Directories & Citations", "Influencer & Blogger Outreach", "Social Media & PR Links"],
  },
  {
    title: "Local SEO & Google My Business (GMB) Optimization",
    details: [
      "📍 Google My Business Setup & Optimization",
      "📍 Local Keyword Targeting",
      "📍 Citation Building & NAP Consistency",
      "📍 Customer Reviews & Reputation Management",
    ],
  },
  {
    title: "E-Commerce SEO (For Online Stores)",
    details: [
      "🛍️ Product Page Optimization",
      "🛍️ Category Page SEO",
      "🛍️ Schema Markup for Rich Snippets",
      "🛍️ Conversion Rate Optimization",
    ],
  },
  {
    title: "Voice Search & AI-Based SEO",
    details: [
      "With the rise of voice search (Alexa, Google Assistant, Siri), we optimize content for conversational queries and AI-driven searches.",
    ],
  },
  {
    title: "Analytics, Reporting & Performance Tracking",
    details: [
      "📊 Keyword Rankings",
      "📊 Organic Traffic & Engagement",
      "📊 Conversion Rates",
      "📊 Backlink Growth",
    ],
  },
];

const Seo = () => {
  return (
<>
      {/* SEO Image */}
      <div className="text-center mb-12">
        <img src={seoImage} alt="SEO Services" className="img-fluid rounded shadow-lg w-100" style={{ maxHeight: "400px", objectFit: "cover" }} />
      </div>

      {/* SEO Header & Description */}
      <div className="text-center bg-light p-5 rounded shadow-sm">
        <h1 className="fw-bold text-primary mb-3">Search Engine Optimization (SEO)</h1>
        <p className="lead">Maximize Your Online Presence with Marine Boost’s SEO Services</p>
        <p className="text-muted">
          In today's digital world, SEO is the key to driving organic traffic, increasing brand visibility, and improving sales conversions.
          At Marine Boost, we provide data-driven SEO strategies that help businesses rank higher on search engines like Google, Bing, and Yahoo.
        </p>
      </div>

      {/* Why SEO Matters */}
      <h2 className="text-primary fw-semibold text-center mt-3">Why SEO Matters for Your Business?</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="list-group list-group-flush shadow-sm bg-white p-4 rounded">
            <li className="list-group-item">💡 <strong>Increased Visibility</strong> – Rank higher and attract more potential customers.</li>
            <li className="list-group-item">💰 <strong>Cost-Effective Marketing</strong> – Generate long-term, organic traffic.</li>
            <li className="list-group-item">📈 <strong>Higher Conversion Rates</strong> – Reach the right audience and boost your sales.</li>
            <li className="list-group-item">🏆 <strong>Brand Authority</strong> – Establish your business as a trusted industry leader.</li>
          </ul>
        </div>
      </div>
      
      {/* SEO Services */}
      <h2 className="text-primary fw-semibold text-center mt-3">Our SEO Services</h2>
      <div className="row mt-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
        
                <div className="card-body">
                  <h3 className="card-title text-primary">{index + 1}. {service.title}</h3>
                  <ul className="list-unstyled mt-2">
                    {service.details.map((detail, i) => (
                      <li key={i}>✅ {detail}</li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
 </>
  );
};

export default Seo;
