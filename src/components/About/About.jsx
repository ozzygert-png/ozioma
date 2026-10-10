import React from 'react'
import "./About.css";

const About  = () => {
  return (
    <div>
       {/* <!--ABOUT SECTION--> */}
      <section className="about">
        <div className="about-text">
          <h1>About Smilejeans Exclusive</h1>
          <h3>We sell anything Jeans</h3>
          <p>
            {" "}
            Discover SmileJeans Exclusive Store, <br /> your trusted destination
            for premium <br />
            jeans wear, offering stylish, comfortable,
            <br /> and durable denim for every occasion. <br /> Shop the latest
            trends and find your perfect fit today.
          </p>
          <ul>
            <li>Men's jeans</li>
            <li>Women's jeans</li>
            <li>Denim jackets</li>
            <li>Cargo pants</li>
          </ul>
          <button>
            {" "}
            <a href="#service">order</a>
          </button>
        </div>

        <div className="image-container">
       <img src="./jeanstore.jpg" alt="image" />
         
        </div>

      </section>
    </div>
  )
}

export default About 
