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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleProductInterest = (product) => {
    setFormData((prev) => {
      const isSelected = prev.productInterest.includes(product);
      if (isSelected) {
        // If the product is already selected, remove it
        return {
          ...prev,
          productInterest: prev.productInterest.filter((p) => p !== product)
        };
      } else {
        // If the product is not selected, add it
        return {
          ...prev,
          productInterest: [...prev.productInterest, product]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    console.log('Form Data: ', formData);
    // You can send the data to the backend API or handle form submission here
  };
  

  return (
    <div className="lead-form-container">
      <h2>Sign Up for Product Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Interest:</label>
          <div className="product-selection">
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Product 1') ? 'selected' : ''}`}
              onClick={() => toggleProductInterest('Product 1')}
            >
              <img src="/product1-logo.png" alt="Product 1 Logo" className="product-logo" />
              <span>Genea Biomedx</span>
            </button>
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Product 2') ? 'selected' : ''}`}
              onClick={() => toggleProductInterest('Product 2')}
            >
              <img src="/product2-logo.png" alt="Product 2 Logo" className="product-logo" />
              <span>Leica</span>
            </button>
            <button
              type="button"
              className={`product-item ${formData.productInterest.includes('Product 3') ? 'selected' : ''}`}
              onClick={() => toggleProductInterest('Product 3')}
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
