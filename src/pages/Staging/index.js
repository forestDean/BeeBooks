import React from "react";
import "./style.css";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Search from "../../components/Search";



const Staging = () => {
    return (  
          <Row>            
            <Column size="md-12">
              <h1>STAGING</h1>
              <Search />
            </Column>
          </Row>
    );
}
 
export default Staging ;