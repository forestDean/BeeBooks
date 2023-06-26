import React, { useState } from 'react';
import "./home.module.css";
import Row from "../../components/Row";
import Column from "../../components/Column";
import BookApi from "../../components/BookApi";
import Search from "../../components/Search";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("foxes");

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    // console.log('Search query @Home:', searchQuery);
  };

    return (  
      <div className="home"> 
        <h3> Find The Right Book For You </h3>
         <Row className="row"> 
            <Column size="md-12">
              <Search onSearch={handleSearch} />
            </Column>
          </Row>
      
          <Row className="row">   
               
            <Column size="md-12">
            <div className="App">
              <header className="App-header">
              </header>
              <BookApi searchQuery={searchQuery}/>
            </div>
            </Column>

          </Row>

      </div>
    );
}
 
export default Home;