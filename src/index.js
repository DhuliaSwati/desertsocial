import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "./components/Game";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TermsService from './components/TermsService';
import ResponsiblePlay from './components/ResponsiblePlay';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from "./components/ContactForm";
import About from './components/About';
import Disclaimer from './components/Disclaimer';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

// Add this scroll to top component
function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FpjsProvider 
    loadOptions={{
      apiKey: "Hejdz9lQnDMXSQ8PRQza",
      region: "eu"
    }}
   >
    <BrowserRouter>
    <ScrollToTop /> 
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/spill" element={<Game />} />
                <Route path="/tjenestevilkår" element={<TermsService />} />
                <Route path="/ansvarlig-sosialt-spill" element={<ResponsiblePlay />} />
                <Route path="/personvernregler" element={<PrivacyPolicy />} />
                <Route path="/kontakt-oss" element={<ContactUs />} />
                <Route path="/om-oss" element={<About />} />
                <Route path="/ansvarsfraskrivelse" element={<Disclaimer />} />
            </Routes>
            </BrowserRouter>
    </FpjsProvider>
  </React.StrictMode>
);
reportWebVitals();

