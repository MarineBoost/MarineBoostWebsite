import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GallerySection = () => {
    function importAll(r) {
        return r.keys().map((key) => {
          const fileName = key.replace('./', '').replace(/\.(jpg|png)$/, '');
      
      
          const formattedTitle = fileName
            .replace(/[_-]/g, ' ') 
            .replace(/\b\w/g, (char) => char.toUpperCase()); 
      
          return {
            src: r(key),
            title: formattedTitle,
          };
        });
      }
      
      const images = importAll(require.context('../../utils/images/galley_section', false, /\.(jpg|png)$/));

   
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          arrows
        //   showDots
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="p-2"
              style={{ textAlign: "center" }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              {img.title && (
                <h5 className="mt-3" style={{ fontWeight: "600", color: "#fff" }}>
                  {/* {img.title} */}
                </h5>
              )}
            </div>
          ))}
        </Carousel>
   
  
  );
};

export default GallerySection;
