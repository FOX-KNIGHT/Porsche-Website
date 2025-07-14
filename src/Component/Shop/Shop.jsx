import React, { useEffect, useState } from 'react';
import './Shop.css';

// Import images
import coverImage from './cover.jpg';
import watchImage from './watch.webp';
import bikeImage from './bike.jpg';
import matImage from './mat.jpg';
import i1 from './i1.jpg';
import i2 from './i2.jpg';
import i3 from './i3.jpg';
import i4 from './engine.avif';

const Shop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const shopItems = [
    {
      id: 1,
      title: "Indoor Car Cover in Martini Racing Design",
      description: "Protect your vehicle in style using this custom-fit indoor car cover featuring the classic Martini Racing design.",
      image: coverImage,
      link: "Indoor Car Cover",
      category: "accessories"
    },
    {
      id: 2,
      title: "Smartwatch Porsche x Garmin® Epix Pro",
      description: "GPS multisport smartwatch with unique Porsche details and extensive fitness and health features.",
      image: watchImage,
      link: "Garmin Epix Pro",
      category: "tech"
    },
    {
      id: 3,
      title: "Porsche eBike Cross Performance EXC 2nd Gen.",
      description: "High-performance exclusive electric mountain bike from Porsche.",
      image: bikeImage,
      link: "eBike",
      category: "lifestyle"
    },
    {
      id: 4,
      title: "Porsche 917 Salzburg Garage Mat",
      description: "The perfect velour mat in authentic Salzburg design for every garage or workshop.",
      image: matImage,
      link: "Salzburg Garage Mat",
      category: "accessories"
    },
    {
      id: 5,
      title: "Porsche Design Chronograph",
      description: "Premium timepiece featuring classic Porsche design elements and precision engineering.",
      image: i4,
      link: "Chronograph",
      category: "accessories"
    }
  ];

  const discoverItems = [
    {
      id: 1,
      title: "Travel & Experience",
      image: i1,
      description: "Discover unique travel experiences and driving adventures.",
      category: "experience"
    },
    {
      id: 2,
      title: "Porsche Approved",
      image: i2,
      description: "Certified pre-owned vehicles with Porsche quality assurance.",
      category: "vehicles"
    },
    {
      id: 3,
      title: "Motorsport Experience",
      image: i3,
      description: "Experience the thrill of professional motorsport.",
      category: "motorsport"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(shopItems.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(shopItems.length / 4)) % Math.ceil(shopItems.length / 4));
  };

  return (
    <div className="shop-container">
      {/* Online Shop Highlights Section */}
      <section className="section section--primary">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Online Shop Highlights</h2>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={prevSlide} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="carousel-btn" onClick={nextSlide} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="shop-carousel animate-on-scroll">
            <div 
              className="shop-items" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {shopItems.map((item) => (
                <div key={item.id} className="shop-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                    <div className="item-overlay">
                      <span>View Details</span>
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-description">{item.description}</p>
                    <a href="#" className="item-link" onClick={(e) => e.preventDefault()}>
                      <span>{item.link}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-indicators">
            {Array.from({ length: Math.ceil(shopItems.length / 4) }, (_, i) => (
              <button
                key={i}
                className={`indicator ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="section section--secondary">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Discover</h2>
          <div className="discover-grid">
            {discoverItems.map((item) => (
              <div key={item.id} className="discover-item animate-on-scroll">
                <img src={item.image} alt={item.title} className="discover-image" />
                <div className="discover-overlay">
                  <h3 className="discover-title">{item.title}</h3>
                  <p className="discover-description">{item.description}</p>
                  <div className="discover-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;