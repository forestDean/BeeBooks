import React, { useState } from 'react';
import "./search.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ onSearch, submitError, dataNull }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();

    //  **************** Validate ****************

    const validationErrors = {};

    if (searchQuery.trim() === '') {
      validationErrors.search = '*A keyword is required.  ';
      console.log('*A keyword is required');
    }
    console.log(searchQuery + " @Search")

    // If errors, update State and STOP
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      // clear error message after 3 seconds
      const timer = setTimeout(() => {
        setErrors(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    // Pass the searchQuery to the onSearch prop function
    onSearch(searchQuery);
    console.log(searchQuery + " @onSearch")
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
          {errors.search && <span id="nosearch">{errors.search}</span>}
          {submitError && <span id="error">Technical error!</span>}
          {dataNull && <span id="null">No results were found ...please try again...</span>}
      </Form.Text>
    </div>
  )
}

export default Search;