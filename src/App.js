import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import star from "./assets/star.png";
import img1 from "./assets/img1.png";
import img5 from "./assets/img5.png";
import logo from "./assets/Logo.png";
import AgeVerificationPopup from "./components/AgeVerificationPopup";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showDenied, setShowDenied] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified');
    if (isVerified === 'true') {
      setVerified(true);
      setShowPopup(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ageVerified', 'true');
    setVerified(true);
    setShowPopup(false);
  };

  const handleReject = () => {
    setShowDenied(true);
  };

  return (
    <>
      {showPopup && (
        <AgeVerificationPopup 
          onAccept={handleAccept}
          onReject={handleReject}
          showDenied={showDenied}
        />
      )}
      
      {(verified || !showPopup) && (
        <>
          <Header logo={logo}/>
          {/* Hero Section */}
          <div className="heroSection">
            <Container>
              <Row>
                <Col className="outerSection">
                  <h1 className="h1Heading">VELKOMMEN TIL DESERTSOCIAL</h1>
                  <h2 className="subHeading">GRATIS SOSIALT CASINO – BARE FOR MORO!</h2>
                  <p className="subPara">Spill casinospill uten penger, press eller risiko.</p>
                  <Link to="/spill" className="linkBtn">Spill Nå</Link>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Second Section */}
          <div className="section">
            <div className="outerSection">
              <div className="sectionHead">
                <img src={star} alt="stjerne" />
                <h2 className="h2Heading">DesertSocial – Bare moro, ingen penger involvert</h2>
                <img src={star} alt="stjerne" />
              </div>
              <p className="subPara">✨ 100 % gratis. Ingen risiko. Ren underholdning.</p>
              <div className="imagesSection">
                <img src={img1} alt="Spill1" />
              </div>
              <Link to="/spill" className="sectionBtn">Spill nå – ingen ekte penger nødvendig!</Link>
            </div>

            {/* Third Section */}
            <div className="outerSection">
              <h2 className="h2Heading">DesertSocial – Norges morsomste gratis casinoopplevelse</h2>
              <p className="subPara">Ingen penger. Ingen risiko. Bare moro.</p>
              <img src={img5} alt="Finn ut mer" />
              <Link to="/spill" className="sectionBtn">Spill nå – helt gratis, ingen ekte penger nødvendig!</Link>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
