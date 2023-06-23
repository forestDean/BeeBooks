import "./bookcard.css";

const BookCard = (props) => {

    return (

        <div id="bookInfo">
            <article className="bookCard mb-5 w-50 mx-auto" id={props.id}>
                <h3>{props.title}</h3>
                <p>by {props.authors}</p>
                {props.image}
                <p id="description" className="fst-italic">{props.description}</p>
                <small id="isbn">ISBN: {props.isbn}</small>
                <button type="button" className="btn w-100 btn-outline-primary my-4">SHOP</button>
            </article>
        </div> 

    );

}

export default BookCard;