import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BackgroundSlideshow = ({ images, children }) => {
  const [index, setIndex] = useState(0);

  // Auto change slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  // Function to handle next slide
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to handle dot click
  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <header
      className="home-page header"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        transition: "background-image 0.8s ease-in-out",
        position: "relative",
      }}
    >
      {children}


      {/* <button className="arrow left-arrow" onClick={handlePrev}>
        <FaArrowLeft />
      </button>

      <button className="arrow right-arrow" onClick={handleNext}>
        <FaArrowRight />
      </button> */}

      <div className="dots-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </header>
  );
};

export default BackgroundSlideshow;
