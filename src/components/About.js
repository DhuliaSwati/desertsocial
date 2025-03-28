import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo.png";
import './About.css';

const About = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="about-page">
        <div className="about-container">
          {/* Hero Section */}
          <section className="about-hero">
            <h1>🙋 Om oss</h1>
            <p className="hero-tagline">Vi gjør spilling gøy, gratis og ansvarlig.</p>
            <div className="hero-description">
              <p>DesertSocial er en norsk plattform for sosiale casinospill – laget for deg som elsker spill, men ønsker en trygg og pengeløs opplevelse.</p>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2>Vi tilbyr et stort utvalg av casinoinspirerte spill som er:</h2>
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">🆓</span>
                <h3>100% gratis å spille</h3>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🎲</span>
                <h3>For underholdningsformål</h3>
              </div>
              <div className="feature-card">
                <span className="feature-icon">❌</span>
                <h3>Uten ekte penger, innsats eller premier</h3>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h2>🎯 Hva vi står for</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-header">
                  <span className="value-icon">🎮</span>
                  <h3>Spill uten press</h3>
                </div>
                <p>Vi tror at spilling skal være morsomt – ikke knyttet til risiko, tap eller pengebruk.</p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <span className="value-icon">🔞</span>
                  <h3>For voksne (18+)</h3>
                </div>
                <p>Plattformen er kun ment for voksne. Vi promoterer ansvarlig bruk og har ingen elementer av pengespill.</p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <span className="value-icon">🛡️</span>
                  <h3>Trygghet og åpenhet</h3>
                </div>
                <p>Vi samler ikke inn personlig betalingsinformasjon. All data som behandles er anonym og i tråd med GDPR og norsk lovgivning.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h2>📍 Vår beliggenhet</h2>
            <div className="contact-card">
              <div className="company-info">
                <h3>DesertSocial AS</h3>
                <p>Dronning Eufemias gate 16</p>
                <p>0191 Oslo, Norge</p>
              </div>
              <div className="contact-details">
                <p><span>📧</span> E-post: <a href="mailto:meister@gmail.com">meister@gmail.com</a></p>
                <p><span>📞</span> Telefon: <a href="tel:+4722837010">+47 22 83 70 10</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;