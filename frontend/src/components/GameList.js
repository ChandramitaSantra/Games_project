import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GameList({ onGameSelect }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('http://localhost:5000/api/games');
      setGames(response.data);
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h2>All Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id} onClick={() => onGameSelect(game)}>
            {game.name} ({game.author})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
