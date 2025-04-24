import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BackgroundSlideshow = ({ images, children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);
 
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <header
      className="home-page header d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.35), rgba(5, 10, 35, 0.35)), url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        transition: "background-image 0.5s ease-in-out",
        position: "relative",
      }}
    >
      {/* Optional navigation buttons */}
      {/* 
      <button className="arrow left-arrow" onClick={handlePrev}>
        <FaArrowLeft />
      </button>
      <button className="arrow right-arrow" onClick={handleNext}>
        <FaArrowRight />
      </button> 
      */}

      {/* Slide indicator dots */}
      <div className="dots-container" style={{ position: "absolute", bottom: "15px", zIndex: 2 }}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>

      {/* ✨ This is where your overlaid content appears */}
      <div style={{ zIndex: 1, width: '100%' }}>
        {children}
      </div>
    </header>
  );
};

export default BackgroundSlideshow;

