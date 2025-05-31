const { unsealEventsResponse, DecryptionAlgorithm } = require('@fingerprintjs/fingerprintjs-pro-server-api');

// If running locally and not using Vercel's automatic .env loading for 'vercel dev',
// you might need to uncomment the next line:
if (process.env.NODE_ENV !== 'production') {
      const path = require('path');
      require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); 
    }

    console.log("backend running");

module.exports = async (req, res) => {
if (req.method !== 'POST') {
res.setHeader('Allow', ['POST']);
return res.status(405).json({ error: 'Method Not Allowed', details: `Method ${req.method} is not allowed.` });
}

const { sealedResult } = req.body;


if (!sealedResult || typeof sealedResult !== 'string' || sealedResult.trim() === '') {
return res.status(400).json({ error: 'Bad Request', details: 'sealedResult is required in the request body and must be a non-empty string.' });
}

// IMPORTANT: Verify that FINGERPRINT_SECRET_API_KEY is the correct
// key for decryption with unsealEventsResponse. This might need to be a specific
// "Decryption Key" provided by Fingerprint for Sealed Client Results/Export.
const decryptionKeyString = process.env.FINGERPRINT_SECRET_API_KEY;

if (!decryptionKeyString) {
console.error('[API] FATAL: Decryption key (FINGERPRINT_SECRET_API_KEY) is not configured in environment variables!');
return res.status(500).json({ error: 'Server Configuration Error', details: 'The decryption key is not set on the server.' });
}

try {
// The sealedResult from the client agent is typically base64url encoded.
// Convert base64url to standard base64 for Buffer.from.
let base64PaddedSealedResult = sealedResult.replace(/-/g, '+').replace(/_/g, '/');
while (base64PaddedSealedResult.length % 4) {
base64PaddedSealedResult += '=';
}
const sealedDataBuffer = Buffer.from(base64PaddedSealedResult, 'base64');

// The decryptionKeyString from ENV is assumed to be a base64 encoded representation
// of the actual binary key, because the user's original code used Buffer.from(key, 'base64').
// If it's NOT base64, then it should be Buffer.from(decryptionKeyString) or specify encoding.
const decryptionKeyBuffer = Buffer.from(decryptionKeyString, 'base64');

//console.log([API] Attempting to unseal data. Sealed data length: ${sealedDataBuffer.length}, Decryption key buffer length: ${decryptionKeyBuffer.length});
// At the top of api/getFingerprintEvent.js
console.log('[API EXECUTION START]');
console.log('[API] NODE_ENV:', process.env.NODE_ENV);
console.log('[API] Attempted FINGERPRINT_SECRET_API_KEY (first 5 chars):', process.env.FINGERPRINT_SECRET_API_KEY ? process.env.FINGERPRINT_SECRET_API_KEY.substring(0,5) + '...' : 'NOT SET!');
console.log('[API] Attempted FINGERPRINT_API_REGION:', process.env.FINGERPRINT_API_REGION);

const unsealedDataArray = await unsealEventsResponse(sealedDataBuffer, [
{
key: decryptionKeyBuffer,
algorithm: DecryptionAlgorithm.Aes256Gcm, // Ensure this matches your setup
},
]);

// unsealEventsResponse returns an array of events.
// Assuming the client-side sealedResult corresponds to a single event structure.
// If it contains multiple "events" or a different structure, this might need adjustment.
const unsealedEvent = unsealedDataArray && unsealedDataArray.length > 0 ? unsealedDataArray[0] : null;

if (!unsealedEvent) {
console.error('[API] Unsealing returned no data or an unexpected format.');
return res.status(500).json({ error: 'Failed to unseal data', details: 'Unsealed data is empty or in an unexpected format.' });
}

console.log("[API] Data unsealed successfully.");
return res.status(200).json(unsealedEvent); // Send the first (and likely only) unsealed event


} catch (error) {
console.error('[API] Error during unsealing process:', error);
let publicErrorMessage = 'Failed to decrypt or process data.';
// Specific error messages from the SDK can be very helpful for debugging key issues.
if (error.message && (error.message.toLowerCase().includes('mac') || error.message.toLowerCase().includes('key'))) {
publicErrorMessage = 'Decryption failed: Likely an incorrect decryption key or corrupted data.';
}
return res.status(500).json({ error: publicErrorMessage, details: error.message });
}
};

