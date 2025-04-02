import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SocialImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(window.innerWidth > 768 ? "50vh" : "30vh");

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

  // Update slider height based on window size
  useEffect(() => {
    const handleResize = () => {
      setSliderHeight(window.innerWidth > 768 ? "50vh" : "30vh");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="social-slider"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: sliderHeight, // Adjust height based on screen size
        transition: "background-image 0.8s ease-in-out",
        position: "relative",
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "100vw",
        objectFit: "cover",
      }}
    >
      {/* Left Arrow */}
      <button
        className="arrow left-arrow"
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "10px",
          fontSize: "1rem",
          background: "black",
          color: "white",
          padding: "5px",
       
          cursor: "pointer",
        }}
      >
        <FaArrowLeft />
      </button>

      <div
        className="dots-container"
        style={{
          position: "absolute",
          bottom: "10px",
          display: "flex",
          gap: "5px",
          marginTop:"5%"
        }}
      >
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: i === index ? "white" : "gray",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="arrow right-arrow"
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "10px",
          fontSize: "1rem",
          background: "black",
          color: "white",
          padding: "5px",

          cursor: "pointer",
        }}
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default SocialImageSlider;
