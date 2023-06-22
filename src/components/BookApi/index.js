import React, { useEffect, useState } from 'react';
import "./bookapi.module.css";
import axios from 'axios';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=children";
// const APIKEY = "&key=AIzaSyAsBgCpq65SZuym7PV66Qi1qfp_5xIdA0w";
const APIKEY = "&key=AIzaSyDJb8eCbCaQMV3JI-J2ykpXTsYZQDB_yxE";


const BookApi = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const query = "+subject:flowers";
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
  }, []);

  return (
    <div>
      <h2>Children's Books</h2>
      {/* <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default BookApi;