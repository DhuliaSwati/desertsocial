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
                  Sist oppdatert: 29. mars 2025
                </p>

                <p>Hos DesertSocial tar vi personvernet ditt på alvor. Denne erklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjon når du besøker nettstedet vårt og bruker våre tjenester.</p>
                <p>💡 Merk: DesertSocial er en gratis sosial casinoplattform uten pengespill eller kjøpsmuligheter.</p>

                <h2>🧾 1. Hvilken informasjon samler vi inn?</h2>
                <p>Vi samler kun inn anonym, ikke-personlig informasjon med formål om å forbedre tjenesten. Dette inkluderer:</p>
                <ul>
                  <li>🌐 Nettlesertype og enhet</li>
                  <li>🕒 Besøkets lengde og tidspunkt</li>
                  <li>📄 Hvilke sider som er besøkt</li>
                  <li>📍 Omtrentlig geografisk plassering (basert på IP-adresse)</li>
                </ul>
                <p>❌ Vi samler ikke inn navn, e-post, adresse, betalingsdata eller annen personlig informasjon.</p>
                <p>💳 Tjenesten involverer ikke økonomiske transaksjoner eller betalingsinformasjon.</p>

                <h2>🍪 2. Informasjonskapsler (Cookies)</h2>
                <p>Vi bruker cookies for å:</p>
                <ul>
                  <li>Forstå hvordan nettstedet brukes</li>
                  <li>Forbedre funksjonalitet og brukeropplevelse</li>
                  <li>Analysere trafikk og teknisk ytelse</li>
                </ul>
                <p>Du kan når som helst slå av eller slette cookies i nettleserens innstillinger.</p>

                <h2>🧠 3. Hvordan bruker vi data?</h2>
                <p>All innsamlet data brukes kun til:</p>
                <ul>
                  <li>📊 Statistikk og anonym analyse (f.eks. via Google Analytics)</li>
                  <li>🔧 Teknisk forbedring av nettstedets ytelse og stabilitet</li>
                  <li>🛡️ Beskyttelse mot misbruk og sikkerhetstrusler</li>
                </ul>
                <p>🔒 Vi deler ikke data med tredjeparter, med unntak av nødvendige tekniske leverandører (som hosting).</p>

                <h2>🎰 4. Ingen pengespill</h2>
                <p>DesertSocial tilbyr kun gratis spillopplevelser.</p>
                <ul>
                  <li>🆓 Spillene er helt kostnadsfrie</li>
                  <li>💸 Det finnes ingen kjøps- eller innsatsfunksjoner</li>
                  <li>🎁 Ingen premier eller gevinster i ekte penger</li>
                </ul>
                <p>Alt innhold er utviklet for underholdning og sosialt samvær, uten økonomisk risiko.</p>

                <h2>🧑‍⚖️ 5. Dine rettigheter (GDPR)</h2>
                <p>I tråd med EUs personvernforordning (GDPR) har du rett til å:</p>
                <ul>
                  <li>📝 Få innsyn i hvilke data vi har om deg</li>
                  <li>✏️ Be om retting av eventuelle feil</li>
                  <li>❌ Be om sletting av data ("retten til å bli glemt")</li>
                  <li>🛑 Motsette deg visse former for databehandling</li>
                </ul>
                <p>For å bruke dine rettigheter, kontakt oss via e-post.</p>

                <h2>🧷 6. Datasikkerhet</h2>
                <p>Vi benytter oppdaterte sikkerhetstiltak og bransjestandarder for å hindre uautorisert tilgang, endring eller tap av informasjon.</p>

                <h2>🌍 7. Lagring og behandling i EØS</h2>
                <p>All databehandling skjer innenfor EØS og følger kravene i GDPR.</p>

                <h2>📬 8. Kontakt</h2>
                <p>Har du spørsmål om personvernet vårt eller ønsker å utøve dine rettigheter?</p>
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

export default PrivacyPolicy;