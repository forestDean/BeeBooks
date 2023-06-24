// import { useState } from "react";
import React, { useState, useRef } from 'react';
import "./search.css";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {
  return (  
    <div id="searchBar">           
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </div>
  )
}

export default Search;