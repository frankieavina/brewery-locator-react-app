import React from 'react';

const Contact = () => {
  return (
    <main>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or just want to say hello? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" style={{ padding: '10px' }} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" style={{ padding: '10px' }} />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="5"
            style={{ padding: '10px' }}
          ></textarea>

          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
        <h2>Other Ways to Reach Us</h2>
        <ul>
          <li><strong>Email:</strong> support@brewerylocator.com</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
          <li><strong>Address:</strong> 123 Brewery Lane, Beer City, USA</li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;