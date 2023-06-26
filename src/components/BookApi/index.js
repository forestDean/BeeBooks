import React, { useEffect, useState } from 'react';
import "./bookapi.css";
import axios from 'axios';
import BookCard from './../BookCard'
import Row from "./../Row";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children+subject:";
// const APIKEY = "&key=AIzaSyAsBgCpq65SZuym7PV66Qi1qfp_5xIdA0w";
const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE";


const BookApi = ({searchQuery}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log('Search query @API:', searchQuery);
      console.log('Search query URL:', (BASEURL + searchQuery + APIKEY));
      try {
        const response = await axios.get(BASEURL + searchQuery + APIKEY );
        setBooks(response.data.items);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

 // Trigger the API when the searchQuery prop changes in Search component
    getData();
  }, [searchQuery]);

  return (
    <div className="container mx-auto mt-5" id="bookResults">
      {/* <h2 className="mb-4">Book Search Results:</h2> */}
            
      <Row id="bookInfo">
        {books.map((book) => (
          <BookCard 
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks && ( <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" /> )}
          description={book.volumeInfo.description}
          isbn={book.volumeInfo.industryIdentifiers[0].identifier}
          />
       ))}
      </Row>
      
 </div>

  );


};

export default BookApi;