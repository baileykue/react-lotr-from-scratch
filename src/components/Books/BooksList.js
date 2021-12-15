import React from 'react';

export default function BooksList({ books }) {
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
        </div>
      ))}
    </>
  );
}
