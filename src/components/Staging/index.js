import React, { useEffect, useState } from 'react';
import "./staging.module.css";
import Row from "../Row";
import Column from "../Column";
import Search from "../Search";

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