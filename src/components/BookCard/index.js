import Column from "../Column";
import "./bookcard.css";
import React, { useState } from 'react'

const BookCard = (props) => {

    const goShop = (event) => {
        event.preventDefault();
        console.log('props @Google',  props.isbn)
        if (props.type === 'OTHER') {
            const url = `https://www.google.com/search?q=${encodeURIComponent(props.title)} Book`;
            window.open(url, '_blank');
        } else {
            const url = `https://www.google.com/search?q=${encodeURIComponent(props.isbn)}`;
            window.open(url, '_blank');
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    const revealText = () => {
        setIsVisible(!isVisible);
    };

    return (

    <Column size="lg-6" id="bookInfo">
        <article className={`bookCard text-center mb-5 hidden ${isVisible ? 'visible' : ''}`} id={props.id}>
            <div className="summary">
                <h3>{props.title}</h3>
                <p className="author">by {props.author}</p>
                {props.image}
                <p id="description" className="fst-italic">{props.description}</p>
                <button className="fixed-bottom" onClick={revealText}>...</button>
            </div>
            <div className="cardfooter fixed-bottom">
                <small className="fixed-bottom" id="isbn">{props.type === 'OTHER' ? '' : 'ISBN:'} {props.isbn}</small>
                <button type="button" id="shopButton" onClick={goShop} className="btn outline mb-4 fixed-bottom">SHOP</button>
            </div>
        </article>
    </Column> 

    ); 

}

export default BookCard;
