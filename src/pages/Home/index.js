import React from "react";
import "./home.module.css";
// import logo from '../../assets/images/bee-logo.png';
import Row from "../../components/Row";
import Column from "../../components/Column";
import BookApi from "../../components/BookApi";
import Search from "../../components/Search";


// import image from '../../assets/images/image1.jpg';


const Home = () => {
    return (  
      <div className=""> 
        <h3> Find The Right Book For You </h3>
         <Row className="row"> 
            <Column size="md-12">
              <Search />
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