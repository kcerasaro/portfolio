
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus('error');
      });
  };

  return (
    <div className="contact-form-container">
      {status === 'success' && (
        <div className="status-message success">Message sent successfully!</div>
      )}
      
      {status === 'error' && (
        <div className="status-message error">Failed to send message. Please try again.</div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="from_email">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'sending'}
          className="submit-btn"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;