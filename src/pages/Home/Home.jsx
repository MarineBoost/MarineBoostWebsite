import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCoursesImg from "../../utils/images/start-courses-img.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import BackgroundSlideshow from "./BackgroundSlideshow";
import { useLocation } from "react-router-dom";
import SocialImageSlider from "./SocialImageSlider";

const socialImages  = [
  require("../../utils/images/1.jpg"),
  require("../../utils/images/2.jpg"),
  require("../../utils/images/3.jpg"),
  require("../../utils/images/4.jpg"),
  require("../../utils/images/5.jpg"),
  require("../../utils/images/6.jpg"),
  require("../../utils/images/7.jpg"),
  require("../../utils/images/8.jpg"),
  require("../../utils/images/9.jpg"),
  require("../../utils/images/10.jpg"),



];


const homePageImages = [
  require("../../utils/images/home-page-header1.jpeg"),
  require("../../utils/images/home-page-header2.jpeg"),
  require("../../utils/images/home-page-header3.jpeg"),
];
function Home() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="home-page">

      <BackgroundSlideshow images={homePageImages} className="header h-100 min-vh-100 d-flex align-items-center text-light">
      <div className="container d-flex flex-column align-items-center mt-5">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">Marine Boost</h1>
          <p>
            At Marine Boost, we go beyond traditional digital marketing—we craft tailored strategies that drive real growth.
            Specializing in e-commerce, we leverage data-driven insights, innovative campaigns, and performance-focused solutions to
            help brands thrive in the digital space.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">Our Services</button>
            </Link>
            <Link to="/contact">
              <button type="button" className="btn btn-dark btn-lg mx-0 mx-sm-2 my-2 my-sm-0">Contact Us</button>
            </Link>
          </div>
        </div>
      </BackgroundSlideshow>
  
     <SocialImageSlider images={socialImages}  />

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">Marine Boost 2025: Elevate Your Digital Growth</h2>
              <p>
                Stay ahead in 2025 with Marine Boost, your trusted partner in data-driven digital marketing. From SEO and social media
                to PPC and content marketing, we craft tailored strategies that drive real results.
              </p>
              <Link to="/courses">
                <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">Learn More</button>
              </Link>
            </div>


            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCoursesImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default Home;
