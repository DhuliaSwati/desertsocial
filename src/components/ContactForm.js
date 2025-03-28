import React, { useState } from 'react';
import './ContactForm.css';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage({
        type: 'success',
        text: 'Meldingen er sendt! Vi vil svare deg snart.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Beklager! Noe gikk galt. Vennligst prøv igjen.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header logo={logo} />
      <div className="contact-page">
        <div className="contact-container">
          <section className="contact-intro">
            <h1>📬 Kontakt Oss</h1>
            <p>Har du spørsmål, tilbakemeldinger eller trenger hjelp?</p>
            <p>Vi hos DesertSocial ønsker å høre fra deg!</p>
            <p>Enten det gjelder ansvarlig spilling, personvern, tekniske problemer eller samarbeid – vi er her for å hjelpe. 🙌</p>
          </section>

          <div className="contact-grid">
            <section className="contact-info">
              <div className="info-card">
                <h2>🧾 Generell Kontakt</h2>
                <ul>
                  <li><span>📧</span> <strong>E-post:</strong> meister@gmail.com</li>
                  <li><span>📞</span> <strong>Telefon:</strong> +47 22 83 70 10</li>
                  <li>
                    <span>📍</span> <strong>Adresse:</strong><br />
                    DesertSocial AS<br />
                    Dronning Eufemias gate 16<br />
                    0191 Oslo, Norge
                  </li>
                  <li>
                    <span>🕒</span> <strong>Åpningstider:</strong><br />
                    Mandag–Fredag: 09:00–17:00<br />
                    Lørdag–Søndag: Stengt
                  </li>
                </ul>
              </div>

              <div className="info-card important-info">
                <h2>💡 Viktig å vite</h2>
                <p>DesertSocial tilbyr kun gratis sosiale casinospill for underholdning.</p>
                <p>Det finnes ingen pengespill, ingen kjøp, og ingen gevinster i ekte penger på denne plattformen.</p>
                <p>For spørsmål knyttet til ansvarlig spilling, anbefaler vi <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a>.</p>
              </div>

              <div className="info-card privacy-info">
                <h2>🛡️ Personvern</h2>
                <p>Lurer du på hvordan vi håndterer dine data?</p>
                <p>Les vår <a href="/personvernregler">Personvernerklæring</a> og <a href="/tjenestevilkår">Vilkår for bruk</a> for full informasjon.</p>
              </div>
            </section>

            <section className="contact-form-section">
              <h2>✍️ Send oss en melding</h2>
              {submitMessage && (
                <div className={`message ${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ditt Navn"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Din E-postadresse"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Emne"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Din Melding"
                    rows="5"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sender...' : 'Send Melding'}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;