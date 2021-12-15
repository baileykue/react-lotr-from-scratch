import React from 'react';
import house from './house.png';
import './Main.css';

export default function Main() {
  return (
    <div>
      <h1>Welcome to my LOTR app</h1>
      <p>Navigate to each page to find more info on books, characters, and films.</p>
      <img src={house} />
    </div>
  );
}
