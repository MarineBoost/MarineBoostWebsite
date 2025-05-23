import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCoursesImg from "../../utils/images/start-courses-img.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import BackgroundSlideshow from "./BackgroundSlideshow";
import { useLocation } from "react-router-dom";
import SocialImageSlider from "./SocialImageSlider";
import { useState, useEffect } from "react";

import Loader from "../../pages/Loader/Loader";

const socialImages  = [
  require("../../utils/images/1-1.jpg"),
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

const importAll = (r) => r.keys().map(r);

const homePageImages = importAll(
  require.context("../../utils/images/digital_marketing/new_size", true, /\.(png|jpe?g|svg|webp|gif|avif|bmp)$/)
);

function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
  
    setTimeout(() => {
      setData("Fetched Data");
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <> 
    {loading ? <Loader /> :
    <div className="home-page">
      <BackgroundSlideshow
        images={homePageImages}
        className="header h-100 min-vh-100 d-flex align-items-center text-light position-relative"
      >

      <div className="overlay-text position-absolute text-center px-3 px-md-4">

        <h4 className="text-light mb-2 fs-6 fs-md-5">Welcome  To</h4>
        <h4 className="fw-bold text-light display-5 display-md-2">Marine Boost</h4>
        <p className="text-light mt-1 fs-6 fs-md-5">
        Boost your brand with smart, data-driven digital strategies.
        At Marine Boost, we power e-commerce growth through creativity and performance.
        </p>
      </div>


      </BackgroundSlideshow>


<center  style={{marginTop:"3%"}}><h2 >Working Platforms</h2> </center>

     <SocialImageSlider images={socialImages}  />

      <div className="py-1">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize"> Marine Boost 2025: Elevate Your Digital Growth</h2>
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

      <div className="py-2">
        <FaqAccordion />
      </div>
    </div>
    }
    </>
  );
}

export default Home;



