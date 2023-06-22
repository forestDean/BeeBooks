import React, { Component } from "react";
import "./style.css";


class BookCard extends Component {
    render() {
        return (  
            <div className="row bookcard col-11 mx-auto">
                <div className="img-container col-7">
                    <img alt={this.props.title} src={this.props.image} />
                </div>
                <div className="content col-5">
                <ul>
                    <li>
                        <h2>{this.props.title}</h2> 
                    </li>
                    <li>
                        <strong>Blah</strong> {this.props.urlDeployed}
                    </li>
                    <li>
                        <strong>Blah</strong> {this.props.urlDeployed}
                    </li>
                    <li>
                        <strong>Blah</strong> {this.props.urlGithub}
                    </li>
                </ul>
                </div>
            </div>
 
        );
    }
}


export default BookCard;