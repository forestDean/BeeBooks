import Column from "../Column";
import "./bookcard.css";



const BookCard = (props) => {

    const goShop = () => {
    console.log('props @Google',  props.isbn)
    const url = `https://www.google.com/search?q=${encodeURIComponent(props.isbn)}`;
    window.location= url;
    };

    return (

    <Column size="lg-6" id="bookInfo">
        <article className="bookCard text-center mb-5" id={props.id}>
            <h3>{props.title}</h3>
            <p className="author">by {props.author}</p>
            {props.image}
            <p id="description" className="fst-italic">{props.description}</p>
            <small className="fixed-bottom" id="isbn">ISBN: {props.isbn}</small>
            <button type="button" id="shopButton" onClick={goShop} className="btn outline mb-4 fixed-bottom">SHOP</button>
        </article>
    </Column> 

    );

}

export default BookCard;
