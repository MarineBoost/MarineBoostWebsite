import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Seo = () => {
  return (
    <div className="container-fluid py-2 text-light">
      <div className="container bg-white text-dark p-5 rounded shadow-lg">
        <h1 className="text-center fw-bold text-primary mb-4">Search Engine Optimization (SEO) Services</h1>
        <p className="text-center mb-3">Maximize Your Online Presence with Marine Boost’s SEO Services</p>
        <p className="text-center mb-5">In today's digital world, SEO (Search Engine Optimization) is the key to driving organic traffic, increasing brand visibility, and improving sales conversions. At Marine Boost, we provide data-driven and result-oriented SEO strategies that help businesses rank higher on search engines like Google, Bing, and Yahoo.</p>
        
        <h2 className="text-primary fw-semibold">Why SEO Matters for Your Business?</h2>
        <ul className="list-group list-group-flush mb-5">
          <li className="list-group-item">💡 <strong>Increased Visibility</strong> – Rank higher on search engines and attract more potential customers.</li>
          <li className="list-group-item">💰 <strong>Cost-Effective Marketing</strong> – Generate long-term, organic traffic without high advertising costs.</li>
          <li className="list-group-item">📈 <strong>Higher Conversion Rates</strong> – Reach the right audience and boost your sales.</li>
          <li className="list-group-item">🏆 <strong>Brand Authority</strong> – Establish your business as a trusted industry leader.</li>
        </ul>
        
        <h2 className="text-primary fw-semibold">Our SEO Services</h2>
        <div className="row mt-4">
          {[
            {
              title: "SEO Audit & Strategy Development",
              details: ["Technical SEO Issues", "Keyword Analysis", "Competitor Research", "Content Gaps"]
            },
            {
              title: "Keyword Research & Strategy",
              details: ["Short-Tail & Long-Tail Keywords", "Local & Global Keywords", "Industry-Specific Keywords"]
            },
            {
              title: "On-Page SEO Optimization",
              details: ["Meta Titles & Descriptions", "Header Tag Optimization (H1, H2, H3)", "Internal Linking Strategy", "URL Structure Optimization", "Image SEO & Alt Tags"]
            },
            {
              title: "Technical SEO & Website Optimization",
              details: ["Page Speed Optimization", "Mobile-Friendliness & Responsiveness", "Structured Data Markup (Schema)", "XML Sitemap & Robots.txt Setup", "Fixing Broken Links & Crawl Errors"]
            },
            {
              title: "Content Marketing & SEO Copywriting",
              details: ["Blog Posts & Articles", "Product Descriptions", "Landing Pages & Website Copy", "Press Releases"]
            },
            {
              title: "Link Building & Off-Page SEO",
              details: ["High-Quality Guest Posts", "Business Directories & Citations", "Influencer & Blogger Outreach", "Social Media & PR Links"]
            }
          ].map((service, index) => (
            <div key={index} className="col-md-6 mb-4">
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
      </div>
    </div>
  );
};

export default Seo;
