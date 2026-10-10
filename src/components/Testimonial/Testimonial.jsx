import React from 'react'
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      {/* <!--TESTIMONY--> */}
      <section id="testimonials">
        
        <h4>TESTIMONIALS</h4>
        <h2>What our customers says</h2>

        <div className="testimonials-container">
          <div className="card">
            <img src="./jean jacket.jpg" alt="image" />
            <h3>CHIBOY OLUCHUKWU</h3>
            <p>
              "Absolutely love my jean jeacket! The quality is amazing, its fits
              perfectly, <br />
              and it looks even better in person. Definitely worth every penny!
            </p>
          </div>

          <div className="card">
            <img src="./jean skrit.jpg" alt="image" />
            <h3>JOHN ONYEMA</h3>
            <>
              After buying your jean skrit, i discovered that it was very
              afforable and i love the fiting.
            </>
          </div>
          <div className="card">
            <img src="./jean trouser.jpg" alt="image" />
            <h3>MICHAEL CHIEKE</h3>
            <p>
              Your jean trouser is the best i have ever bought, both the male
              and the female, they are so nice, i love them
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Testimonial

