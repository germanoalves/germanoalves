import React, { useState, useEffect } from "react";


const Content = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => setBooks(data));
    }, []);
  
    const handleChange = (e) => {
      // 
    };
  
    
  return (
    <div id="content-books">
      <div class="menu-content-books">
       <small>Mostrando 1 até 25 de 2399 resultados.</small>
      <div class="grid-container">
      {books.map(book => (
        <div class="grid-item" key={book.id}>
          <img src="https://placehold.co/200x100" width={200} height={100} alt={book.title}/>
          <input type="checkbox" id={book.id} onChange={handleChange} />
          <label htmlFor={book.id}>{book.id}</label>
          <p>{book.title}</p>
          <span><strong>{book.editor}</strong></span>
          <span>{book.year}</span>
        </div>
      ))}
    </div>
      </div>      
    </div>
  );
};

export default Content;
