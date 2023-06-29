import React, { useEffect, useState } from 'react';
import "./bookapi.css";
import axios from 'axios';
import BookCard from './../BookCard'
import Row from "./../Row";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children+subject:";
const NUMBER = "&maxResults=40";
// const APIKEY = "&key=AIzaSyAsBgCpq65SZuym7PV66Qi1qfp_5xIdA0w";
const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE";


const BookApi = ({ searchQuery, setSubmitError, setDataNull }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      console.log('Search query @API:', searchQuery);
      console.log('Search query URL:', (BASEURL + searchQuery + NUMBER + APIKEY));
      try {
        const response = await axios.get(BASEURL + searchQuery + NUMBER + APIKEY );
        console.log('Response Code: ', response.status);

        if (response.data) {
          // setDataNull(false); // Successful data retrieval

          //  ***************** filter results *****************

          const filteredData = response.data.items.filter(item => 
            item.volumeInfo.imageLinks && 
            item.volumeInfo.imageLinks.thumbnail && 
            item.volumeInfo.description !== '' && 
            // item.volumeInfo.description.length < 740 && 
            item.volumeInfo.maturityRating === 'NOT_MATURE'
            );

          console.log(filteredData);
          console.log("OK");




          // Randomise with Fisher-Yates Algorithm
          const shuffleResponse = response => {
            for (let i = response.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = response[i];
              response[i] = response[j];
              response[j] = temp;
            }

            // Choose first 10 books
            const selectedBooks = response.slice(0, 10);
            console.log(selectedBooks);
            // save to Local Storage
            const stringifiedData = JSON.stringify(selectedBooks);
            localStorage.setItem('selectedBooks', stringifiedData);
            console.log('API response saved to local storage.');

            const displayBooks = JSON.parse(localStorage.getItem("selectedBooks"));

            setBooks(displayBooks);
            
          }
          
        // shuffleResponse(response.data.items); // trigger shuffle
        shuffleResponse(filteredData); // trigger shuffle

        // } else {
        //   setDataNull(true); // Set the "no data" error message
        }
      
      } catch (error) {
        console.error(error);
        setSubmitError(true);
        // setDataNull(false);
      }
    };

 // trigger the API when the searchQuery prop changes in Search component
    getData();
  }, [searchQuery, setSubmitError, setDataNull]);

  return (
    <section className="mx-auto mt-4" id="bookResults">
      <h2 className="my-4 mx-auto p-2">Book Search Results:</h2>
            
      <Row className="bookInfo">
        {books.map((book) => (
          <BookCard 
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks && ( <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" /> )}
          description={book.volumeInfo.description}
          isbn={book.volumeInfo.industryIdentifiers[0].identifier}
          type={book.volumeInfo.industryIdentifiers[0].type}

          />
       ))}
      </Row>
      
 </section>

  );


};

export default BookApi;