import React from "react";
import "./home.module.css";
// import logo from '../../assets/images/bee-logo.png';
import Row from "../../components/Row";
import Column from "../../components/Column";
import BookApi from "../../components/BookApi";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import image from '../../assets/images/image1.jpg';


const Home = () => {
    return (  
      <div className="jumbotron"> 
      <h3> Find The Right Book For You </h3>
      
          <Row className="jumbotron1">   
               
            <Column size="md-12">
            <div className="App">
              <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              </header>
              <BookApi />
            </div>

            </Column>
          </Row>

             {/* SEARCH BAR */}
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
    );
}
 
export default Home;