import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import star from "./assets/star.png";
import img1 from "./assets/img1.png";
import img5 from "./assets/img5.png";
import logo from "./assets/Logo.png";
import AgeVerificationPopup from "./components/AgeVerificationPopup";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
// REMOVE: import getFingerprintEvent from "../api/getFingerprintEvent"; // Cannot import backend like this

function App() {
// Data from FingerprintJS client-side SDK
 const {
isLoading: fpIsLoadingSDK, // Renamed for clarity
error: fpErrorSDK,       // Renamed for clarity
data: fpDataSDK,         // Renamed for clarity (contains visitorId, requestId, sealedResult)
getData: refetchFpSDKData    // Renamed for clarity
} = useVisitorData(
  { extendedResult: true },
  { immediate: true }
 );

// State for data fetched and decrypted by our backend
 const [serverFetchedData, setServerFetchedData] = useState(null); // Will hold the unsealed data
 const [serverError, setServerError] = useState(null);
 const [isLoadingServerData, setIsLoadingServerData] = useState(false);

// Function to send sealedResult to backend and get unsealed data
 const fetchFullEventDataFromServer = async (sealedResultToUnseal) => {
  console.log("app.js: selaed result", sealedResultToUnseal);

  if (!sealedResultToUnseal) {
   console.warn("App.js: fetchFullEventDataFromServer called without sealedResult.");
   setServerError("Cannot call backend: sealedResult from SDK is missing.");
   return;
  }

  setIsLoadingServerData(true);
  setServerError(null);
  setServerFetchedData(null);

  try {
   const response = await fetch('/api/getFingerprintEvent', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sealedResult: sealedResultToUnseal }),
   });

   const responseData = await response.json(); // This should be the unsealed data from backend

   if (!response.ok) {
    throw new Error(
     responseData.error ||
      responseData.details ||
      `Server error: ${response.statusText} (${response.status})`
    );
   }
  console.log('App.js: Received unsealed data from server:', responseData);
   setServerFetchedData(responseData);

  } catch (err) {
   console.error('App.js: Error fetching/unsealing data via server:', err);
   setServerError(err.message);
  } finally {
   setIsLoadingServerData(false);
  }
 };

// useEffect to call the backend when sealedResult from SDK is available or changes
 useEffect(() => {
  if (fpDataSDK?.sealedResult) {
console.log("App.js: fpDataSDK.sealedResult is available, calling backend.");
   fetchFullEventDataFromServer(fpDataSDK.sealedResult);
  } else if (fpDataSDK && !fpDataSDK.sealedResult) {
// This case might happen if extendedResult is true but sealed results are not enabled for the API key
console.warn("App.js: fpDataSDK is available but sealedResult is missing. Cannot call backend for unsealing.");
// Optionally, if you still want to call backend with requestId here for the standard flow:
// if (fpDataSDK.requestId) fetchStandardEventDataFromServer(fpDataSDK.requestId);
}
// eslint-disable-next-line react-hooks/exhaustive-deps
 }, [fpDataSDK?.sealedResult]); // Re-run if sealedResult changes

// REMOVE: This client-side decryption attempt is insecure and incorrect
// const identificationEvent = getFingerprintEvent.unsealEventData(sealedResult);
// console.log("identificationEvent", identificationEvent);

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

const handleReloadData = () => {
console.log("App.js: Reload data button clicked.");
// Clear old data
setServerFetchedData(null);
setServerError(null);
// Refetch client-side SDK data. The useEffect above will trigger backend call with new sealedResult.
refetchFpSDKData({ ignoreCache: true });
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

     <Container className="my-4 p-3">
<h4>FingerprintJS Test Area</h4>
<button onClick={handleReloadData} disabled={fpIsLoadingSDK || isLoadingServerData} className="mb-3">
     {(fpIsLoadingSDK || isLoadingServerData) ? 'Laster...' : 'Last inn data på nytt'}
   </button>

    <h5>Client SDK Data (`fpDataSDK`):</h5>
<p>VisitorId: {fpIsLoadingSDK ? 'Laster...' : fpDataSDK?.visitorId || 'N/A'}</p>
     <p>RequestID: {fpIsLoadingSDK ? 'Laster...' : fpDataSDK?.requestId || 'N/A'}</p>
{fpErrorSDK && <p style={{color: 'red'}}>SDK Error: {fpErrorSDK.message}</p>}
     <details>
<summary>View Full Client SDK Data (fpDataSDK)</summary>
<pre style={{maxHeight: '200px', overflowY: 'auto', background: '#f0f0f0', border:'1px solid #ccc', padding:'5px'}}>{fpDataSDK ? JSON.stringify(fpDataSDK, null, 2) : 'No client SDK data yet.'}</pre>
</details>

    <hr className="my-4" />

    <h5>Decrypted Data from Server (`serverFetchedData`):</h5>
{isLoadingServerData && <p>Laster dekrypterte data fra server...</p>}
     {serverError && <p style={{ color: 'red' }}>Serverfeil ved dekryptering: {serverError}</p>}
     {serverFetchedData && (
      <div>
       <p>Resultat fra server (dekryptert):</p>
       <pre style={{maxHeight: '400px', overflowY: 'auto', background: '#f0f0f0', border:'1px solid #ccc', padding:'5px'}}>{JSON.stringify(serverFetchedData, null, 2)}</pre>
      </div>
     )}
{!serverFetchedData && !isLoadingServerData && !serverError && <p>Ingen dekrypterte data fra serveren ennå.</p>}
</Container>


     {/* Hero Section and other content */}
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