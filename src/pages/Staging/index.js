import React, { useEffect, useState } from 'react';
import "./staging.module.css";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Search from "../../components/Search";
import axios from 'axios';

const ChildrensBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: 'children',
            subject: 'Children'
          }
        });

        setBooks(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Children's Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrensBooks;



// const Staging = () => {
//     return (  
//           <Row>            
//             <Column size="md-12">
//               <h1>STAGING</h1>
//               <Search />
//             </Column>
//           </Row>
//     );
// }
 
// export default Staging ;