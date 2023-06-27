import React, { useEffect, useState } from 'react';
import "./bookapi.css";
import axios from 'axios';
import BookCard from './../BookCard'
// import Search from './../Search'

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children";
// const APIKEY = "&key=AIzaSyAsBgCpq65SZuym7PV66Qi1qfp_5xIdA0w";
const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE";


const BookApi = () => {

  const [books, setBooks] = useState([]);



  useEffect((event) => {
    const query = "+subject:foxes";
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.get(BASEURL + query + APIKEY );
        setBooks(response.data.items);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, 
  [] //check this
  );
  
  return (
    <div className="mx-auto" id="bookResults">
      <h2 className="mb-4">Book Search Results:</h2>
            
      <div id="bookInfo">
        {books.map((book) => (
          <BookCard 
          id={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks && ( <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" /> )}
          description={book.volumeInfo.description}
          isbn={book.volumeInfo.industryIdentifiers[0].identifier}
          />
       ))}
   </div>
      
 </div>

  );


};

export default BookApi;