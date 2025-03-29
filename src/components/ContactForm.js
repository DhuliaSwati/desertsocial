import React from 'react';
import './ContactForm.css';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="contact-page">
        <div className="contact-container">
          {/* Play Now Section */}
          <section className="play-now-section">
            <h1>🎮 Spill nå</h1>
            <p>Klar for å kose deg med gratis og sosiale casinospill?</p>
            <p>Trykk på "Spill nå" og bli med!</p>
            <Link to="/spill" className="play-now-button">Spill nå</Link>
          </section>

          {/* Contact Intro Section */}
          <section className="contact-intro">
            <h2>📬 Kontakt oss</h2>
            <p>Har du spørsmål, tilbakemeldinger eller trenger hjelp?</p>
            <p>Vi hos DesertSocial setter pris på å høre fra deg!</p>
            <p>Uansett om det gjelder tekniske problemer, ansvarlig spilling, personvern, forslag eller samarbeid – vi er her for deg. 🙌</p>
          </section>

          <div className="info-grid">
            {/* General Contact */}
            <div className="info-card">
              <h3>🧾 Generell kontakt</h3>
              <ul>
                <li><span>📧</span> E-post: desertsocial@gmail.com</li>
                <li><span>📞</span> Telefon: +47 22 44 80 80</li>
                <li>
                  <span>📍</span> Adresse:<br />
                  DesertSocial AS<br />
                  Hovfaret 4, 0275 Oslo, Norge
                </li>
                <li>
                  <span>🕒</span> Åpningstider:<br />
                  Mandag–Fredag: 09:00–17:00<br />
                  Lørdag–Søndag: Stengt
                </li>
              </ul>
            </div>

            {/* Important Information */}
            <div className="info-card">
              <h3>💡 Viktig informasjon</h3>
              <p>DesertSocial tilbyr kun gratis sosiale casinospill for underholdning.</p>
              <ul className="bullet-list">
                <li>Ingen pengespill</li>
                <li>Ingen innskudd eller kjøp</li>
                <li>Ingen gevinster i ekte penger</li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="info-card">
              <h3>🛡️ Personvern</h3>
              <p>Lurer du på hvordan vi håndterer dine data?</p>
              <p>Vi anbefaler at du leser vår:</p>
              <ul className="link-list">
                <li><Link to="/personvernregler">Personvernerklæring</Link></li>
                <li><Link to="/tjenestevilkar">Vilkår for bruk</Link></li>
              </ul>
            </div>

            {/* Responsible Gaming */}
            <div className="info-card">
              <h3>🧠 Trenger du hjelp med spillevaner?</h3>
              <p>Vi tar ansvarlig spilling på alvor. Dersom du eller noen du kjenner trenger noen å snakke med, ta kontakt med:</p>
              <p><a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">🔗 www.hjelpelinjen.no</a></p>
              <p>📞 800 800 40 (gratis og døgnåpen tjeneste)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;