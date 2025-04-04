import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import analyticsImage from "../../utils/images/music-course.jpg";
import { useEffect } from "react";

const analyticsServices = [
  {
    title: "Website Analytics & Performance Tracking",
    details: [
      "📊 Google Analytics Setup & Monitoring – Track website traffic, user behavior & engagement.",
      "📊 User Journey & Heatmaps – Identify areas of interest and drop-off points.",
      "📊 Bounce Rate & Session Analysis – Understand why visitors leave and how to keep them engaged.",
      "📊 Conversion Rate Optimization (CRO) – Improve lead generation & sales performance.",
    ],
  },
  {
    title: "SEO Analytics & Keyword Performance",
    details: [
      "🔍 Keyword Ranking Reports – Monitor performance and optimize content.",
      "🔍 Backlink & Domain Authority Analysis – Track website authority growth.",
      "🔍 Competitor SEO Comparison – Analyze what’s working for competitors.",
      "🔍 Organic Traffic & Click-Through Rate (CTR) Insights – Boost visibility and engagement.",
    ],
  },
  {
    title: "Social Media Analytics & Insights",
    details: [
      "📱 Facebook, Instagram & LinkedIn Analytics – Understand post-performance and engagement.",
      "📱 Follower Growth & Engagement Reports – Optimize content for better reach.",
      "📱 Ad Performance Tracking – ROI-driven insights for paid campaigns.",
      "📱 Hashtag & Trend Analysis – Discover what’s driving social media success.",
    ],
  },
  {
    title: "PPC & Paid Advertising Reports",
    details: [
      "💰 Click-Through Rate (CTR) & Conversion Tracking – Optimize ad performance.",
      "💰 Cost-Per-Click (CPC) & Return on Ad Spend (ROAS) – Maximize ad efficiency.",
      "💰 Audience Demographics & Behavior Analysis – Target the right audience.",
      "💰 A/B Testing Results & Recommendations – Improve ad creatives and messaging.",
    ],
  },
  {
    title: "E-Commerce Analytics & Sales Reporting",
    details: [
      "🛒 Product Performance Reports – Track best-selling & underperforming products.",
      "🛒 Cart Abandonment & Checkout Insights – Reduce drop-offs and increase conversions.",
      "🛒 Customer Behavior & Retention Analysis – Understand repeat purchases & customer value.",
      "🛒 ROI Tracking for Marketing Campaigns – Measure the impact of promotions.",
    ],
  },
  {
    title: "Email Marketing Analytics & Campaign Reports",
    details: [
      "📧 Open Rate & Click Rate Analysis – Improve subject lines & content strategy.",
      "📧 Email List Growth & Segmentation Reports – Optimize targeting.",
      "📧 Lead Nurturing & Conversion Tracking – Enhance email automation & retargeting.",
    ],
  },
  {
    title: "Custom Dashboards & Automated Reports",
    details: [
      "📊 Google Data Studio & Power BI Dashboards – Real-time data visualization.",
      "📊 Automated Weekly & Monthly Reports – Track progress effortlessly.",
      "📊 Custom KPI Tracking – Focus on what matters most to your business.",
    ],
  },
];

const AnalyticsMedia = () => {
  return (
    <>
      <div className="text-center mb-4">
        <img src={analyticsImage} alt="Analytics & Reporting" className="img-fluid rounded shadow-lg w-100" style={{ maxHeight: "600px", objectFit: "cover" }} />
      </div>
      <div className="container py-2">
        <h1 className="fw-bold text-dark">Analytics & Reporting Services</h1>
        <p className="lead">Track, Analyze & Optimize for Maximum Performance</p>
        <p>
          Data-driven decisions lead to higher conversions, better ROI, and improved business growth. At Marine Boost, we provide comprehensive analytics & reporting services to help businesses track performance, measure success, and refine strategies for optimal results. Our expert team leverages the latest tools and insights to ensure you get accurate, actionable data that drives continuous improvement.
        </p>
        <h2 className="text-dark fw-semibold text-center">Our Analytics & Reporting Services</h2>
        <div className="row mt-4">
          {analyticsServices.map((service, index) => (
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

export default AnalyticsMedia;
