import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <Header />

      <div className="contact-page">
        <h1>Contact Us</h1>
        <p className="contact-welcome">Welcome to SmileJeans Exclusive Store!</p>
        <p className="contact-subtext">
          Do you have any questions about our products? Contact us and we will be happy to help you.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p><strong>Store Name:</strong> SmileJeans Exclusive Store</p>
            <p><strong>Phone:</strong> +234 801 234 5678</p>
            <p><strong>Email:</strong> smilejeans@gmail.com</p>
            <p><strong>Location:</strong> Nigeria</p>

            <h3>Our Services</h3>
            <p>✔️ Quality Denim Jeans</p>
            <p>✔️ Stylish Jean Jackets</p>
            <p>✔️ Beautiful Jean Skirts</p>
            <p>✔️ Customer Support</p>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />

              <label>Subject</label>
              <input type="text" placeholder="Enter subject" />

              <label>Your Message</label>
              <textarea placeholder="Write your message" rows="5"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
