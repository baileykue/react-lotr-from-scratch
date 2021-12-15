import React from 'react';

export default function CharactersList({ characters }) {
  return (
    <>
      {characters.map((character) => (
        <div key={character.id}>
          <h1>{character.name}</h1>
        </div>
      ))}
    </>
  );
}
