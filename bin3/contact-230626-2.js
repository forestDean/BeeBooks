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

  const handleInputChange = event => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = event => {

    // Preventing the default behavior of the form submit (which is to refresh the page)
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

  }

  
  return (
    <div className="Contact">

<div className="containerForm">
      <h2 className="titleC">Contact Us</h2>
      <form id="contactForm" ref={form} novalidate>
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
        </div>
      
        <input type="submit" value="Send" className="button" onClick={handleFormSubmit}/>

      </form>
    </div>
</div>
  );
}

export default Contact;
