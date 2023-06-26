import React, { useEffect, useState } from 'react';
// import React from 'react';
import "./bookapi.css";
import axios from 'axios';
import BookCard from './../BookCard'
// import Search from "../../components/Search";

const BookApi = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);
    
  // const fetchData = () => {
  const FetchData = async () => {
    const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children+subject:";
    // const APIKEY = "&key=AIzaSyAsBgCpq65SZuym7PV66Qi1qfp_5xIdA0w";
    const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE";
    console.log('Search query @API:', {searchQuery});
    console.log('Search query URL:', (BASEURL + searchQuery + APIKEY));
    
    if (searchQuery) {
    //   axios
    //   .get(BASEURL + searchQuery + APIKEY )
    
    //   .then((response) => {
    //     // Handle the API response
    //     console.log(response.data.items);
    //     setBooks(response.data.items); 
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     console.log("ERROR")
    //     // console.error(error);
    //   });
    // }
    try {
      const response = await axios.get(BASEURL + searchQuery + APIKEY );
      setBooks(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error(error);
    }

  };
// Trigger the API call when the searchQuery prop changes 
useEffect(() => {
  FetchData();
  }, []);

  return (
    <div className="mx-auto" id="bookResults">
      <h2 className="mb-4">Book Search Results:</h2>
            
      <div id="bookInfo">
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
      </div>
          
    </div>

  );
}
}; 

export default BookApi;