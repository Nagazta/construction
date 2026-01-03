// EmailJS Configuration
// Documentation: https://www.emailjs.com/docs/

// Load configuration from environment variables
// In Vite, environment variables are accessed via import.meta.env
export const EMAILJS_CONFIG = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Validate that all required environment variables are set
if (!EMAILJS_CONFIG.serviceID || !EMAILJS_CONFIG.templateID || !EMAILJS_CONFIG.publicKey) {
  console.error('Missing EmailJS configuration. Please check your .env file.');
  console.error('Required variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
}

// Note: The private key should NEVER be used in frontend code
// It's only for backend/server-side usage. EmailJS public key is safe for frontend use.
