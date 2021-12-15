import React, { useState, useEffect } from 'react';
import BooksList from '../../components/Books';
import fetchBooks from '../../services/books';

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
    <div>
      <h1>Books</h1>
      <BooksList />
    </div>
  );
}
