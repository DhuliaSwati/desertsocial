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
                  Sist oppdatert: 27. mars 2025
                </p>

                <p>Velkommen til DesertSocial. Ved å bruke denne nettsiden og våre spill, godtar du følgende vilkår. Dersom du ikke godtar disse, vennligst ikke bruk tjenesten.</p>

                <h2>🎮 1. Om Tjenesten</h2>
                <ul>
                  <li>DesertSocial tilbyr 100 % gratis sosiale casinospill.</li>
                  <li>Det er ingen mulighet for å satse, kjøpe eller vinne ekte penger eller fysiske premier.</li>
                  <li>Dette er ikke et nettcasino eller pengespill i henhold til norsk lov.</li>
                  <li>Alle spill er utelukkende utviklet for underholdning, og har ingen økonomisk verdi.</li>
                </ul>

                <h2>🔞 2. Aldersbegrensning</h2>
                <ul>
                  <li>Tjenesten er kun for personer som er 18 år eller eldre.</li>
                  <li>Ved å bruke nettstedet bekrefter du at du er myndig i henhold til lovverket i ditt land.</li>
                </ul>

                <h2>💳 3. Ingen Penger, Ingen Kjøp</h2>
                <ul>
                  <li>💸 Du kan ikke gjøre innskudd</li>
                  <li>🛒 Det finnes ingen betalingsløsninger</li>
                  <li>🎁 Du kan ikke vinne ekte penger eller varer</li>
                </ul>
                <p>DesertSocial er helt gratis å bruke, og det finnes ingen funksjoner knyttet til ekte penger i noen del av tjenesten.</p>

                <h2>🧠 4. Ansvarlig Bruk</h2>
                <p>Vi anbefaler alle brukere å spille ansvarlig og med måte.</p>
                <p>Dersom du opplever problemer relatert til spilling, kontakt gjerne <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a> – en gratis og anonym hjelpetjeneste i Norge.</p>

                <h2>🔐 5. Personvern og Informasjonskapsler</h2>
                <p>Vi bruker informasjonskapsler og samler inn anonym bruksdata for å forbedre tjenesten.</p>
                <p>Les mer i vår <Link to="/personvernregler">Personvernerklæring.</Link></p>

                <h2>🔁 6. Endringer i Vilkårene</h2>
                <p>Vi kan oppdatere <Link to="/tjenestevilkår">vilkårene</Link> uten forvarsel. Ved videre bruk av nettstedet godtar du endringene.</p>

                <h2>📬 7. Kontakt</h2>
                <p>Har du spørsmål om disse vilkårene? Kontakt oss:</p>
                <p>DesertSocial AS</p>
                <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norge</p>
                <p>📧 E-post: meister@gmail.com</p>
                <p>📞 Telefon: +47 22 83 70 10</p>
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