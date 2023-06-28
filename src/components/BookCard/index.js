import Column from "../Column";
import "./bookcard.css";
import React, { useState } from 'react'

const BookCard = (props) => {

    const goShop = (event) => {
        event.preventDefault();
        console.log('props @Google',  props.isbn)
        const url = `https://www.google.com/search?q=${encodeURIComponent(props.isbn)}`;
        // window.location.href = url;
        window.open(url, '_blank');
    };

    // function HiddenText() {
        const [isVisible, setIsVisible] = useState(false);
      
        const revealText = () => {
          setIsVisible(!isVisible);
        };
      
    // }
    return (

    <Column size="lg-6" id="bookInfo">
        <article className="bookCard text-center mb-5" id={props.id}>
            <div className={`hidden ${isVisible ? 'visible' : ''}`}>
                <h3>{props.title}</h3>
                <p className="author">by {props.author}</p>
                {props.image}
                <p id="description" className="fst-italic">{props.description}</p>
                <button className="fixed-bottom" onClick={revealText}>Click to reveal</button>
            </div>
            <small className="fixed-bottom" id="isbn">ISBN: {props.isbn}</small>
            <button type="button" id="shopButton" onClick={goShop} className="btn outline mb-4 fixed-bottom">SHOP</button>
        </article>
    </Column> 

    );

    

}

export default BookCard;
