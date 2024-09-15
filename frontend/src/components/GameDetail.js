import React from 'react';
import axios from 'axios';

function GameDetail({ game, onGameDelete }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/games/${game._id}`);
    onGameDelete();
  };

  return (
    <div>
      <h3>{game.name}</h3>
      <p>URL: {game.url}</p>
      <p>Author: {game.author}</p>
      <p>Published Date: {new Date(game.publishedDate).toDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default GameDetail;
