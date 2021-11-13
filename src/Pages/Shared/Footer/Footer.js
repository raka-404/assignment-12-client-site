import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
      <div>
      <hr className=' mt-5 mb-3' />
      <div className="bg-custom text-light text-start pt-5 cusFooter">
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <div>
                <h4 className="text-warning">
                  Diamond sea
                </h4>
                <ul className=" quick-link d-block p-0 m-0">
              <h5>Find your best here with Diamond Sea</h5>
              </ul>
              </div>
              
            </Col>
            <Col>
              {/* Destination Section  */}
              <h4 className="footer-title">Information</h4>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Delivery Information</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">Terms and condition</a>
                </li>
              </ul>
            </Col>
            <Col>
              {/* Information Section  */}
              <h4 className="footer-title">My Account </h4>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <a href="/">Order history</a></li>
                <li>
                  <a href="/">Wish list</a></li>
                <li>
                  <a href="/">Newsleter</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4 className="footer-title">Contact info</h4>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <a href="/">Address: Dhaka Bushundhora </a>
                </li>
                <li>
                  <a href="/">Phone: +088308340380</a>
                </li>
                <li>
                  <a href="/">Email: diamondsea@gamil.com</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* Copyright  */}
        <hr className="fw-5" />
        <p className="p-0 m-0 text-center text-warning mb-2">Alright reserved by Rakib</p>
      </div>
    </div>
    );
};

export default Footer;