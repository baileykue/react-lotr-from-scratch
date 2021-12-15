import React, { useState, useEffect } from 'react';
import './Book.css';
import BooksList from '../../components/Books/BooksList';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <div className="book-list">
        <BooksList books={books} />
      </div>
    </>
  );
}
