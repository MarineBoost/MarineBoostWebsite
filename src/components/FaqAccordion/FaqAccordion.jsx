
import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
       
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What services does Marine Boost offer?</Accordion.Header>
                    <Accordion.Body>
                    We provide a full suite of digital marketing services, including SEO, PPC, social media marketing, content creation, email marketing, conversion optimization, and e-commerce growth strategies.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can Marine Boost help my e-commerce business?</Accordion.Header>
                    <Accordion.Body>
                    We specialize in boosting e-commerce accounts by improving brand visibility, increasing website traffic, and optimizing conversion rates through data-driven marketing strategies.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Do you work with all industries?</Accordion.Header>
                    <Accordion.Body>
                    Yes! We serve businesses across all sectors, tailoring strategies to meet the unique needs of each industry.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How long does it take to see results?</Accordion.Header>
                    <Accordion.Body>
                    Timelines vary based on the strategy. SEO may take 3-6 months, while PPC and social media campaigns can generate results within weeks or even days.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Do you offer customized marketing plans?</Accordion.Header>
                    <Accordion.Body>
                    Absolutely! We analyze your business goals and craft a tailored strategy for maximum impact and ROI.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>How does Marine Boost measure success?</Accordion.Header>
                    <Accordion.Body>
                    We track key performance indicators (KPIs) such as traffic growth, lead generation, conversion rates, and ROI, ensuring data-backed success.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='6'>
                    <Accordion.Header>What makes Marine Boost different from other agencies?</Accordion.Header>
                    <Accordion.Body>
                    Our expertise in e-commerce growth, data-driven approach, personalized strategies, and dedicated support set us apart. We focus on real results that help businesses scale.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='7'>
                    <Accordion.Header>How do I get started?</Accordion.Header>
                    <Accordion.Body>
                    Simply contact us for a free consultation! We’ll discuss your business needs and create a strategy to boost your digital success.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
