import React, { useState } from 'react';
import "./home.css";
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
        <section id="topSearch">
        <h3> Find The Right Book For You </h3>
          <Row className="row"> 
            <Column size="md-12">
              <Search onSearch={handleSearch} />
            </Column>
          </Row>
        </section>

        <Row className="bookResults">   
          <Column size="md-12">
            <BookApi searchQuery={searchQuery}/>
          </Column>
        </Row>
      </div>

    );
}
 
export default Home;