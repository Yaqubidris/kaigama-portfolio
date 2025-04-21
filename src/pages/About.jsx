import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-container">
        <section className="about-hero">
  <div className="hero-text">
    <blockquote data-aos="fade-left">
      “True leadership is not in titles, but in tireless service to humanity and commitment to truth.”
    </blockquote>
    <p data-aos="fade-left">— Alhaji Yusuf Umar Kaigama</p>
  </div>
  <div className="hero-image" data-aos="fade-right">
    <img src="/images/Kaigama10.jpg" alt="Alhaji Yusuf Umar Kaigama" />
  </div>
</section>


     {/* Biography Section */}
<section className="about-section" data-aos="fade-up">
  <center>
      <h2>Biography</h2>
  </center>
  <div className="bio-content">
    <div className="bio-text" data-aos="fade-right">
      <p>
        Yusuf Umar Kaigama is a distinguished retired Customs Comptroller and the current Commissioner for Religious Affairs in Yobe State. Born in 1957 in Potiskum, Yobe State, into a respected family of religious and commercial legacy, he grew up with strong values of service and discipline.
      </p>
      <p>
        He has dedicated over 35 years to selfless public service, rising through the ranks of the Nigeria Customs Service. From groundbreaking seizures at Muritala Muhammad International Airport to transformative revenue growth across several commands, his contributions earned him numerous accolades — including both Silver and Gold Medals, a rare feat in Customs history.
      </p>
      <p>
        A scholar and servant-leader, Kaigama holds a degree in Education/History from Bayero University, Kano, and postgraduate degrees from LAUTECH. He remains deeply committed to leadership, anti-corruption, and grassroots development.
      </p>
    </div>
    <div className="bio-image" data-aos="fade-left">
      <img src="/images/Kaigama9.jpg" alt="Umar Yusuf" />
    </div>
  </div>
</section>

      {/* Education Cards */}
      <section className="education-section" id="education">
        <h2 data-aos="fade-up">Educational Background</h2>
        <div className="education-cards">
          <div className="edu-card" data-aos="zoom-in">
            <h3>Race Course Primary School</h3>
            <p>Potiskum, 1964 – 1971</p>
          </div>

          <div className="edu-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Government Secondary School</h3>
            <p>Potiskum, 1972 – 1977</p>
          </div>

          <div className="edu-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Bayero University, Kano</h3>
            <p>Bachelor’s in Education/History, 1977 – 1981</p>
          </div>

          <div className="edu-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>PGD in Management</h3>
            <p>2007</p>
          </div>

          <div className="edu-card" data-aos="zoom-in" data-aos-delay="400">
            <h3>Master’s in Business Management</h3>
            <p>Ladoke Akintola University, 2009 – 2010</p>
          </div>
        </div>
      </section>

      <section className="service-section" data-aos="fade-up">
        <div className="service-background">
          <div className="overlay">
            <h2 className="service-title">Public Service & Political Involvement</h2>
          </div>
        </div>

        <div className="service-columns">
          <Link to="/customs-service" className="service-card">
            <img src="/images/ncs.png" alt="Nigeria Customs Service" />
            <p>Nigeria Customs Service</p>
          </Link>

          <Link to="/yobe-government" className="service-card">
            <img src="/images/Yobe-site-logo-1.png" alt="Yobe State Government" />
            <p className="Yobe">Yobe State Government</p>
          </Link>
        </div>
      </section>


      {/* Family Section */}
      <section className="about-section" data-aos="fade-up" data-aos-delay="400">
        <center>
            <h2>Family & Personal Values</h2>
        </center>
        <p>
          Behind Alhaji Yusuf Umar Kaigama’s illustrious career stands a strong pillar — his devoted wife Hajiya Hassana Umar Kaigama. Her unwavering support, wisdom, and quiet strength have been instrumental throughout his journey in public service and politics. She has not only nurtured their family with love and values but has also stood beside him through every milestone, contributing significantly to his successes. Together, they are blessed with children who continue to uphold the legacy of excellence and integrity he embodies. Kaigama is widely admired for his humility, patriotism, and deep-rooted compassion for humanity — virtues that are clearly reflected in his home and public life.
        </p>
      </section>

    </div>
  );
};

export default About;
