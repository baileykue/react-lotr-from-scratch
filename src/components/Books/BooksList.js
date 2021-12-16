import React from 'react';
import './BookList.css';

export default function BooksList({ books }) {
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <img
            className="book"
            src={`${process.env.PUBLIC_URL}/books/${book.title
              .toLowerCase()
              .split(' ')
              .join('-')}.png`}
          />
          <h2>{book.title}</h2>
        </div>
      ))}
    </>
  );
}
