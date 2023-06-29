import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from '@emailjs/nodejs';
import "./contact.css"

const Contact = () => {

  const form = useRef();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ""
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  
  const handleInputChange = event => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = event => {

    // Prevent the default behavior of the form submit
    event.preventDefault();

    //  **************** Validate ****************
      const { name, email , message } = contactData;
      const errors = {};

      if (name.trim() === '') {
        errors.name = '*name is required';
      }

      if (email.trim() === '') {
        errors.email = '*email is required';
      } else if (!isValidEmail(email)) {
        errors.email = '*invalid email address';
      }

      if (message.trim() === '') {
        errors.message = '*message is required';
      }

      // If errors, update State and STOP
      if (Object.keys(errors).length) {
        setErrors(errors);
        return;
      }

    //  **************** emailJS ****************
    emailjs.sendForm('service_zqpe0ek', 'template_ngtguyy', form.current, 'If_LqfkakOR_Q0PRF')
    .then((result) => {
      console.log('Response Code: ', result.status, result.text);
      // Clear errors & display submit success
      setErrors({});
      setSubmitSuccess(true);
    }, (error) => {
        // show the user an error
        console.log(error);
        setSubmitFail(true);
        return;
    });

  }

    const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="Contact">

<div className="containerForm">
      <h2 className="titleC">Contact Us</h2>
      <form id="contactForm" onSubmit={handleFormSubmit} ref={form}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input 
          className="form-control"
          name="name"
          onChange={handleInputChange}
          value={contactData.name} 
          type="text" 
          id="name" 
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input 
          className="form-control"
          name="email"
          onChange={handleInputChange}
          value={contactData.email} 
          type="message"
          id="email" 
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea 
          className="form-control" 
          name="message"
          rows="5"
          onChange={handleInputChange}
          value={contactData.message}
          type="text"
          id="message" 
          />
          {errors.message && <span>{errors.message}</span>}
        </div>
      
        <input type="submit" value="Send" className="button"/>
        <div id="alert">     
          {submitSuccess && <span id="success">Message sent!</span>}
          {submitFail && <span id="fail">Message not sent!</span>}
        </div>
      </form>
    </div>
</div>
  );
}

export default Contact;
