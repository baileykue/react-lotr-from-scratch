import React, { useState, useEffect } from 'react';
import CharactersList from '../../components/Characters/CharactersList';
import Controls from '../../components/Controls/Controls';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setCharacters(data);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Controls
        query={query}
        setQuery={setQuery}
        race={race}
        setRace={setRace}
        handleClick={handleClick}
      />
      <CharactersList characters={characters} />
    </div>
  );
}
