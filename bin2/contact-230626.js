import React, { useState, useRef } from 'react';
// import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
// import emailjs from '@emailjs/nodejs';
import "./contact.css"

const Contact = () => {

  const form = useRef();
  // let pageAlert = "Here..."
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

  const handleInputChange = event => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = event => {

    // Prevent the default behavior of the form submit
    event.preventDefault();
    // console.table(contactData);
    // console.table(form);

    // if (!contactData.name) {
    //   alert("Fill out your name please!");
    //   // pageAlert = "Fill out your first and last name please!";
    // } else if (!contactData.email){

    //   // pageAlert = "Fill out your email please!";
    //         alert("Fill out your email please!");
    // //   return
    // // } else {
    // //   alert(`Hello ${contactData.firstName} ${contactData.lastName}`);
    // //   // pageAlert = `Hello ${contactData.firstName} ${contactData.lastName}`;
    // } else if (!contactData.message){
    //   alert("Fill out your message please!");

    //   }

    // Validate
    const { name, email } = formData;
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
    }

    // If there are errors, update the state and stop further execution
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Clear the errors and show submit success
    setErrors({});
    setSubmitSuccess(true);

    // Perform further actions like submitting the form
    // (e.g., make an API request, update database, etc.)
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // You can use regular expressions or a validation library like validator.js
    // Example:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    

    emailjs.sendForm('service_zqpe0ek', 'template_ngtguyy', form.current, 'If_LqfkakOR_Q0PRF')
    .then((result) => {
        // show the user a success message
        // console.table(result);
        console.log(result.text);
        alert("Message sent!");
        // pageAlert = "Message sent!";
    }, (error) => {
        // show the user an error
        alert("Message failed!", error);
        // pageAlert = "Message failed!";
    });

//   }

  
  return (
    <div className="Contact">

<div className="containerForm">
      <h2 className="titleC">Contact Us</h2>
      <form id="contactForm" onSubmit={handleFormSubmit} ref={form} novalidate>
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
          required 
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
          type="email" 
          id="email" 
          required 
          />
          {errors.name && <span>{errors.name}</span>}
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
          required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
      
        <input type="submit" value="Send" className="button"/>
        {submitSuccess && <div>Email sent!</div>}

      </form>
    </div>
</div>
  );
}

export default Contact;
