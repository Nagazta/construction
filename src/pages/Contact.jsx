import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { LocationIcon, EmailIcon, PhoneIcon, ClockIcon } from '../components/Icons';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import './Contact.css';

export default function Contact() {
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
          to_email: 'southcebucons@gmail.com',
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

  const contactDetails = [
    {
      Icon: LocationIcon,
      title: 'Our Location',
      lines: ['Minglanilla, Cebu, 6046']
    },
    {
      Icon: EmailIcon,
      title: 'Email Address',
      lines: ['southcebucons@gmail.com']
    },
    {
      Icon: PhoneIcon,
      title: 'Phone Numbers',
      lines: ['0953-177-4035', '0926-936-9364']
    },
    {
      Icon: ClockIcon,
      title: 'Business Hours',
      lines: ['Monday - Saturday: 8:00 AM - 6:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <main className="page-contact">
      
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-inner">
          <p className="page-eyebrow"><span className="eyebrow-rule" />Contact Us</p>
          <h1>Get in Touch</h1>
          <p className="page-hero-sub">Have a project in mind? Contact us today to discuss your construction needs and get a consultation.</p>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-grid">
            
            {/* Info Cards Side */}
            <div className="contact-info-col">
              <p className="section-eyebrow-inline">Contact Details</p>
              <h2>How to Reach Us</h2>
              <p className="contact-intro-desc">
                We'll be happy to answer your questions, walk you through our services, and draft a detailed estimate for your project.
              </p>

              <div className="contact-info-cards">
                {contactDetails.map(({ Icon, title, lines }, i) => (
                  <div className="contact-info-card" key={i}>
                    <div className="info-card-icon">
                      <Icon size={24} color="var(--gold)" />
                    </div>
                    <div className="info-card-text">
                      <h3>{title}</h3>
                      {lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="contact-form-col">
              <div className="contact-form-wrapper">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we will respond as soon as possible.</p>

                <form onSubmit={handleSubmit} className="contact-form-el">
                  <div className="form-input-group">
                    <label htmlFor="name">Full Name *</label>
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

                  <div className="form-input-group">
                    <label htmlFor="email">Email Address *</label>
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

                  <div className="form-input-group">
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

                  <div className="form-input-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="contact-status success">
                      Thank you! Your message was sent successfully. We'll be in touch soon.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="contact-status error">
                      Sorry, there was an error sending your message. Please try again or call us directly.
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
