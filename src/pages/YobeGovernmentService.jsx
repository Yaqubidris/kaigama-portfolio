import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faGlobe,
  faHandsHelping,
  faPeace,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



const YobeGovernmentService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
          <div className="customs-hero" data-aos="fade-up">
            <h1>Service in Yobe State Government</h1>
            <p data-aos="fade-left">
              A dedicated chapter in public service marked by leadership, religious
              harmony, and community empowerment.
            </p>
          </div>
        <div className="customs-container">
          {/* HERO SECTION */}
          {/* OVERVIEW + LOGO SECTION */}
          <div className="overview-logo-section">
            <div className="customs-logo" data-aos="fade-right">
              <img src="/images/Yobe-site-logo-1.png" alt="Yobe State Logo" />
            </div>
            <div className="customs-overview-card" data-aos="fade-left">
              <h2>Overview</h2>
              <p>
                After an illustrious career in the Nigeria Customs Service, Alhaji
                Yusuf Umar Kaigama continued his commitment to public service by
                joining the Yobe State Government. Appointed as the Commissioner for
                Religious Affairs, he has brought clarity, integrity, and inclusive
                governance to the office, promoting religious harmony and societal
                growth across the state.
              </p>
            </div>
          </div>
          {/* ACHIEVEMENTS + IMAGE SECTION */}
          <div className="achievements-image-section">
            <div className="customs-achievements-card" data-aos="fade-right">
              <center>
                <h2>Key Achievements in Office</h2>
              </center>
              <ul className="customs-achievements">
                <li>
                  Spearheaded interfaith dialogue and peacebuilding initiatives
                  across Yobe State.
                </li>
                <li>
                  Introduced strategic reforms in the management of religious
                  pilgrimages.
                </li>
                <li>
                  Ensured equitable distribution of resources among religious
                  organizations.
                </li>
                <li>
                  Organized religious education campaigns and youth empowerment
                  programs.
                </li>
              </ul>
            </div>
            <div className="customs-image" data-aos="fade-left">
              <img src="/images/Kaigama10.jpg" alt="Kaigama as Commissioner" />
            </div>
          </div>
          {/* SERVICE TIMELINE */}
          <div className="service-timeline">
            <center>
              <h2>Service Timeline</h2>
            </center>
            <div className="timeline-item left" data-aos="fade-right">
              <div className="timeline-content">
                <h4>2023 - Appointed Commissioner</h4>
                <p>Oversaw religious governance and promoted inclusive policies.</p>
              </div>
            </div>
            <div className="timeline-item right" data-aos="fade-left">
              <div className="timeline-content">
                <h4>2023 - Interfaith Peace Dialogues</h4>
                <p>
                  Fostered collaboration between religious leaders and communities.
                </p>
              </div>
            </div>
            <div className="timeline-item left" data-aos="fade-right">
              <div className="timeline-content">
                <h4>2024 - Pilgrimage Management Reform</h4>
                <p>
                  Restructured the Hajj Board and improved service delivery.
                </p>
              </div>
            </div>
            <div className="timeline-item right" data-aos="fade-left">
              <div className="timeline-content">
                <h4>2024 - Religious Education Drive</h4>
                <p>
                  Promoted enlightenment and value-based teachings to youths.
                </p>
              </div>
            </div>
          </div>
          {/* COMMENDATIONS & MEDALS */}
          <section className="commendations-section" data-aos="fade-up">
            <center>
              <h2>Commendations & Medals</h2>
            </center>
            <div className="commendation-cards">
              <div className="card" data-aos="zoom-in">
                <FontAwesomeIcon icon={faMedal} className="icon" />
                <p>Award for Religious Harmony</p>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="100">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <p>Yobe State Service Medal</p>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="200">
                <FontAwesomeIcon icon={faPeace} className="icon" />
                <p>Peace Advocate Honor</p>
              </div>
              <div className="card" data-aos="zoom-in" data-aos-delay="300">
                <FontAwesomeIcon icon={faHandsHelping} className="icon" />
                <p>Ambassador of Unity Award</p>
              </div>
            </div>
          </section>
          {/* IMPACT STATS (ZIGZAG TIMELINE) */}
          <div className="impact-stats">
            <center>
              <h2>Impact Stats</h2>
            </center>
            <div className="zigzag-item left" data-aos="fade-right">
              <div className="zigzag-content">
                <h4>20+</h4>
                <p>Interfaith summits conducted across the state</p>
              </div>
            </div>
            <div className="zigzag-item right" data-aos="fade-left">
              <div className="zigzag-content">
                <h4>5,000+</h4>
                <p>Pilgrims supported through Hajj coordination</p>
              </div>
            </div>
            <div className="zigzag-item left" data-aos="fade-right">
              <div className="zigzag-content">
                <h4>100+</h4>
                <p>Communities impacted by education outreach</p>
              </div>
            </div>
            <div className="zigzag-item right" data-aos="fade-left">
              <div className="zigzag-content">
                <h4>10,000+</h4>
                <p>Youths engaged through peace and harmony initiatives</p>
              </div>
            </div>
          </div>
          {/* RELATED LINK */}
          <section className="related-link" data-aos="fade-up">
            <h3>You may also like to view:</h3>
            <Link to="/customs-service" className="related-card">
              <img src="/images/ncs.png" alt="Customs Logo" />
              <p>View Nigeria Customs Service History</p>
            </Link>
          </section>
        </div>
    </div>
  );
};

export default YobeGovernmentService;
