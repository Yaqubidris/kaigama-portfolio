import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faHandsHelping, faMedal, faShieldAlt, faMoneyBillWave, faChartLine, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <div className="home-wrapper">
      <div className="hero-static">
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to the Official Portfolio</h1>
            <p>Discover the legacy and vision of Kaigama Umar Yusuf</p>
          </div>
        </div>
      </div>

      <div className="quick-bio-section" id="bio">
        <div className="bio-container">
          <div className="bio-text" data-aos="fade-right">
            <h2>Meet Umar Yusuf</h2>
            <p>
        Yusuf Umar Kaigama is a distinguished retired Customs Comptroller and the current Commissioner for Religious Affairs in Yobe State. Born in Potiskum in 1958, he has dedicated over 35 years to selfless public service, rising through the ranks of the Nigeria Customs Service.
      </p>
      <p>
        From groundbreaking seizures at Muritala Muhammad International Airport to transformative revenue growth across several commands, his contributions have earned him numerous national accolades, including both Silver and Gold Medals — a rare feat in the history of the service.
      </p>
      <p>
        A scholar and servant-leader, Kaigama holds a degree in Education/History from Bayero University, Kano, and postgraduate degrees from LAUTECH. He remains deeply committed to leadership, anti-corruption, and grassroots development.
      </p>
      <a href="/about" className="read-more">Read Full Biography</a>
    </div>

          <div className="bio-image" data-aos="fade-left">
              <img src="kaigama-portfolio/images/Kaigama10.jpg" alt="Umar Yusuf" />
          </div>
        </div>
      </div>
      <div className="achievements-section" id="achievements">
  <h2 data-aos="fade-up">Key Achievements</h2>
  <div className="achievements-grid">
    <div className="achievement-card" data-aos="fade-up" data-aos-delay="100">
      <FontAwesomeIcon icon={faShieldAlt} className="icon" />
      <h3>35+ Years of Service</h3>
      <p>Served in every geopolitical zone of Nigeria with honor and discipline.</p>
    </div>
    <div className="achievement-card" data-aos="fade-up" data-aos-delay="200">
      <FontAwesomeIcon icon={faAward} className="icon" />
      <h3>National Recognition</h3>
      <p>Decorated for leading anti-smuggling operations and foreign currency seizures.</p>
    </div>
    
    <div className="achievement-card" data-aos="fade-up" data-aos-delay="300">
      <FontAwesomeIcon icon={faHandsHelping} className="icon" />
      <h3>Community Builder</h3>
      <p>Championed educational, religious, and local development projects.</p>
    </div>
    <div className="achievement-card" data-aos="fade-up" data-aos-delay="400">
      <FontAwesomeIcon icon={faMedal} className="icon" />
      <h3>Commissioner for Religious Affairs</h3>
      <p>Currently serving with dedication to unity, tolerance, and faith-based dialogue.</p>
    </div>
    
    <div className="achievement-card" data-aos="fade-up" data-aos-delay="500">
  <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
  <h3>Record-Setting Seizure</h3>
  <p>Led the historic seizure of $10M and €450,000 at MMIA, the largest in Nigerian Customs history.</p>
</div>

<div className="achievement-card" data-aos="fade-up" data-aos-delay="600">
  <FontAwesomeIcon icon={faChartLine} className="icon" />
  <h3>Unprecedented Revenue Growth</h3>
  <p>Boosted Ondo/Ekiti revenue from ₦4.3M to ₦176M — a staggering 4,002% increase.</p>
</div>

<div className="achievement-card" data-aos="fade-up" data-aos-delay="700">
  <FontAwesomeIcon icon={faBuilding} className="icon" />
  <h3>Infrastructure Legacy</h3>
  <p>Initiated and completed 20+ impactful development and welfare projects across multiple commands.</p>
</div>

<div className="achievement-card" data-aos="fade-up" data-aos-delay="800">
  <FontAwesomeIcon icon={faGraduationCap} className="icon" />
  <h3>Academic Excellence</h3>
  <p>Earned postgraduate degrees in Management and Business Administration while in active service.</p>
</div>

  </div>
  
</div>
<div className="vision-mission-section" id="vision-mission">
  <h2 data-aos="fade-up">Vision & Mission</h2>
  <div className="vision-mission-content">
    <div className="vision" data-aos="fade-right">
      <h3>Our Vision</h3>
      <p>
        To be a beacon of transparency, unity, and service-driven leadership in Nigeria and beyond —
        inspiring a new generation to lead with integrity.
      </p>
    </div>
    <div className="mission" data-aos="fade-left">
      <h3>Our Mission</h3>
      <p>
        To serve the people with unwavering dedication to justice, equity, and community development,
        while promoting interfaith dialogue, national peace, and public accountability.
      </p>
    </div>
  </div>
</div>
<div className="timeline-section" id="timeline">
  <h2 data-aos="fade-up">Timeline of Service</h2>
  <div className="timeline">
    <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
      <div className="timeline-date">1987</div>
      <div className="timeline-content">
        <h3>Joined the Nigerian Customs Service</h3>
        <p>Embarked on a journey of service and national security across Nigeria.</p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-left" data-aos-delay="200">
      <div className="timeline-date">1995–2005</div>
      <div className="timeline-content">
        <h3>Leadership in Operational Zones</h3>
        <p>Led multiple operations in anti-smuggling units across the northern and western regions.</p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
      <div className="timeline-date">2008</div>
      <div className="timeline-content">
        <h3>Promoted to Comptroller</h3>
        <p>Recognized for excellence and appointed to oversee border enforcement strategies.</p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-down" data-aos-delay="400">
      <div className="timeline-date">2023</div>
      <div className="timeline-content">
        <h3>Appointed Commissioner</h3>
        <p>Became the Honourable Commissioner for Religious Affairs, focusing on unity and community building.</p>
      </div>
    </div>
  </div>
</div>

<div className="media-grid">
  <div className="media-card">
        <img src="/kaigama-portfolio/images/Kaigama11.jpg" alt="Umar Yusuf" />
    <h4>Hajj Press Conference 2024</h4>
    <p>Addressing preparations and digital reforms.</p>
    <a href="https://web.facebook.com/watch/?v=897167442523312" target="_blank">Watch Video</a>
  </div>

  <div className="media-card">
        <img src="/kaigama-portfolio/images/Kaigama10.jpg" alt="Umar Yusuf" />
    <h4>Exclusive Interview with NTA</h4>
    <p>Discussing interfaith harmony in governance.</p>
    <a href="https://example.com/article" target="_blank">Read Article</a>
  </div>
</div>
<div className="gallery-section" id="gallery">
  <h2 data-aos="fade-up">Photo Moments</h2>
  <div className="gallery-grid">
    {[
    //   '/images/kaigama1.jpg',
      '/kaigama-portfolio/images/Kaigama2.jpg',
      '/kaigama-portfolio/images/Kaigama7.jpg',
      '/kaigama-portfolio/images/Kaigama4.jpg',
      '/kaigama-portfolio/images/Kaigama5.jpg',
      '/kaigama-portfolio/images/Kaigama6.jpg',
    //   '/images/kaigama1.jpg',
      '/kaigama-portfolio/images/Kaigama2.jpg',
      '/kaigama-portfolio/images/Kaigama7.jpg',
      '/kaigama-portfolio/images/Kaigama4.jpg',
      '/kaigama-portfolio/images/Kaigama5.jpg',
      '/kaigama-portfolio/images/Kaigama6.jpg',
    ].map((src, index) => (
      <div className="gallery-item" data-aos="zoom-in" data-aos-delay={index * 100} key={index}>
        <img src={src} alt={`Gallery image ${index + 1}`} />
      </div>
    ))}
  </div>
</div>

</div>
    </>
  );
};

export default Home;
