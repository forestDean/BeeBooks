import React, { useEffect, useState } from 'react';
import "./staging.module.css";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Search from "../../components/Search";
import axios from 'axios';

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