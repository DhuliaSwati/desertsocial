import React from 'react';
import { Link } from 'react-router-dom';
import './AgeVerificationPopup.css';

const AgeVerificationPopup = ({ onAccept, onReject, showDenied }) => {
  return (
    <div className="verification-popup">
      {!showDenied ? (
        <div className="popup-content">
          <div className="popup-header">
            <h2>🔞 Velkommen til DesertSocial!</h2>
            <p className="subtitle">Før du går videre, her er det viktig å vite:</p>
          </div>

          <ul className="feature-list">
            <li><span>✅</span> Dette er et gratis sosialt casinospill laget kun for moro</li>
            <li><span>🔐</span> Vi samler ikke inn betaling eller økonomisk informasjon</li>
            <li><span>🚫</span> Ingen innskudd, ingen pengepremier – bare underholdning</li>
            <li><span>🎯</span> Spillene våre er kun for voksne (18+)</li>
            <li><span>🧠</span> Vi oppfordrer til ansvarlig spilling</li>
          </ul>

          <div className="consent-section">
            <p className="consent-text">
              Ved å trykke på «Godta og spill», bekrefter du at du er over 18 år og godtar:
            </p>
            <ul className="terms-list">
              <li>
                <Link to="/ansvarlig-sosialt-spill">Våre retningslinjer for ansvarlig spill</Link>
              </li>
              <li>
                <Link to="/personvernregler">Personvernerklæringen vår</Link>
              </li>
              <li>
                <Link to="/ansvarsfraskrivelse">Våre vilkår og ansvarsfraskrivelse</Link>
              </li>
            </ul>
          </div>

          <div className="popup-buttons">
            <button className="accept-button" onClick={onAccept}>
              🟡 Godta og spill
            </button>
            <button className="reject-button" onClick={onReject}>
              ⚫ Avvis
            </button>
          </div>
        </div>
      ) : (
        <div className="popup-content denied">
          <h2>⚠️ Tilgang nektet</h2>
          <p>Du har valgt å ikke godta vilkårene våre.</p>
          <p>Derfor får du ikke tilgang til innholdet på denne siden.</p>
          <p>DesertSocial er en gratis sosial casinoplattform kun for underholdning og for brukere over 18 år.</p>
          <p className="redirect-text">🔙 Omdirigerer til forsiden...</p>
        </div>
      )}
    </div>
  );
};

export default AgeVerificationPopup;