import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { LocationIcon, EmailIcon, PhoneIcon, ClockIcon } from '../components/Icons';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Get current date and time
      const now = new Date();
      const dateTime = now.toLocaleString('en-US', {
        timeZone: 'Asia/Manila',
        dateStyle: 'full',
        timeStyle: 'long'
      });

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'kyle.sepulveda27@gmail.com',
          time: dateTime
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Let's discuss your construction project</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Ready to start your construction project? Reach out to us and we'll
                be happy to discuss your needs and provide a free consultation.
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <LocationIcon size={32} color="var(--construction-yellow)" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Minglanilla, Cebu</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <EmailIcon size={32} color="var(--construction-yellow)" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>kyle.sepulveda27@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <PhoneIcon size={32} color="var(--construction-yellow)" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+63 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <ClockIcon size={32} color="var(--construction-yellow)" />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+63 XXX XXX XXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="status-message success">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="status-message error">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
