import React, { useState } from 'react';
import axios from 'axios';

function GameForm({ game, onSubmit }) {
  const [name, setName] = useState(game?.name || '');
  const [url, setUrl] = useState(game?.url || '');
  const [author, setAuthor] = useState(game?.author || '');
  const [publishedDate, setPublishedDate] = useState(game?.publishedDate || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameData = { name, url, author, publishedDate };
    if (game) {
      await axios.put(`http://localhost:5000/api/games/${game._id}`, gameData);
    } else {
      await axios.post('http://localhost:5000/api/games', gameData);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} placeholder="Published Date" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GameForm;
