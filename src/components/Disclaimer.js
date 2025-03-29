import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo.png";
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="disclaimer-page">
        <div className="disclaimer-container">
          <div className="disclaimer-content">
            <section className="disclaimer-header">
              <h1>⚠️ Ansvarsfraskrivelse</h1>
              <p className="update-date">Sist oppdatert: 29. mars 2025</p>
              <p className="intro-text">
                Dette nettstedet og dets innhold er levert av DesertSocial AS som en gratis sosial underholdningstjeneste.
              </p>
            </section>

            <section className="disclaimer-section gaming-section">
              <h2>🎮 Ingen pengespill</h2>
              <div className="feature-grid">
                <div className="feature-item">
                  <span className="feature-icon">💸</span>
                  <p>Vi tilbyr ikke spill med ekte penger</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">❌</span>
                  <p>Du kan ikke satse eller vinne penger eller premier</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🆓</span>
                  <p>Alle spill er 100 % gratis å spille</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <p>All spilling foregår for underholdningens skyld</p>
                </div>
              </div>
            </section>

            <section className="disclaimer-section legal-section">
              <h2>🧑‍⚖️ Juridisk ansvar</h2>
              <p className="section-intro">Vi gir ingen garantier om:</p>
              <ul className="legal-list">
                <li>Spillenes nøyaktighet eller fullstendighet</li>
                <li>At spilling på plattformen gir gevinst i reelle pengespill</li>
                <li>Kontinuerlig tilgjengelighet eller teknisk feilfrihet</li>
              </ul>
              <p className="emphasis">All bruk skjer på eget ansvar.</p>
            </section>

            <section className="disclaimer-section responsible-section">
              <h2>🧠 Spill ansvarlig</h2>
              <p>
                Selv om dette ikke er pengespill, oppfordrer vi alle brukere til å spille med måte og følge prinsippene for ansvarlig spilling.
              </p>
              <div className="help-box">
                <p>Trenger du hjelp? Besøk</p>
                <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
                  www.hjelpelinjen.no
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
