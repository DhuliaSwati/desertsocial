import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import "./Policy.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const TermsService = () => {
  return (
    <>
      <Header logo={logo}/>
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">Vilkår for bruk</h1>
                <p className="version-info text-center mb-4">
                  Sist oppdatert: 29. mars 2025
                </p>

                <p>Velkommen til DesertSocial! Ved å bruke nettstedet vårt eller spille spillene vi tilbyr, godtar du å følge disse vilkårene. Dersom du ikke er enig i vilkårene, ber vi deg om å avslutte bruken av tjenesten.</p>

                <h2>🎮 1. Om tjenesten</h2>
                <p>DesertSocial tilbyr sosiale casinospill som er helt gratis å spille.</p>
                <ul>
                  <li>Det er ikke mulig å satse, kjøpe eller vinne ekte penger eller fysiske gjenstander.</li>
                  <li>Tjenesten er ikke et pengespill eller nettcasino i henhold til norsk lov.</li>
                  <li>Spillene er kun ment for underholdning og har ingen økonomisk verdi.</li>
                </ul>

                <h2>🔞 2. Aldersgrense</h2>
                <p>Tjenesten er kun tilgjengelig for personer over 18 år.</p>
                <p>Ved å bruke nettstedet bekrefter du at du er myndig i henhold til lovverket i ditt hjemland.</p>

                <h2>💳 3. Ingen penger, ingen kjøp</h2>
                <ul>
                  <li>Ingen innskudd kreves eller aksepteres</li>
                  <li>Ingen betalingsløsninger tilbys</li>
                  <li>Ingen gevinster i form av ekte penger eller varer</li>
                </ul>
                <p>DesertSocial er og forblir 100 % gratis.</p>

                <h2>🧠 4. Ansvarlig bruk</h2>
                <p>Vi oppfordrer alle brukere til å spille med måte og som en form for underholdning.</p>
                <p>Opplever du utfordringer knyttet til spillvaner? Besøk <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a> – en gratis og anonym hjelpetjeneste i Norge.</p>

                <h2>🔐 5. Personvern og informasjonskapsler</h2>
                <p>Vi samler inn anonym bruksstatistikk og benytter informasjonskapsler for å forbedre brukeropplevelsen.</p>
                <p>Mer informasjon finner du i vår <Link to="/personvernregler">Personvernerklæring</Link>.</p>

                <h2>🔁 6. Endringer i vilkårene</h2>
                <p>Vilkårene kan oppdateres uten forvarsel. Ved å fortsette å bruke nettstedet, aksepterer du automatisk eventuelle endringer.</p>

                <h2>📬 7. Kontakt</h2>
                <p>Har du spørsmål eller ønsker å komme i kontakt med oss?</p>
                <p>DesertSocial AS</p>
                <p>📍 Hovfaret 4, 0275 Oslo, Norge</p>
                <p>📧 E-post: desertsocial@gmail.com</p>
                <p>📞 Telefon: +47 22 44 80 80</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TermsService;