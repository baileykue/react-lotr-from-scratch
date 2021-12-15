import React from 'react';
import './CharacterList.css';

export default function CharactersList({ characters }) {
  return (
    <>
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img
            className="character"
            src={`${process.env.PUBLIC_URL}/characters/${character.name
              .toLowerCase()
              .split(' ')
              .join('-')}.png`}
          />
          <h2>{character.name}</h2>
        </div>
      ))}
    </>
  );
}
