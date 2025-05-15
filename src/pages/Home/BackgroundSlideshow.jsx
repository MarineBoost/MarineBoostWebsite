import React, { useEffect, useState } from "react";
import './bg.css';

const BackgroundSlideshow = ({ images, children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    
    <div className="container1" >   
  <div className="background-slideshow">
      <img src={images[index]} alt="" className="slideshow-img"  />

      {children}
    </div>
    </div>
  
  );
};

export default BackgroundSlideshow;
