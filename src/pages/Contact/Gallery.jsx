import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KankariyaImg from '../../utils/images/galley_section/01-04-2025.jpg';
import Jal_mandir from '../../utils/images/galley_section/02-04-2025.jpg';
import Nalanda_university from '../../utils/images/marine_1.jpg';
import pic1 from '../../utils/images/London-location.jpg';
import pic2 from '../../utils/images/Manchester-location.jpg';
import pic3 from '../../utils/images/food_safety_and_standard_authority_of_india_clean_street_food_hub_ahmedabad_kankaria_lake_1536401601.jpg';
const GallerySection = () => {
    function importAll(r) {
        return r.keys().map((key) => {
          const fileName = key.replace('./', '').replace(/\.(jpg|png)$/, '');
      
          // Convert file name like '01-04-2025' or 'jal_mandir' to readable title
          const formattedTitle = fileName
            .replace(/[_-]/g, ' ') // Replace _ or - with space
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
      
          return {
            src: r(key),
            title: formattedTitle,
          };
        });
      }
      
      const images = importAll(require.context('../../utils/images/galley_section', false, /\.(jpg|png)$/));

      
    //   const images = [
    //     { src: KankariyaImg, title: 'Kankariya Lake' },
    //     { src: Jal_mandir, title: 'Jal Mandir' },
    //     { src: Nalanda_university, title: 'Nalanda University' },
    //     { src: pic1, title: 'Nalanda University' },
    //     { src: pic2, title: 'Nalanda University' },
    //     { src: pic3, title: 'Nalanda University' },
    //   ];
    
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
