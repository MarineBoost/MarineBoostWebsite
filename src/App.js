import './App.css';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import logoImage from './utils/images/marineboost.jpeg';
import Term_condition from './pages/terms_condition/term_condition';
import Donate from './pages/Donate/Donate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const location = useLocation(); // Get the current pathname
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (window.scrollY > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar with Controlled Collapse */}
      <Navbar expand="lg" className="position-relative w-100 top-0 shadow-sm" style={{ zIndex: 1050 }} expanded={expanded}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center" onClick={() => setExpanded(false)}>
              <img src={logoImage} alt="logo" style={{ width: "45px", height: "2.9vh", objectFit: "contain" }} />
              <span className="mx-2 text-dark lh-1 fw-semibold">
                <b style={{ fontSize: "28px" }}>Marine Boost</b>
              </span>
            </Link>
          </Navbar.Brand>

          {/* Navbar Toggle Button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle expand state
          />

          {/* Navbar Collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-2 justify-content-end w-100">
              {[
                { path: "/", label: "Home" },
                { path: "/courses", label: "Services" },
                { path: "/about", label: "About us" },
                { path: "/donate", label: "Business" },
                { path: "/contact", label: "Get in touch" },
                { path: "/term_condition", label: "Terms & Conditions" },
              ].map(({ path, label }) => (
                <Link 
                  key={path} 
                  to={path} 
                  className={`nav-link text-uppercase text-dark fw-bold ${location.pathname === path ? "active" : ""}`} 
                  onClick={() => setExpanded(false)} // Collapse navbar after clicking
                >
                  {label}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/term_condition' element={<Term_condition />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>

      {/* Scroll-to-Top Button */}
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <FontAwesomeIcon icon={faArrowUp} className="icon-large" />
      </button>
      <footer style={{backgroundColor:"#d3d3d3"}}>
  
  <div className='container p-3' >
    <div className='row d-flex justify-content-between align-items-center'>
      {/* here i add this advertising */}
      <div>
{/* Google AdSense Ad Placeholder */}
    <ins 
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w+4e-db+86"
      data-ad-client="ca-pub-6901408017524149"
      data-ad-slot="3993093623"
    ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
      <div className='col-md-4'>
        <Link to="/contact">
          <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
        </Link>

        <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
          <Link to="/contact">
            <a href="https://www.facebook.com/profile.php?id=61567100098439" target="_blank" rel="noopener noreferrer">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0000FF" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </li>
            </a >
          </Link>

          <li>
            <a href="https://www.instagram.com/marineboost_ecommerce/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </li>


          <li>
            <a href="https://api.whatsapp.com/send?phone=918109126423&text=#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#008000" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </li>


          <li>
            <a href=" https://www.youtube.com/@TechVerse-j5q" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </li>

          <li>
          <a 
            href="https://www.linkedin.com/in/marine-boost-46793a332/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0077B5" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.417 0 1.043 0h13.914C15.583 0 16 .513 16 1.146v13.708c0 .633-.417 1.146-1.043 1.146H1.043C.417 16 0 15.487 0 14.854V1.146zM4.943 12.375V6.75H2.625v5.625h2.318zM3.784 5.781a1.281 1.281 0 1 1 0-2.563 1.281 1.281 0 0 1 0 2.563zM13.375 12.375V9.336c0-1.82-.967-2.656-2.261-2.656-1.039 0-1.503.72-1.766 1.223v-1.06H7.044v5.532h2.304V9.677c0-.716.134-1.409.986-1.409s.844.774.844 1.447v2.66h2.197z"/>
            </svg>
          </a>
        </li>


        </ul>

      </div>

      <div className='col-md-7 col-lg-6'>
        <div className='d-row d-md-flex justify-content-between align-items-center'>
          <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
            <ul className='footer-navigation list-unstyled mb-0'>
              <Link to="/" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Home</li>
              </Link>
              <Link to="/courses" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Our Services</li>
              </Link>
              <Link to="/about" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>About us</li>
              </Link>
              {/* <Link to="/blog" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Blog</li>
              </Link> */}
                <Link to="/term_condition" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Terms&condition</li>
              </Link>
              <Link to="/contact" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Get In Touch</li>
              </Link>
            
            </ul>
          </div>
          <div className='col-12 col-md-6 col-lg-7'>
            <ul className='list-unstyled mb-0'>
              <li>
                <p><strong>Address  &nbsp; :</strong>   &nbsp;B-34, Marutidham Sosa ,
               <p>  Rajendra Park Canal Road, Rajendra Park, Odhav,Ahmedabad, Gujarat  <br></br>  <strong>Pincode  &nbsp; :</strong>  &nbsp; 382415</p> 
              
                </p>
                <p><strong>Phone Number  &nbsp; :</strong>  &nbsp;+91 81091 26423</p>
                <p><strong>Email  &nbsp;:</strong> &nbsp; info@marineboost.com</p>
                <p><strong>Website  &nbsp; :  &nbsp;</strong> <a href="https://www.marineboost.com" target="_blank" rel="noopener noreferrer">www.marineboost.com</a></p>
              </li>


            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div >
    <div className='container'>
      <p className='p-3 m-0 text-center'>copyright 2025 @ <b style={{ color: "blue" }}> Marine Boost</b></p>
    </div>
  </div>

</footer>
    </div>
  );
}

export default App;
