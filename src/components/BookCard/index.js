import "./bookcard.css";

const BookCard = (props) => {

    const goShop = () => {
    console.log('props @Google',  props.isbn)
    const url = `https://www.google.com/search?q=${encodeURIComponent(props.isbn)}`;
    window.location= url;
    };

    return (

        <div id="bookInfo col-6">
            <article className="bookCard mb-5 w-50 mx-auto" id={props.id}>
                <h3>{props.title}</h3>
                <p>by {props.author}</p>
                {props.image}
                <p id="description" className="fst-italic">{props.description}</p>
                <small id="isbn">ISBN: {props.isbn}</small>
                <button type="button" onClick={goShop} className="btn outline my-4">SHOP</button>
            </article>
        </div> 

    );

}

export default BookCard;