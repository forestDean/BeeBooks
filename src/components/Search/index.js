import React, { useState } from 'react';
import "./search.css";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the searchQuery to the onSearch prop function
    onSearch(searchQuery);
  }; 

  return (  
    <div id="searchBar" className="w-50 mx-auto">           
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
          Sorry ...no results were found ...please try again...
      </Form.Text>
    </div>
  )
}

export default Search;