import React from "react";
import "./home.module.css";
import logo from '../../assets/images/bee-logo.png';
import Row from "../../components/Row";
import Column from "../../components/Column";
import BookApi from "../../components/BookApi";

const Home = () => {
    return (  
          <Row className="">            
            <Column size="md-12">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <BookApi />
            </div>

            </Column>
          </Row>
    );
}
 
export default Home;