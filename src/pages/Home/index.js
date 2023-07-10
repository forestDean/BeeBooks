import React, { useState } from 'react';
import "./home.css";
import Row from "../../components/Row";
import Column from "../../components/Column";
import BookApi from "../../components/BookApi";
import Search from "../../components/Search";


const Home = () => {

  const [searchQuery, setSearchQuery] = useState("foxes");
  const [submitError, setSubmitError] = useState('');
  const [dataNull, setDataNull] = useState('');

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    // console.log('Search query @Home:', searchQuery);
  };

    return (
      
      <div className="home">
        <section id="topSearch">
        <h3> Find The Perfect Children's Adventure </h3>
          <Row className="row"> 
            <Column size="md-12" className="">
              <Search submitError={submitError} dataNull={dataNull} onSearch={handleSearch} />
            </Column>
          </Row>
        </section>

        <Row className="bookResults">   
          <Column size="md-12" className="">
            <BookApi setSubmitError={setSubmitError} dataNull={setDataNull} searchQuery={searchQuery}/>
          </Column>
        </Row>
      </div>

    );
}
 
export default Home;