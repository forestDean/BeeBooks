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
        // Randomise with Fisher-Yates Algorithm
        const shuffleArray = array => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
          console.log(array);
        }
        shuffleArray(response.data.items);

        // setBooks(response.data.items);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

 // Trigger the API when the searchQuery prop changes in Search component
    getData();
  }, [searchQuery]);

  return (
    <section className="mx-auto mt-5" id="bookResults">
      <h2 className="my-4 mx-auto">Book Search Results:</h2>
            
      <Row className="bookInfo">
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
      
 </section>

  );


};

export default BookApi;