import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const Aboutus = () => {
  const collectionCategories = [
    "Men’s Denim Jeans",
    "Women’s Jeans",
    "Denim Jackets",
    "Denim Skirts",
    "Denim Shorts",
    "Ripped & Distressed Denim",
    "Wide-Leg & Baggy Denim",
    "Denim Sets & Outfits",
    "Premium & Exclusive Denim",
    "Denim Accessories",
  ];

  const moodStyles = [
    {
      title: 'Feeling Casual?',
      description: 'Pair your favorite jeans with a simple top and sneakers for an effortless everyday look.',
      icon: '👖',
    },
    {
      title: 'Going Out?',
      description: 'Elevate your outfit with a stylish denim jacket, skirt, or statement pair of jeans.',
      icon: '✨',
    },
    {
      title: 'Streetwear Look?',
      description: 'Explore our wide-leg, baggy, ripped, and distressed denim styles.',
      icon: '🔥',
    },
    {
      title: 'Coordinated Outfits?',
      description: 'Our denim sets and outfits make it easy to create a fashionable look with less effort.',
      icon: '👔',
    },
  ];

  return (
    <div className="aboutus-page">
      <Header />

      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-inner">
          <span className="aboutus-badge">Our Story & Mission</span>
          <h1>About SmileJeans Exclusive</h1>
          <p className="aboutus-hero-tagline">
            Where Style Meets Confidence, Comfort, and Everyday Fashion.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="aboutus-content">
        {/* Welcome & Story */}
        <section className="aboutus-section">
          <h2 className="aboutus-section-title">Welcome to SmileJeans Store</h2>
          <p>
            Welcome to SmileJeans Store, your destination for stylish, quality, and fashionable denim
            designed to help you look good, feel confident, and express your unique personality. We believe
            that the right pair of jeans is more than just clothing—it is a statement of confidence,
            individuality, comfort, and personal style.
          </p>
          <div className="aboutus-intro-box">
            At SmileJeans Store, we are passionate about bringing you carefully selected denim pieces that
            combine modern fashion, comfort, quality, and versatility. Whether you are looking for a classic
            pair of jeans for everyday wear, a trendy style for a special outing, or a statement denim piece to
            upgrade your wardrobe, we have something for you.
          </div>
        </section>

        {/* Discover Your Perfect Denim Style */}
        <section className="aboutus-section">
          <h2 className="aboutus-section-title">Discover Your Perfect Denim Style</h2>
          <p>
            Our collection is designed for people who love denim and want fashion that fits naturally into their
            lifestyle. From timeless classics to modern and trendy designs, SmileJeans Store offers a variety of
            denim styles to suit different tastes, occasions, and personalities.
          </p>
          <div className="collection-tags-container">
            {collectionCategories.map((item) => (
              <span key={item} className="collection-tag">
                {item}
              </span>
            ))}
          </div>
          <p>
            Whether you prefer a simple and classic look, a relaxed streetwear style, a bold and trendy outfit,
            or a sophisticated denim combination, SmileJeans Store makes it easier to find pieces that match
            your style.
          </p>
        </section>

        {/* Quality You Can Feel */}
        <section className="aboutus-section">
          <h2 className="aboutus-section-title">Quality You Can Feel</h2>
          <p>
            We understand that great fashion should not come at the expense of comfort. That is why we focus on
            denim pieces that offer a balance of quality, durability, comfort, and style.
          </p>
          <p>
            Our goal is to help you discover denim that you can confidently wear again and again. From everyday
            outfits to weekend looks and special occasions, our pieces are selected with versatility and
            practicality in mind.
          </p>
        </section>

        {/* Fashion Made for Every Mood */}
        <section className="aboutus-section">
          <h2 className="aboutus-section-title">Fashion Made for Every Mood</h2>
          <p>
            Your style can change from day to day, and your denim should be able to keep up. At SmileJeans
            Store, we believe fashion should give you the freedom to express yourself.
          </p>
          <div className="mood-grid">
            {moodStyles.map((mood) => (
              <div key={mood.title} className="mood-card">
                <div className="mood-card-icon">{mood.icon}</div>
                <h4>{mood.title}</h4>
                <p>{mood.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* More Than Just a Jeans Store */}
        <section className="aboutus-section">
          <h2 className="aboutus-section-title">More Than Just a Jeans Store</h2>
          <p>
            SmileJeans Store is built around a simple idea: everyone deserves to feel confident in what they wear.
          </p>
          <div className="pillars-grid">
            <div className="pillar-box">
              <h4>Effortless Shopping</h4>
              <p>
                We want your shopping experience to be simple, enjoyable, and inspiring. Instead of spending hours
                searching for the right denim style, our store brings different fashionable denim options together in
                one place.
              </p>
            </div>
            <div className="pillar-box">
              <h4>Timeless &amp; Trendy</h4>
              <p>
                We are committed to continuously discovering styles that reflect changing fashion trends while
                maintaining the timeless appeal of denim.
              </p>
            </div>
          </div>
        </section>

        {/* Your Style, Confidence, Smile */}
        <section className="aboutus-section">
          <h2 className="aboutus-section-title">Your Style. Your Confidence. Your Smile.</h2>
          <p>
            The name SmileJeans represents what we want our customers to experience when they shop with
            us—confidence, satisfaction, and a reason to smile.
          </p>
          <p>
            When you put on an outfit that fits well and reflects your personality, you naturally feel different.
            You walk differently, feel more confident, and express yourself more freely. That is the feeling we
            want every SmileJeans customer to have.
          </p>
        </section>

        {/* CTA Banner */}
        <section className="aboutus-cta-section">
          <h2>Shop With Confidence</h2>
          <p>
            Whether you are refreshing your wardrobe, searching for your next favorite pair of jeans, shopping for
            someone special, or simply looking for something new, SmileJeans Store is here to make your denim
            shopping experience easier and more enjoyable.
          </p>
          <Link to="/services" className="aboutus-cta-btn">
            Explore Our Collection
          </Link>
          <div className="aboutus-motto">
            Quality Denim &bull; Modern Style &bull; Everyday Confidence
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Aboutus;
