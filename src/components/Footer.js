import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/Logo-white.png";
import plus from "../assets/18plus.png"

export default function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-5">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </Col>
                </Row>
            </Container>

            {/* New Contact Information Section */}
            <Container className="contact-info-section py-5">
                <Row>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">Telefon</h4>
                            <p className="contact-text">+47 22 83 70 10</p>
                        </div>
                    </Col>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">E-post</h4>
                            <p className="contact-text">meister@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">Adresse</h4>
                            <p className="contact-text">Dronning Eufemiasgate 16,<br /> 0191 Oslo, Norway</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="footerTop py-4">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <h3 className="h3Heading text-yellow">Sikrer at alle spiller ansvarlig</h3>
                        <p className="footerSub">Finn ut mer på vår dedikerte side for Ansvarlig Sosialt Spill.</p>
                    </Col>
                    <Col xs={10} md={5} className="mb-3 mb-md-0">
                        <p className="highlight mobile-full-width">
                            <Link to="/ansvarlig-sosialt-spill">GÅ TIL ANSVARLIG SOSIALT SPILL</Link>
                        </p>
                    </Col>
                    <Col xs={2} md={1} className="text-right">
                        <img src={plus} alt="18+" className="age-restriction" />
                    </Col>
                </Row>
            </Container>
            
            <Container className="footerMiddle pb-4">
                <Row>
                    <Col xs={12} md={9} className="mb-4 mb-md-0">
                        <div className="disclaimer-text">
                            <p>Dette er et gratis sosialt kasino med fokus på underholdning.</p>
                            <p>Det er verken ekte penger involvert, og det er ikke mulig å vinne pengepremier.</p>
                            
                            <p className="disclaimer-heading">Ansvarsfraskrivelse:</p>
                            <p>Nettstedet er utelukkende utviklet for gratis underholdning.</p>
                            <p>Alle spillene på siden er egenutviklede og laget kun for underholdningsformål.</p>
                            <p>Spillene er beregnet for voksne over 18 år.</p>
                            <p>Våre sosiale kasinospill innebærer ingen bruk av ekte penger, og gir ingen mulighet for å vinne gevinster eller kontantpremier.</p>
                            <p>Fremgang i spillene er ikke en indikator på ferdigheter i pengespill med ekte penger.</p>
                            
                            <p className="disclaimer-footer">Vi oppfordrer til ansvarlig spill, og understreker at spillene på DesertSocial er ment utelukkende som underholdning.</p>
                        </div>
                    </Col>
                    
                    <Col xs={12} md={3} className="footer-links-col">
                        <ul className="footer-links">
                            <Link to="/tjenestevilkår"><li>Tjenestevilkår</li></Link>
                            <Link to="/ansvarlig-sosialt-spill"><li>Ansvarlig Sosialt Spill</li></Link>
                            <Link to="/personvernregler"><li>Personvernregler</li></Link>
                            <Link to="/kontakt-oss"><li>Kontakt oss</li></Link>
                            <Link to="/ansvarsfraskrivelse"><li>Ansvarsfraskrivelse</li></Link>
                            <Link to="/om-oss"><li>Om oss</li></Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
            
            <Container className="footerBottom py-3">
                <Row>
                    <Col className="text-center">
                        <p className="copyright">© 2025 DesertSocial AS – Kun for underholdning. Ingen pengespill. Ingen ekte penger. Ingen pengepremier.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}