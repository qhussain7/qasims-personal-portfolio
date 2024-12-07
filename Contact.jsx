import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('https://formspree.io/f/mnnqyqzr', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus('Message sent successfully!');
          e.target.reset(); // Clear the form
        } else {
          setFormStatus('Failed to send message. Please try again later.');
        }
      })
      .catch(() => {
        setFormStatus('Failed to send message. Please check your connection.');
      });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaboration or just a friendly chat!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="form-input"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="form-textarea"
        ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
