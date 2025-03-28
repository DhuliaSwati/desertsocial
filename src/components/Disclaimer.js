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
              <p className="update-date">Sist oppdatert: 27. mars 2025</p>
              <p className="intro-text">
                Dette nettstedet og dets innhold er levert av DesertSocial AS som en gratis sosial underholdningstjeneste.
              </p>
            </section>

            <section className="disclaimer-section gaming-section">
              <h2>🎮 Ingen pengespill</h2>
              <ul>
                <li><span>💸</span> Vi tilbyr ikke spill med ekte penger</li>
                <li><span>❌</span> Du kan ikke satse eller vinne penger eller premier</li>
                <li><span>🆓</span> Alle spill er 100 % gratis å spille</li>
                <li><span>🎯</span> All spilling foregår for underholdningens skyld</li>
              </ul>
            </section>

            <section className="disclaimer-section legal-section">
              <h2>🧑‍⚖️ Juridisk ansvar</h2>
              <p>Vi gir ingen garantier om:</p>
              <ul>
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
              <p>
                Trenger du hjelp? Besøk{' '}
                <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
                  www.hjelpelinjen.no
                </a>
              </p>
            </section>

            <section className="disclaimer-section contact-section">
              <h2>📬 Kontakt</h2>
              <p>For spørsmål knyttet til dette ansvarsfraskrivelsen:</p>
              <div className="contact-info">
                <p className="company-name">DesertSocial AS</p>
                <p>
                  <span>📧</span>{' '}
                  <a href="mailto:meister@gmail.com">meister@gmail.com</a>
                </p>
                <p>
                  <span>📍</span> Dronning Eufemias gate 16, 0191 Oslo, Norge
                </p>
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
