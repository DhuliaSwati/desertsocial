import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo.png";

const PrivacyPolicy = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">🔐 Personvernerklæring</h1>
                <p className="version-info text-center mb-4">
                  Sist oppdatert: 27. mars 2025
                </p>

                <p>Hos DesertSocial tar vi personvernet ditt på alvor. Denne erklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjonen din når du besøker nettstedet vårt.</p>
                <p>👉 Merk: DesertSocial er en gratis sosial casinoplattform.</p>
                <p>Vi tilbyr ikke pengespill, ingen kjøp, og det er ingen mulighet for å vinne ekte penger eller premier.</p>

                <h2>🧾 1. Hvilken informasjon samler vi inn?</h2>
                <p>Vi samler kun inn anonym bruksdata for å forbedre brukeropplevelsen. Dette kan inkludere:</p>
                <ul>
                  <li>🌐 Nettlesertype og enhet</li>
                  <li>🕒 Tid og varighet for besøk</li>
                  <li>📄 Hvilke sider som ble besøkt</li>
                  <li>📍 Omtrentlig plassering (basert på IP-adresse)</li>
                </ul>
                <p>Vi samler ikke inn personlig identifiserbar informasjon, som navn, adresse eller betalingsopplysninger.</p>
                <p>Vi behandler heller ingen finansielle data, siden tjenesten ikke involverer ekte penger.</p>

                <h2>🍪 2. Bruk av informasjonskapsler (cookies)</h2>
                <p>Vi bruker informasjonskapsler for å:</p>
                <ul>
                  <li>Forstå hvordan besøkende bruker nettstedet</li>
                  <li>Forbedre funksjonalitet og brukeropplevelse</li>
                  <li>Måle trafikk og ytelse</li>
                </ul>
                <p>Du kan selv kontrollere eller slette cookies i nettleserinnstillingene dine.</p>

                <h2>🧠 3. Hvordan bruker vi data?</h2>
                <p>Dataene brukes kun til:</p>
                <ul>
                  <li>📊 Statistikk og analyse (f.eks. Google Analytics)</li>
                  <li>🔧 Teknisk forbedring av nettstedet</li>
                  <li>🛡️ Beskyttelse mot misbruk og sikkerhetsbrudd</li>
                </ul>
                <p>Vi selger eller deler ikke data med tredjeparter, med mindre det er nødvendig for teknisk drift (f.eks. serverhosting).</p>

                <h2>🎰 4. Ingen pengespill</h2>
                <p>DesertSocial er ikke et nettcasino med ekte penger. Spillene våre er:</p>
                <ul>
                  <li>🆓 Helt gratis å spille</li>
                  <li>💸 Har ingen mulighet for innskudd eller kjøp</li>
                  <li>❌ Tilbyr ikke gevinster i ekte penger eller fysiske premier</li>
                </ul>
                <p>Tjenesten er kun ment for underholdning og sosial moro.</p>

                <h2>🧑‍⚖️ 5. Dine rettigheter</h2>
                <p>I henhold til personvernforordningen (GDPR) har du rett til:</p>
                <ul>
                  <li>📝 Innsyn i hvilke data vi har</li>
                  <li>✏️ Rette feilaktig informasjon</li>
                  <li>❌ Be om sletting av dine data ("retten til å bli glemt")</li>
                  <li>🛑 Begrense eller motsette deg visse former for databruk</li>
                </ul>
                <p>For å utøve disse rettighetene, kontakt oss på meister@gmail.com.</p>

                <h2>🧷 6. Datasikkerhet</h2>
                <p>Vi benytter moderne sikkerhetstiltak for å beskytte informasjon mot uautorisert tilgang, endringer eller tap.</p>

                <h2>🌍 7. Lagring og behandling i EØS</h2>
                <p>All databehandling skjer i henhold til EUs personvernforordning (GDPR), og data lagres innenfor EØS-området.</p>

                <h2>📬 8. Kontakt</h2>
                <p>Har du spørsmål angående denne personvernerklæringen eller dine data?</p>
                <p>DesertSocial AS</p>
                <p>📧 E-post: meister@gmail.com</p>
                <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norge</p>
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

export default PrivacyPolicy;