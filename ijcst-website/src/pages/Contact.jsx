import { useState } from 'react';
import axios from 'axios';
import '../styles/pages.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/contact/', formData);
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Error sending message. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <section className="contact-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        {responseMessage && <p className="message">{responseMessage}</p>}
      </section>
      <section className="contact-details">
        <h2>Editorial Office</h2>
        <p>Email: editor@ijcst.org</p>
        <p>Address: Building 14, Dlf city, Gurugram</p>
      </section>
    </div>
  );
}

export default Contact;