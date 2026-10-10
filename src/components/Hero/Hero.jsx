import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      {/* <!--HERO SECTION--> */}
      <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>WELCOME TO SMILEJEANS EXCLUSIVE STORE</h1>
            <p>
              WHERE SHOPPING MADE EASY, SHOP FOR ALL KINDS OF DEMIN WEARS TO
              LOOK EXPENSIVE
            </p>

            <div className="button-box">s
              <Link to="/register">GET STARTED</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
