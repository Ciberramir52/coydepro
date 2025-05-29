import emailjs from '@emailjs/browser';

export const sendEmail = (e) => {
  emailjs.sendForm(
    'service_5munmmt',     // Service ID
    'template_0th9mfp',        // Template ID
    e.target,              // Form reference
    { publicKey: 'D2f81n_SI06QiJF18' } // Replace with your actual public key
  )
  .then(() => alert('Message sent!'))
  .catch((error) => alert('Failed to send: ' + error));
};