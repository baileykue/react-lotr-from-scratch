import React from 'react';

export default function FilmsList({ films }) {
  return (
    <>
      {films.map((film) => (
        <div key={film.id}>
          <h1>{film.title}</h1>
        </div>
      ))}
    </>
  );
}
