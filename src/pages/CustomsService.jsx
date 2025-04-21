import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CustomsService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCertificate, faMedal, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CustomsService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="customs-hero" data-aos="fade-up">
        <h1>Comptroller of Nigeria Customs Service</h1>
        <p data-aos="fade-left">— Alhaji Yusuf Umar Kaigama</p>
      </div>

      <div className="customs-container">
        {/* Section 1: Overview + Logo */}
        <div className="overview-logo-section">
          <div className="customs-logo" data-aos="fade-right">
            <img src="/images/ncs.png" alt="Nigeria Customs Logo" />
          </div>
          <div className="customs-overview-card" data-aos="fade-left">
            <h2>Overview</h2>
            <p>
              Yusuf Umar Kaigama joined the Nigeria Customs Service in 1982 and served diligently for 35 years. Rising through the ranks to the position of Comptroller in 2012, he demonstrated unparalleled commitment, leadership, and excellence throughout his career.
            </p>
          </div>
        </div>

        {/* Section 2: Key Achievements + Image */}
        <div className="achievements-image-section">
          <div className="customs-achievements-card" data-aos="fade-right">
            <center>
              <h2>Key Achievements</h2>
            </center>
            <ul>
              <li>Seized $10 million and €450,000 – the largest foreign currency seizure in Customs history.</li>
              <li>Received over five commendation letters for outstanding service delivery.</li>
              <li>Improved revenue collection at various commands including MMIA, Bauchi/Gombe, and Ogun.</li>
              <li>Discovered illegal factories and ensured legal enforcement.</li>
            </ul>
          </div>
          <div className="customs-image" data-aos="fade-left">
            <img src="/images/Kaigama10.jpg" alt="Kaigama" />
          </div>
        </div>

        {/* Section 3: Service Timeline */}
        <section className="service-timeline">
          <center>
            <h2>Service Timeline</h2>
          </center>
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <h4>1982</h4>
              <p>Joined Nigeria Customs Service</p>
            </div>
          </div>
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <h4>1990</h4>
              <p>Promoted to Superintendent</p>
            </div>
          </div>
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <h4>2012</h4>
              <p>Appointed Comptroller</p>
            </div>
          </div>
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <h4>2017</h4>
              <p>Retired with national honors</p>
            </div>
          </div>
        </section>

        {/* Section 4: Commendations & Medals */}
        <section className="commendations-section" data-aos="fade-up">
          <center>
            <h2>Commendations & Medals</h2>
          </center>
          <div className="commendation-cards">
            <div className="card" data-aos="zoom-in">
              <FontAwesomeIcon icon={faTrophy} className="icon" />
              <p>Gold Medal of Honor</p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="100">
              <FontAwesomeIcon icon={faCertificate} className="icon" />
              <p>Certificate of Excellence</p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <FontAwesomeIcon icon={faMedal} className="icon" />
              <p>Silver Service Medal</p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="300">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <p>National Recognition Star</p>
            </div>
          </div>
        </section>

        {/* Section 5: Impact Stats */}
        <section className="impact-stats">
          <center>
            <h2>Impact Stats</h2>
          </center>
          <div className="zigzag-item left" data-aos="fade-right">
            <div className="zigzag-content">
              <h4>3x Revenue Growth</h4>
              <p>Boosted revenue generation significantly in all commands he led.</p>
            </div>
          </div>
          <div className="zigzag-item right" data-aos="fade-left">
            <div className="zigzag-content">
              <h4>100+ Successful Seizures</h4>
              <p>Prevented illegal imports and protected national economy.</p>
            </div>
          </div>
          <div className="zigzag-item left" data-aos="fade-right">
            <div className="zigzag-content">
              <h4>5+ Letters of Commendation</h4>
              <p>Recognized by federal authorities for diligence and impact.</p>
            </div>
          </div>
        </section>

        {/* Related Link to Yobe Government */}
        <section className="related-link" data-aos="fade-up">
          <h3>You may also like to view:</h3>
          <Link to="/yobe-government" className="related-card">
            <img src="/images/Yobe-site-logo-1.png" alt="Yobe State Government" />
            <p>Yobe State Government Service</p>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CustomsService;
