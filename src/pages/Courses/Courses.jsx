import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/digital_marketing_services.webp';
import LawCourseImg from '../../utils/images/content_marketing_services.webp';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/e-commerce-marketing.webp';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import Loader from "../../pages/Loader/Loader";

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Search Engine Optimization (SEO)',
        description: 'Helping your business rank higher and get discovered by your target audience.',
        link: '/seo'  // Define the route to navigate
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Driving targeted traffic with data-backed campaigns.',
        link: '/ppc'  // Define the route to navigate
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Web Design & Development',
        description: 'Building user-friendly websites that align with your brand and goals.',
        link:'/web_design'  // Define the route to navigate
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Graphic Design',
        description: 'Social Media Posts, Videos.',
        link:'/graphic_design'  // Define the route to navigate
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Social Media Marketing',
        description: 'Engaging and growing your online community with impactful social strategies.',
        link:'/social_media'  // Define the route to navigate
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Content Marketing',
        description: 'Crafting compelling content that informs, engages, and converts.',
        link:'/content_writting'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Analytics & Reporting',
        description: 'Offering actionable insights to optimize your campaigns continuously.',
        link :'/analystic'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'E-Commerce Marketplaces',
        description: 'Amazon, Flipkart, Meesho etc.',
        link:'/e-commerce' // Define the route to navigate
    },
];


function Courses() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      // Simulate an async operation like fetching data
      setTimeout(() => {
        setData("Fetched Data");
        setLoading(false);
      }, 2000); // Simulate a 2-second delay
    }, []);


  return (
    <> 
    {loading ? <Loader /> :
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Services</h1>
                <p className='text-center w-75 mb-5'>At Marine Boost, we offer a full range of digital marketing and e-commerce solutions to help businesses grow, scale, and succeed online.</p>
            </div>
        </header>

        <div className='container py-3'>
            <div className='row g-4'>
            {courses.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Link to={course.link} className="text-decoration-none">
                                <Card className='text-white shadow scale-hover-effect'>
                                    <Card.Img src={course.img} />
                                    <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                        <Card.Title className='fs-3 text-danger'>{course.title}</Card.Title>
                                        <Card.Text className='text-center'>{course.description}</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>

        <div className='bg-light text-light py-2'>
            <FaqAccordion />
        </div>
    </div>
}
     </>
  )
}

export default Courses;
