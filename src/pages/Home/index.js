import React from "react";
import "./style.css";
import logo from '../../assets/images/logo.jpg';
import Row from "../../components/Row";
import Column from "../../components/Column";

const Home = () => {
    return (  
          <Row className="">            
            <Column size="md-12">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>

            </Column>
          </Row>
    );
}
 
export default Home;