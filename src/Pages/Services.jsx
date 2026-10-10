import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Service.css';

const Services = () => {
  const storeServices = [
    {
      title: 'Custom Denim Fitting',
      description: 'Find your perfect waist, rise, and leg fit with our personalized fitting recommendations.',
      icon: '📏',
    },
    {
      title: 'Wardrobe & Style Consultation',
      description: 'Expert guidance on how to match denim jackets, sets, and streetwear pieces for any occasion.',
      icon: '✨',
    },
    {
      title: 'Nationwide Fast Delivery',
      description: 'Speedy, secure doorstep shipping so your exclusive denim items arrive safely and on time.',
      icon: '🚚',
    },
    {
      title: 'Quality & Authenticity Guarantee',
      description: 'Every denim piece is tested for durability, comfort, premium fabric quality, and long-lasting wear.',
      icon: '🛡️',
    },
  ];

  const denimCollections = [
    {
      title: 'Premium Denim Collection',
      description: 'Signature exclusive cuts and premium washed denim fabrics.',
      icon: '💎',
    },
    {
      title: "Men's Denim Jeans",
      description: 'Slim, straight, relaxed, and cargo denim pants for men.',
      icon: '👖',
    },
    {
      title: "Women's Jeans",
      description: 'High-waisted, mom-fit, skinny, flare, and wide-leg styles.',
      icon: '👗',
    },
    {
      title: 'Denim Jackets',
      description: 'Classic trucker, oversized, distressed, and sherpa designs.',
      icon: '🧥',
    },
    {
      title: 'Denim Skirts',
      description: 'Trendy mini, midi, and high-slit denim skirts.',
      icon: '✨',
    },
    {
      title: 'Denim Pants & Cargo',
      description: 'Streetwear-inspired utility joggers and cargo jeans.',
      icon: '🎒',
    },
    {
      title: 'Denim Shorts',
      description: 'Comfortable casual cut-offs, bermudas, and vintage shorts.',
      icon: '☀️',
    },
    {
      title: 'Denim Dresses & Sets',
      description: 'Coordinated denim two-piece sets, dresses, and rompers.',
      icon: '👚',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Browse Our Catalog',
      description: 'Discover trendy and timeless denim tailored for your style.',
    },
    {
      number: '2',
      title: 'Select Your Fit',
      description: 'Choose your desired size, wash, and silhouette with confidence.',
    },
    {
      number: '3',
      title: 'Fast Dispatch',
      description: 'We prepare and ship your order with prompt care.',
    },
    {
      number: '4',
      title: 'Own Your Style',
      description: 'Step out looking stylish, comfortable, and confident.',
    },
  ];

  return (
    <div className="services-page">
      <Header />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <span className="services-badge">What We Offer</span>
          <h1>Our Services &amp; Collections</h1>
          <p className="services-hero-tagline">
            Quality denim, modern styles, and fashionable pieces designed to help you look good and feel confident.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="services-content">
        {/* Intro Section */}
        <section className="services-section">
          <h2 className="services-section-title">Exclusive Customer Services</h2>
          <p className="services-intro-text">
            Explore the exclusive services and products we offer. At SmileJeans Exclusive Store, we offer quality denim,
            modern styles, and fashionable pieces designed to help you look good and feel confident every day.
          </p>
          <div className="services-grid">
            {storeServices.map((service) => (
              <div key={service.title} className="service-card">
                <span className="service-card-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Denim Collections Showcase */}
        <section className="services-section">
          <h2 className="services-section-title">Our Denim Collections</h2>
          <p className="services-section-subtitle">
            From classic everyday essentials to bold statement pieces, browse our curated denim categories.
          </p>
          <div className="collections-grid">
            {denimCollections.map((item) => (
              <div key={item.title} className="collection-item-card">
                <div className="collection-item-icon">{item.icon}</div>
                <div className="collection-item-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="services-section">
          <h2 className="services-section-title">How It Works</h2>
          <p className="services-section-subtitle">
            Shopping for your favorite denim wear is smooth, easy, and satisfying.
          </p>
          <div className="process-grid">
            {steps.map((step) => (
              <div key={step.number} className="process-step">
                <span className="step-number">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="services-cta-section">
          <h2>Ready to Upgrade Your Denim Style?</h2>
          <p>
            Get in touch with our team for styling recommendations, custom orders, or bulk inquiries.
          </p>
          <div className="services-cta-buttons">
            <Link to="/contactus" className="services-cta-btn">
              Contact Us Today
            </Link>
            <Link to="/aboutus" className="services-cta-btn-outline">
              Learn About Us
            </Link>
          </div>
          <div className="services-motto">
            Quality Denim &bull; Modern Style &bull; Everyday Confidence
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
