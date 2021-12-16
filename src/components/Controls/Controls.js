import React from 'react';
import './Controls.css';

export default function Controls({ query, setQuery, race, setRace, handleClick }) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search For Character"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
    </div>
  );
}
