import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    telephone: '',
    productInterest: []
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // New state to handle form submission

  // Toggle product interest selection
  const toggleProductInterest = (product) => {
    setFormData((prevState) => {
      const isSelected = prevState.productInterest.includes(product);
      if (isSelected) {
        return {
          ...prevState,
          productInterest: prevState.productInterest.filter(
            (item) => item !== product
          ),
        };
      } else {
        return {
          ...prevState,
          productInterest: [...prevState.productInterest, product],
        };
      }
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      telephone: formData.telephone,
      productInterest: formData.productInterest.join(', '), // Convert array to a string
    };

    emailjs.send(
      'service_qx2dnrh',        // Replace with your EmailJS service ID
      'template_89c4pp3',       // Replace with your EmailJS template ID
      emailData,                // Send the form data
      'QWI4ysWFZ2HmOZ7po'         // Replace with your EmailJS public key
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true); // Set form submission state to true
        setTimeout(() => {
          window.location.href = 'https://www.caringivf.com/'; // Redirect after 10 seconds
        }, 10000); // 10000ms = 10 seconds
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to submit lead data. Please try again.');
      }
    );
  };

  // Show thank you message after form is submitted
  if (formSubmitted) {
    return (
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>Your submission has been received. You will be redirected shortly.</p>
      </div>
    );
  }

  return (
    <div className="lead-form-container">
      <h2>Sign Up for Product Information</h2>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            required
          />
        </div>

        {/* Product Interest Section */}
        <div className="form-group">
          <label>Product Interest:</label>
          <div className="product-selection">
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Product 1') ? 'selected' : ''}`}
              onClick={() => toggleProductInterest('Genea Biomedx')}
            >
              <img src="/product1-logo.png" alt="Product 1 Logo" className="product-logo" />
              <span>Genea Biomedx</span>
            </button>
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Product 2') ? 'selected' : ''}`}
              onClick={() => toggleProductInterest('Leica')}
            >
              <img src="/product2-logo.png" alt="Product 2 Logo" className="product-logo" />
              <span>Leica</span>
            </button>
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Product 3') ? 'selected' : ''}`}
              onClick={() => toggleProductInterest('Cryolock')}
            >
              <img src="/product3-logo.png" alt="Product 3 Logo" className="product-logo" />
              <span>Cryolock</span>
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default LeadForm;
