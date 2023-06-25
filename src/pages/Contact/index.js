import React from "react";
// import Form from 'react-bootstrap/Form';

import "../Contact/contact.css"

const Contact = () => {
  
  return (
    <div className="Contact">

<div className="containerForm">
      <h2 className="titleC">Contact Us</h2>
      <form >
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
      
        <input type="submit" value="Send"className="button"/>

      </form>
    </div>
</div>
  );
}

export default Contact;
