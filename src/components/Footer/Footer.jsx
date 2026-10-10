import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand Summary */}
        <div className="footer-column brand-column">
          <h2 className="footer-logo">SMILEJEANS</h2>
          <p className="footer-tagline">
            Your premier destination for high-quality, fashionable, and comfortable denim wears.
            Elevate your everyday wardrobe with confidence.
          </p>
          <div className="social-links">
            <span className="social-pill">Instagram</span>
            <span className="social-pill">Facebook</span>
            <span className="social-pill">WhatsApp</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/services">Collections &amp; Services</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Collections */}
        <div className="footer-column">
          <h3>Collections</h3>
          <ul className="footer-nav">
            <li><Link to="/services">Men's Denim Jeans</Link></li>
            <li><Link to="/services">Women's Jeans</Link></li>
            <li><Link to="/services">Denim Jackets</Link></li>
            <li><Link to="/services">Cargo &amp; Baggy Denim</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <p><strong>Email:</strong> info@smilejeans.com</p>
            <p><strong>Phone:</strong> +234 800 000 0000</p>
            <p><strong>Location:</strong> Owerri, Imo State, Nigeria</p>
            <p><strong>Hours:</strong> Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SmileJeans Exclusive Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
