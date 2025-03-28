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
                  Sist oppdatert: 27. mars 2025
                </p>

                <p>Hos DesertSocial er vi opptatt av at spilling skal være morsomt, trygt og sunt. Vi tilbyr kun sosiale casinospill som er gratis å spille, og som ikke involverer ekte penger.</p>

                <h2>💡 Hva betyr ansvarlig spilling?</h2>
                <p>Ansvarlig spilling handler om å spille for underholdning – uten at det går utover hverdagen din, økonomien eller forholdene dine.</p>
                <p>Selv om spillene våre ikke er pengespill, er det fortsatt viktig å ha gode spillevaner.</p>

                <h2>✅ Våre prinsipper for ansvarlig spilling:</h2>
                <ul>
                  <li>🎮 Spill for moro – ikke som en måte å løse problemer på</li>
                  <li>🧘 Ta pauser – ikke spill over lengre perioder uten avbrekk</li>
                  <li>⏰ Sett tidsgrenser – og hold deg til dem</li>
                  <li>👀 Vær bevisst – kjenn igjen tegn på avhengighet eller tvang</li>
                  <li>🔞 Plattformen er kun for brukere over 18 år</li>
                </ul>

                <h2>⚠️ Er du bekymret for ditt eget eller andres spillmønster?</h2>
                <p>Hvis du føler at spilling tar overhånd – selv med gratisspill – anbefaler vi at du snakker med noen.</p>
                <p>👉 Hjelpelinjen.no tilbyr gratis og anonym rådgivning for alle i Norge:</p>
                <p>🔗 <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a></p>
                <p>📞 800 800 40 (døgnåpent)</p>

                <h2>🔒 Spill trygt på DesertSocial</h2>
                <ul>
                  <li>DesertSocial tilbyr kun gratis sosiale casinospill</li>
                  <li>Det finnes ingen innsats, kjøp eller mulighet for å vinne ekte penger</li>
                  <li>Fremgang i spillene gir ingen fordel i ekte pengespill</li>
                </ul>

                <h2>🧠 Trenger du tips?</h2>
                <ul>
                  <li>Spill med venner – gjør det sosialt</li>
                  <li>Sett opp egne grenser: for tid og frekvens</li>
                  <li>Husk: Dette er bare et spill, ikke en konkurranse om å vinne</li>
                </ul>

                <h2>📩 Kontakt oss</h2>
                <p>Har du spørsmål eller trenger hjelp?</p>
                <p>DesertSocial AS</p>
                <p>📧 meister@gmail.com</p>
                <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norge</p>
                <p> +47 22 83 70 10</p>
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