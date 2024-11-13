// src/Contact.js

import React, { useState } from 'react';

function Contact() {
  // State for form fields and error messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
  
      console.log('Form submitted successfully:', formData);
      
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">Contact Us</h1>
      <p className="text-xl text-center mb-8 text-gray-600">
        Have any questions or suggestions? Feel free to reach out to us. We'd love to hear from you!
      </p>
      <form className="mt-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>

        {/* Email field */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>

        {/* Message field */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
