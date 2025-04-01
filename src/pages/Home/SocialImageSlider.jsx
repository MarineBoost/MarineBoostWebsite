import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SocialImageSlider = ({ images }) => {
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
    <section
      className="social-slider"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        transition: "background-image 0.8s ease-in-out",
        position: "relative",
        marginTop:"5%"
      }}
    >
      {/* Left Arrow */}
      <button className="arrow left-arrow" onClick={handlePrev}>
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button className="arrow right-arrow" onClick={handleNext}>
        <FaArrowRight />
      </button>

      <div className="dots-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default SocialImageSlider;
