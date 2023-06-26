// import { useState } from "react";
import React, { useState, useRef } from 'react';
import "./search.css";


export default function ContactForm() {
  // Setting the component's initial contactData
  const form = useRef();
  let pageAlert = "Here..."
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
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
    console.table(form);
    // console.table(form.children);
    if (!contactData.firstName || !contactData.lastName) {
      // alert("Fill out your first and last name please!");
      pageAlert = "Fill out your first and last name please!";
    } else if (!contactData.email){

      pageAlert = "Fill out your email please!";
            alert("Fill out your email please!");
      return
    } else {
      // alert(`Hello ${contactData.firstName} ${contactData.lastName}`);
      pageAlert = `Hello ${contactData.firstName} ${contactData.lastName}`;
    }

    // emailjs.sendForm()
    // .then((result) => {
    //     // show the user a success message
    //     // console.table(result);
    //     console.log(result.text);
    //     // alert("Message sent!");
    //     pageAlert = "Message sent!";
    // }, (error) => {
    //     // show the user an error
    //     alert("Message failed!", error);
    //     pageAlert = "Message failed!";
    // });

  };


    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form id="contactForm" className="form pr-5" ref={form}>
          <input
            type="text"      
            name="firstName"
            onChange={handleInputChange}
            placeholder="First Name"
            value={contactData.firstName}
          />
   
          <button className="btn btn-lg btn-block w-100" onClick={handleFormSubmit}>Send</button>
        </form>
   
      </div>
    );
  }