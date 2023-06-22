import React from "react";
import "./header.css";
import Row from "../../components/Row";
import Column from "../../components/Column";


function Header(props) {


    return (  
        <header>    
            <Row>
                <Column size="md-12">
                    <h4 className="mr-3 font-weight-light">text</h4>
                </Column>
            </Row>
            <Row>
                <Column size="md-12">
                    <h1>BeeBooks</h1>
                </Column>
            </Row>
        </header>
        );
}

export default Header;