import React, { useState } from 'react';
import styles from '../styles/App.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaTelegramPlane, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// ⚠️ Note: Please replace these with your actual Service ID and Template ID from EmailJS dashboard
const SERVICE_ID = "service_k52vhhm"; // Replace with your Service ID
const TEMPLATE_ID = "template_rtx49uo"; // Replace with your Template ID
const PUBLIC_KEY = "UBgUEP2wpEfm6QBgg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (SERVICE_ID === "service_xxxxxxx" || TEMPLATE_ID === "template_xxxxxxx") {
      Swal.fire({
        icon: 'warning',
        title: 'Configuration Required',
        text: 'Please set your actual EmailJS Service ID and Template ID in Contact.jsx',
        confirmButtonColor: '#0288d1',
        background: '#111a2e',
        color: '#fff'
      });
      return;
    }

    setIsSending(true);

    const templateParams = {
      name: formData.name,        // ត្រូវនឹង {{name}} ក្នុង template
      email: formData.email,      // ត្រូវនឹង {{email}} (Reply To)
      title: formData.subject,    // ត្រូវនឹង {{title}} ក្នុង Subject
      message: formData.message,  // ត្រូវនឹង {{message}}
      time: new Date().toLocaleString(), // ត្រូវនឹង {{time}} ដែលឃើញក្នុង template content
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setIsSending(false);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you! Your message has been sent successfully.',
          confirmButtonColor: '#4fc3f7',
          background: '#111a2e',
          color: '#fff'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        setIsSending(false);
        console.error('EmailJS Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later or contact directly via Email.',
          confirmButtonColor: '#d33',
          background: '#111a2e',
          color: '#fff'
        });
      });
  };

  return (
    <div className={styles.Contact}>
      <div className={styles.Container}>

        {/* ── Left Side: Details & Socials ── */}
        <div className={styles.info_section}>
          <h1 className={styles.title}>
            Get In <span>Touch</span>
          </h1>
          <p className={styles.subtitle}>
            មានចម្ងល់ ឬចង់សហការបង្កើតគម្រោងថ្មីៗជាមួយខ្ញុំ?
            សូមផ្ញើសារមកខ្ញុំតាមរយៈទម្រង់ខាងស្តាំ ឬទាក់ទងមកខ្ញុំដោយផ្ទាល់តាមព័ត៌មានខាងក្រោម។
          </p>

          <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }} className={styles.details_list}>
            <div className={styles.detail_item}>
              <div className={styles.icon_box}>
                <FaEnvelope />
              </div>
              <div className={styles.text_content}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>yonghouvh@gmail.com</span>
              </div>
            </div>

            <a href='tel:011284645' style={{ textDecoration: 'none' }} className={styles.detail_item}>
              <div className={styles.icon_box}>
                <FaPhoneAlt />
              </div>
              <div className={styles.text_content}>
                <span className={styles.label}>Phone Number</span>
                <span className={styles.value}>+855 11 284 645</span>
              </div>
            </a>

            <div className={styles.detail_item}>
              <div className={styles.icon_box}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.text_content}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </a>

          <div className={styles.socials}>
            <a href="https://github.com/Hacker122-qpwi" target="_blank" rel="noopener noreferrer" className={styles.social_link} title="GitHub">
              <FaGithub />
            </a>
            <a href="https://t.me/boyboy_2" target="_blank" rel="noopener noreferrer" className={styles.social_link} title="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="https://www.facebook.com/houv.yong.hak" target="_blank" rel="noopener noreferrer" className={styles.social_link} title="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* ── Right Side: Contact Form ── */}
        <div className={styles.form_section}>
          <h3 className={styles.form_title}>Send Message</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submit_btn} disabled={isSending}>
              {isSending ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;

