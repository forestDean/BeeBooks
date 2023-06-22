import React, { Component } from "react";
import "./footer.css";
import Row from "../../components/Row";

class Footer extends Component {
  render() {
      return (
        <footer className="footer">
          <Row>
            <small className="mt-3 text-center">©2023 SuperCool</small>
          </Row>
        </footer>
      );
    }
  }

export default Footer;
