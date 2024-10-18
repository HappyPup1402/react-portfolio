import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (fieldName) => {
    let error = '';
    if (formData[fieldName].trim() === '') {
      error = `${fieldName} is required`;
    } else if (fieldName === 'email' && !/\S+@\S+\.\S+/.test(formData.email)) {
      error = 'Invalid email address';
    }
    setErrors({ ...errors, [fieldName]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      validateField(field);
      if (errors[field]) {
        isValid = false;
      }
    });

    if (isValid) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={() => validateField('name')}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={() => validateField('email')}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={() => validateField('message')}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
