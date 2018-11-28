import React, { Component } from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-section">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-section">
          <a className="footer-link"
             href="https://www.linkedin.com/in/stevenajcox"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a className="footer-link"
             href="https://twitter.com/StevenAJC"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
          <a className="footer-link"
             href="https://www.instagram.com/stevenajcox/"
             target="_blank"
             rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </div>
        <div className="footer-section">
          <p className="fineprint">&copy; 2018 Steven Cox</p>
        </div>
        <div className="footer-section">
          <p className="fineprint">Website created by Kodobo</p>
        </div>
      </div>
    )
  }
}