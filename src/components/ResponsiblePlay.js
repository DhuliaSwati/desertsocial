import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo.png";

const ResponsiblePlay = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">🎯 Ansvarlig spilling</h1>
                <p className="version-info text-center mb-4">
                  Sist oppdatert: 29. mars 2025
                </p>

                <p>Hos DesertSocial ønsker vi at spilling skal være gøy, trygt og balansert.</p>
                <p>Vi tilbyr kun sosiale casinospill – helt gratis og uten noen form for pengebruk.</p>

                <h2>💡 Hva betyr ansvarlig spilling?</h2>
                <p>Ansvarlig spilling handler om å bruke spill som en form for underholdning – ikke som en måte å håndtere problemer eller stress på.</p>
                <p>Selv om våre spill ikke involverer ekte penger, er det fortsatt viktig å ha sunne spillevaner.</p>

                <h2>✅ Våre prinsipper for ansvarlig spilling</h2>
                <ul>
                  <li>🎮 Spill for moro skyld – ikke som en løsning på problemer</li>
                  <li>🧘‍♀️ Ta pauser – unngå lange spilløkter uten avbrekk</li>
                  <li>⏰ Sett grenser for tid og spill – og hold deg til dem</li>
                  <li>👀 Vær oppmerksom – kjenn igjen tegn på tvang eller avhengighet</li>
                  <li>🔞 Plattformen er kun for personer over 18 år</li>
                </ul>

                <h2>⚠️ Bekymret for egne eller andres spillvaner?</h2>
                <p>Selv om DesertSocial kun tilbyr gratisspill, kan det være nyttig å prate med noen dersom spillingen føles overdreven eller ukontrollert.</p>
                <p>👉 Vi anbefaler Hjelpelinjen.no – en gratis, anonym og døgnåpen hjelpetjeneste i Norge.</p>
                <p>📞 800 800 40</p>

                <h2>🔒 Spill trygt hos DesertSocial</h2>
                <ul>
                  <li>Våre spill er 100 % gratis</li>
                  <li>Det er ingen innskudd, kjøp eller gevinster i ekte penger</li>
                  <li>Spillfremgang gir ingen fordeler i pengespill</li>
                  <li>Alt innhold er kun ment for underholdning</li>
                </ul>

                <h2>🧠 Tips til god spillopplevelse</h2>
                <ul>
                  <li>Spill sammen med venner – gjør det sosialt og hyggelig</li>
                  <li>Sett dine egne grenser for tid og hyppighet</li>
                  <li>Husk: Dette er et spill – ikke en konkurranse om å vinne</li>
                </ul>

                <h2>📩 Kontakt oss</h2>
                <p>Har du spørsmål eller trenger råd?</p>
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

export default ResponsiblePlay;