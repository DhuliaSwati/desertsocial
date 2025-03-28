import { useState } from 'react';
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Link} from "react-router-dom"
import "../index.css"

export default function Header({logo}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <div className="warning-banner">
                <Container>
                    <p>
                        <span className="warning-icon">🔞</span>
                        DesertSocial er en gratis sosial casinoplattform. Vi samler ikke inn betalinger, innsatser eller økonomisk informasjon, og vi tilbyr ikke pengespill eller muligheten til å vinne ekte penger.
                    </p>
                </Container>
            </div>
            <header>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={8} md={8}>
                            <Link to="/">
                                <img src={logo} alt="Logo" className="header-logo" />
                            </Link>
                        </Col>
                        
                        {/* Desktop Menu */}
                        <Col xs={4} md={4} className="d-none d-md-block">
                            <div className="links">
                                <Link className="linkBtn" to="/spill">Spill nå</Link>
                            </div>
                        </Col>

                        {/* Mobile Burger Menu */}
                        <Col xs={4} className="d-md-none text-right">
                            <button 
                                className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </Col>
                    </Row>
                </Container>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                    <div className="mobile-menu-content">
                        <Link 
                            className="mobile-link" 
                            to="/spill" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Spill nå
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}