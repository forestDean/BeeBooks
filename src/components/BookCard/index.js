import axios from 'axios';
import "./bookcard.css";

const BookCard = (props) => {

    const goShop = () => {git 
    // send a POST request
 
    console.log('props @POST',  props.isbn)
    const url = `https://www.google.com/search?q=${encodeURIComponent(props.isbn)}`;
    window.location= url;




    // axios.post('https://www.google.com/search?q=banana')
    // .catch(error => {
    //     // Handle errors if any
    //     console.error(error);
    //   })

    // axios({
    //     method: 'get',
    //     url: `https://www.google.com/search?q=${props.isbn}`,
    //     mode: 'no-cors',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     //   'Content-Type': 'application/json',
    //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //         'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    //     },
    //     withCredentials: true,
    //     credentials: 'same-origin',
    // });
    // const searchGoogle = (query) => {

        // const url = `https://www.google.com/search?q=${encodeURIComponent(props.isbn)}`;
        // axios.get(url)
        //   .then(response => {
        //     const newWindow = window.open(response.request.responseURL, '_blank');
        //     newWindow.focus();
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });

    //   };
      


    };

    return (

        <div id="bookInfo">
            <article className="bookCard mb-5 w-50 mx-auto" id={props.id}>
                <h3>{props.title}</h3>
                <p>by {props.author}</p>
                {props.image}
                <p id="description" className="fst-italic">{props.description}</p>
                <small id="isbn">ISBN: {props.isbn}</small>
                <button type="button" onClick={goShop} className="btn w-100 btn-outline-primary my-4">SHOP</button>
            </article>
        </div> 

    );

}

export default BookCard;