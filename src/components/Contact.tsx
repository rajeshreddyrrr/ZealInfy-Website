import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link: string | null;
}

interface SocialLink {
  icon: JSX.Element;
  name: string;
  url: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@zealinfy.com',
      link: 'mailto:info@zealinfy.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Worldwide Remote',
      link: null
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#' },
    { icon: <FaGithub />, name: 'GitHub', url: '#' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#' }
  ];

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Let's discuss how we can help bring your project to life
      </p>

      <div className="contact-content">
        <div className="contact-info-container">
          <h3 className="contact-info-title">Contact Information</h3>
          <p className="contact-info-description">
            Reach out to us through any of these channels. We're here to help!
          </p>

          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-item">
                <div className="contact-info-icon">{info.icon}</div>
                <div className="contact-info-content">
                  <h4 className="contact-info-label">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="contact-info-value">
                      {info.content}
                    </a>
                  ) : (
                    <p className="contact-info-value">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="social-links">
            <h4 className="social-title">Follow Us</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
