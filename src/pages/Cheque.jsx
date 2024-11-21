// ChequeForm.js
import React, { useState } from 'react';
import './ChequeForm.css';

const ChequeForm = () => {
  const [formData, setFormData] = useState({
    payeeName: '',
    amount: '',
    date: '',
    // Add more form fields as needed
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data as a JSON file
    saveAsJSON(formData);
  };

  const saveAsJSON = (data) => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cheque_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cheque-form-container">
      <img src="preview.jpg" alt="Cheque Template" className="cheque-template" />
      <form onSubmit={handleSubmit} className="cheque-form">
        <input
          type="text"
          name="payeeName"
          placeholder="Payee Name"
          value={formData.payeeName}
          onChange={handleInputChange}
          className="cheque-field payee-name"
        />
        {/* Add more form fields */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChequeForm;