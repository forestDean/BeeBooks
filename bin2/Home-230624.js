import React, { useState } from 'react';
import "./home.module.css";
// import logo from '../../assets/images/bee-logo.png';
import Row from "../../components/Row";
import Column from "../../components/Column";
import BookApi from "../../components/BookApi";
import Search from "../../components/Search";


const Home = () => {
  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
    BookApi.getData(searchQuery);
  };

  // const [searchQuery, setSearchQuery] = useState("");

    return (  
      <div className=""> 
        <h3> Find The Right Book For You </h3>
         <Row className="row"> 
            <Column size="md-12">
              <Search onSearch={handleSearch} />
              {/* <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
            </Column>
          </Row>
      
          <Row className="row">   
               
            <Column size="md-12">
            <div className="App">
              <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              </header>
              <BookApi />
            </div>
            </Column>

          </Row>

      </div>
    );
}
 
export default Home;