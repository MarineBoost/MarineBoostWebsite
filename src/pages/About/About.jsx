import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
// import AboutUsSectionImg from '../../utils/images/marineboost_white.jpeg';
import AboutUsVideo from '../../utils/images/logo_animation/logo_animation_marine_boost.mp4';

import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/team_member/1.jpg';
import Person2 from '../../utils/images/team_member/2.jpg';
import Person3 from '../../utils/images/team_member/Untitled-1.png';
import Person4 from '../../utils/images/team_member/4.jpg';
import Person5 from '../../utils/images/team_member/3.jpg';

import { useState, useEffect } from "react";

import Loader from "../../pages/Loader/Loader";

const persons = [
  { id: 1, img: Person1, name: "Pooja Sharma", role: "Founder" },
  { id: 2, img: Person2, name: "Krishna Sharma", role: "Co-Founder\nE-Commerce Specialist" },
  { id: 3, img: Person3, name: "Amarjeet Kumar", role: "Developer" },
  { id: 4, img: Person4, name: "Sonu Sankhla", role: "Marketing Head" },
  { id: 5, img: Person5, name: "Jay Prajapati", role: "Website Coordinator" },
];


function About() {

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
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'> Welcome to MARINE BOOST, a results-driven digital marketing agency with 6+ years of expertise in helping businesses grow online. We specialize in innovative strategies to enhance brand presence, generate leads, and boost revenue. Let’s achieve success together! </p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Grow with Marine Boost
                    </h2> 
                    <p>Unlock the power of digital success with <b> MARINE BOOST</b>, where innovation meets strategy. Dive into data-driven marketing, cutting-edge trends, and expert insights that fuel business growth. Join a community committed to excellence and take your brand to new heights with interactive learning and proven strategies. Let’s grow together! 🚀</p>
                    
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
        
                <div className='col-lg-6 d-flex justify-content-center'>
                <video className='img-fluid' style={{ width: "75%", height: "300px", objectFit: "cover" }} autoPlay loop muted>
                    <source src={AboutUsVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
          <div className="container">
            <h2 className='text-center mb-5'>Our Team Members</h2>
            <div className='row g-4'>
            {persons.map((person) => (
            <div key={person.id} className='col-6 col-md-4 col-lg-2 d-flex justify-content-center'>
              <div className="team-card">
                <img 
                  src={person.img} 
                  className="img-fluid client-image" 
                  alt={`Client ${person.id}`} 
                />
                <center style={{marginTop:"3%"}}> 

                <h5 className="team-name">{person.name}</h5>
                <h6 className="team-role">
                {person.role.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < person.role.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h6>

                </center>
       

              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
    </div>
}
</>
  )
}

export default About;
