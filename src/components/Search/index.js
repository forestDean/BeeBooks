import React, { useState } from 'react';
import "./search.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ onSearch, submitError, dataNull }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();

    //  **************** Validate ****************

    const errors = {};

    if (searchQuery.trim() === '') {
      errors.search = '*A keyword is required.  ';
      console.log('*A keyword is required');
    } else {
      errors.search = false;
    }

    // If errors, update State and STOP
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    // Pass the searchQuery to the onSearch prop function
    onSearch(searchQuery);
  }; 

  return (  
    <div id="searchBar" className="w-75 mx-auto">           
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
          type="text"
          name="search"
          placeholder="Enter a magic word..."
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
      <Form.Text id="HelpBlock" muted>

          {errors.search && <span>{errors.search}</span>}
          {submitError && <span id="error">Technical error!</span>}
          {dataNull && <span id="null">No results were found ...please try again...</span>}
      </Form.Text>
    </div>
  )
}

export default Search;