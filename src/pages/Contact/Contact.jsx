import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import KankariyaImg from '../../utils/images/marine_3.jpg';
import Jal_mandir from '../../utils/images/marine_2.jpg';
import Nalanda_university from '../../utils/images/marine_1.jpg';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Select from "react-select";

const { State, City } = require('country-state-city');

function Contact() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');  
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [postcode, setPostcode] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [allCities, setAllCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const states = State.getStatesOfCountry('IN');
    let citiesList = [];

    states.forEach((state) => {
      const cities = City.getCitiesOfState('IN', state.isoCode);
      citiesList = [...citiesList, ...cities];
    });

    setAllCities(citiesList);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0); // Redirects to the top of the page on load
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted!');

    const serviceId = 'service_z5iw5fd';
    const templateId = 'template_wy3jvm5';
    const publicKey = '5Lnxsl26J0_O19Zyy';

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      phone: mobile,  
      to_name: 'MarineBoost',  
      from_address: address,
      city: location,  
      zip: postcode,   
      message: message,
    };
    console.log('templateParams==========================>>>>>>>>>: ', templateParams);
    

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        Swal.fire({
          icon: 'success',
          title: 'Email sent successfully!',
          text: 'We will reply as soon as possible.',
        });
        setSuccessMessage('We will reply as soon as possible.');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setAddress('');
        setLocation('');
        setPostcode('');
        setMessage('');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/contact');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error sending email',
          text: 'Please try again later.',
        });
      });
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Get In Touch</h1>
          <p className="text-center w-75 mb-5">
            Feel free to reach out to them through the provided phone number or
            email for any inquiries or feedback you may have.
          </p>
        </div>
      </header>

      {/* Form Section */}
      <div className="container my-5 d-flex justify-content-center">
        <Form
          ref={form}
          onSubmit={handleSubmit}
          className="emailForm"
          id="contact-form"
        >
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Col>

            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your mobile number with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Row className="mb-3">
  <Col sm={12} md={6} className="mb-3 mb-md-0">
    <Form.Label>Location</Form.Label>
    
    {/* Searchable Dropdown */}
    <Select
      options={allCities.map((city) => ({ label: city.name, value: city.name }))}
      value={location ? { label: location, value: location } : null}
      onChange={(selectedOption) => setLocation(selectedOption.value)}
      placeholder="-- Select a City --"
      isSearchable
    />
  </Col>

  <Col sm={12} md={6}>
    <Form.Label>Postcode</Form.Label>
    <Form.Control
      type="text"
      placeholder="Postcode"
      value={postcode}
      onChange={(e) => setPostcode(e.target.value)}
      required
    />
  </Col>
</Row>


          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      {/* Success Message Section */}
      {successMessage && (
        <div className="container my-3">
          <div className="alert alert-success">{successMessage}</div>
        </div>
      )}

      {/* Our Locations Section */}
      <div className="bg-dark text-light p-5">
        <div className="container">
          <h2 className="text-center mb-5">Gallery</h2>
          <div className="row g-4">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img
                src={Nalanda_university}
                className="img-fluid"
                alt=""
                style={{ width: "500px", height: "300px" }}
              />
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img
                src={Jal_mandir}
                className="img-fluid"
                alt=""
                style={{ width: "500px", height: "300px" }}
              />
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img
                src={KankariyaImg}
                className="img-fluid"
                alt=""
                style={{ width: "500px", height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;



