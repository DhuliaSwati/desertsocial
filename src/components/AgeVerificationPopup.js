import React from 'react';
import { Link } from 'react-router-dom';
import './AgeVerificationPopup.css';

const AgeVerificationPopup = ({ onAccept, onReject, showDenied }) => {
  return (
    <div className="verification-popup">
      {!showDenied ? (
        <div className="popup-content">
          <h2>🔞 Før du spiller</h2>
          <h3>Velkommen til DesertSocial!</h3>
          <p>Dette er et gratis sosialt casinospill utviklet kun for underholdning.</p>
          
          <ul className="feature-list">
            <li><span>❌</span> Ingen pengespill</li>
            <li><span>❌</span> Ingen kjøp eller premier</li>
            <li><span>✅</span> 100 % gratis</li>
            <li><span>🔞</span> Kun for brukere over 18 år</li>
            <li><span>🧠</span> Spill ansvarlig</li>
          </ul>

          <p className="consent-text">
            Ved å klikke på Godta, bekrefter du at du er over 18 år og samtykker til våre:
          </p>
          <ul className="terms-list">
            <li>
              <Link to="/ansvarsfraskrivelse" target="_blank" rel="noopener noreferrer">
                Ansvarsfraskrivelse
              </Link>
            </li>
            <li>
              <Link to="/ansvarlig-sosialt-spill" target="_blank" rel="noopener noreferrer">
                Ansvarlig spill
              </Link>
            </li>
            <li>
              <Link to="/personvernregler" target="_blank" rel="noopener noreferrer">
                Personvernerklæring
              </Link>
            </li>
          </ul>

          <div className="popup-buttons">
            <button className="accept-button" onClick={onAccept}>
              ✅ Godta og spill
            </button>
            <button className="reject-button" onClick={onReject}>
              Avvis
            </button>
          </div>
        </div>
      ) : (
        <div className="popup-content denied">
          <h2>⚠️ Tilgang nektet</h2>
          <p>Du har valgt å ikke godta vilkårene våre.</p>
          <p>Derfor får du ikke tilgang til innholdet på denne siden.</p>
          <p>DesertSocial er en gratis sosial casinoplattform kun for underholdning og for brukere over 18 år.</p>
          <p>Det tilbys ingen ekte penger, ingen innsats, og ingen gevinster.</p>
          <p className="redirect-text">🔙 Omdirigerer til forsiden...</p>
        </div>
      )}
    </div>
  );
};

export default AgeVerificationPopup;