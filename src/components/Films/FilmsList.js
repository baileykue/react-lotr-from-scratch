import React from 'react';
import './FilmList.css';

export default function FilmsList({ films }) {
  return (
    <>
      {films.map((film) => (
        <div key={film.id} className="film-card">
          <img
            src={`${process.env.PUBLIC_URL}/films/${film.title
              .toLowerCase()
              .split(' ')
              .join('-')}.jpeg`}
          />
          <h2>{film.title}</h2>
        </div>
      ))}
    </>
  );
}
