import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/pexels-vantha-thang-2361316.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/pg4degree.jpg';
import Person7 from '../../utils/images/pg3degree.jpg';
import Person8 from '../../utils/images/pg2degree.jpg';
import Person9 from '../../utils/images/pg1degree.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>
              
                Welcome to MARINE BOOST, a results-driven digital marketing agency with over 6 years of proven expertise in empowering businesses to grow and thrive online.

Founded on a passion for innovation and a commitment to excellence, we specialize in creating tailored strategies that drive measurable results. Whether you're looking to enhance your brand presence, generate high-quality leads, or boost revenue, our dedicated team of marketing professionals is here to deliver.
              </p>
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
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>
        <div className='bg-body-tertiary py-5'>
  <div className="container">
    <h2 className='text-center mb-5'>Our Clients</h2>
    <div className='row g-4'>
      {persons.map((person) => (
        <div key={person.id} className='col-md-4'>
          <img src={person.img} className='img-fluid client-image' alt="" />
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default About;   