import React, { useState, useEffect } from 'react';
import FilmsList from '../../components/Films/FilmsList';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <FilmsList films={films} />
    </div>
  );
}
