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

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Search Engine Optimization (SEO)',
        description: 'Helping your business rank higher and get discovered by your target audience.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Pay-Per-Click (PPC) Advertising',
        description: 'Driving targeted traffic with data-backed campaigns.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Web Design & Development',
        description: 'Building user-friendly websites that align with your brand and goals.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Graphic Design',
        description: 'Social Media Posts, Videos.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Social Media Marketing',
        description: 'Engaging and growing your online community with impactful social strategies.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Content Marketing',
        description: 'Crafting compelling content that informs, engages, and converts.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Analytics & Reporting',
        description: 'Offering actionable insights to optimize your campaigns continuously.'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'E-Commerce Marketplaces',
        description: 'Amazon, Flipkart, Meesho etc.'
    },
];


function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Services</h1>
                <p className='text-center w-75 mb-5'>Unlock your potential with Marine Boost's transformative courses, where learning becomes an adventure toward success and excellence.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-3 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;
