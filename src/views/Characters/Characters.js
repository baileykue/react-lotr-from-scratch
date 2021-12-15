import React, { useState, useEffect } from 'react';
import CharacterList from '../../components/Characters/CharactersList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <CharacterList key={characters.id} characters={characters} />
    </div>
  );
}
