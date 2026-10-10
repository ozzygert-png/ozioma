import React from 'react';
import { Link } from 'react-router-dom';
import './Featured.css';

const Featured = () => {
  const products = [
    {
      id: 1,
      title: 'Classic Trucker Denim Jacket',
      category: 'Outerwear',
      tag: 'Bestseller',
      tagClass: 'badge-bestseller',
      image: '/jean jacket.jpg',
      price: '₦35,000',
      description: 'Durable vintage-washed jacket with structured collar and utility pockets.',
    },
    {
      id: 2,
      title: 'Cargo Denim Mini Skirt',
      category: "Women's Collection",
      tag: 'Trending',
      tagClass: 'badge-trending',
      image: '/jean skrit.jpg',
      price: '₦18,500',
      description: 'High-waist cargo skirt with functional flap pockets and stretch denim comfort.',
    },
    {
      id: 3,
      title: 'Wide-Leg Baggy Streetwear Jeans',
      category: 'Streetwear',
      tag: 'Hot Arrival',
      tagClass: 'badge-hot',
      image: '/jean trouser.jpg',
      price: '₦28,000',
      description: 'Deep washed charcoal baggy denim pants designed for relaxed everyday swagger.',
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <span className="featured-badge">Featured Drops</span>
          <h2>Trending Denim Collections</h2>
          <p>Handpicked favorites loved by our customers for premium fabric, fit, and style.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                <span className={`product-tag ${product.tagClass}`}>{product.tag}</span>
              </div>
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <Link to="/contactus" className="product-action-btn">
                    Order Fit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-bottom-cta">
          <Link to="/services" className="view-all-btn">
            View All Denim Collections &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;

