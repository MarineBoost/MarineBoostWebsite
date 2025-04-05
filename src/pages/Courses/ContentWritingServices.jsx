import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import contentMarketingImage from "../../utils/images/content_marketing_services.webp";
import { useEffect } from "react";

const contentServices = [
  {
    title: "Blog & Article Writing",
    details: [
      "SEO-Optimized Blog Posts – Keyword-rich content to rank higher on Google.",
      "Industry-Specific Articles – Expert insights to position your brand as a leader.",
      "Listicles, How-To Guides & Case Studies – Engaging formats that attract readers.",
    ],
  },
  {
    title: "Website Content Writing",
    details: [
      "Homepage & About Us Content – Tell your brand story effectively.",
      "Product & Service Descriptions – Persuasive copy to increase sales.",
      "Landing Page Copywriting – High-converting CTAs for better lead generation.",
    ],
  },
  {
    title: "SEO Content Writing",
    details: [
      "Keyword Research & Implementation – Targeted keywords for better ranking.",
      "On-Page SEO Optimization – Optimized headings, meta descriptions & URLs.",
      "Evergreen & Pillar Content – Long-form, valuable content that drives ongoing traffic.",
    ],
  },
  {
    title: "Social Media Content Creation",
    details: [
      "Captivating Social Media Captions – Drive likes, shares & interactions.",
      "Infographics & Visual Content – Easy-to-digest graphics that boost engagement.",
      "Reels, Shorts & TikTok Scripts – Video content strategies that go viral.",
    ],
  },
  {
    title: "Email Marketing & Newsletters",
    details: [
      "Personalized Email Campaigns – Build stronger relationships with your audience.",
      "Newsletters & Drip Campaigns – Keep customers updated with valuable insights.",
      "Promotional & Offer Emails – Drive sales with compelling copy.",
    ],
  },
  {
    title: "Video Script Writing",
    details: [
      "Explainer Video Scripts – Clear, concise, and informative content.",
      "YouTube Video Scripts – Engaging and SEO-optimized for better reach.",
      "Ad & Promotional Video Scripts – High-converting storytelling.",
    ],
  },
  {
    title: "E-Books & Whitepapers",
    details: [
      "E-Books & Guides – In-depth, value-packed content for lead generation.",
      "Whitepapers & Case Studies – Industry reports and success stories.",
      "PDF Brochures & Reports – Professionally designed documents.",
    ],
  },
  {
    title: "Press Releases & PR Content",
    details: [
      "Company Announcements – New product launches & business updates.",
      "PR Articles & Guest Posts – Establish your presence in top publications.",
      "Event & Partnership Announcements – Get noticed in your industry.",
    ],
  },
];

const ContentMedia = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0); // Redirects to the top of the page on load
    }, []);
    
  return (
    <>
  <div className="text-center mb-4 position-relative" style={{ position: "relative" }}>
  <img
    src={contentMarketingImage}
    alt="Content Marketing"
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
      textAlign: "center",
    }}
  >
    <h2 className="fw-bold display-5">Content Marketing</h2>
    <p >At Marine Boost, we craft SEO-optimized, engaging content that builds trust, boosts visibility, and drives conversions—across blogs, websites, emails, and social media.</p>
  </div>
</div>


      <div className="container py-2">
       
        <h2 className="text-dark fw-semibold text-center">Our Content Marketing Services</h2>
        <div className="row mt-4">
          {contentServices.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <h3 className="text-dark">{index + 1}. {service.title}</h3>
                <ul className="list-unstyled mt-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="d-flex align-items-start mb-2">
                      <span className="me-2 fs-5 text-success">✔</span>
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

export default ContentMedia;
