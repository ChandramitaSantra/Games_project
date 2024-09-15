import React, { useState, useEffect } from 'react';
import { fetchGames, createGame, updateGame, deleteGame } from './api';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState({ name: '', url: '', author: '', publishedDate: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const response = await fetchGames();
    setGames(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateGame(editingId, formData);
    } else {
      await createGame(formData);
    }
    setFormData({ name: '', url: '', author: '', publishedDate: '' });
    setEditingId(null);
    loadGames();
  };

  const handleEdit = (game) => {
    setFormData({
      name: game.name,
      url: game.url,
      author: game.author,
      publishedDate: game.publishedDate.split('T')[0], // Format date for input field
    });
    setEditingId(game._id);
  };

  const handleDelete = async (id) => {
    await deleteGame(id);
    loadGames();
  };

  return (
    <div className="container">
      <h1>Games CRUD</h1>
      <form onSubmit={handleSubmit} className="game-form">
        <input 
          type="text" 
          placeholder="Game Name" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          required 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={formData.author} 
          onChange={(e) => setFormData({ ...formData, author: e.target.value })} 
          required 
        />
        <input 
          type="text" 
          placeholder="URL" 
          value={formData.url} 
          onChange={(e) => setFormData({ ...formData, url: e.target.value })} 
          required 
        />
        <input 
          type="date" 
          value={formData.publishedDate} 
          onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })} 
          required 
        />
        <button type="submit" className="submit-btn">
          {editingId ? 'Update Game' : 'Add Game'}
        </button>
      </form>

      <table className="game-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>URL</th>
            <th>Published Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game._id}>
              <td>{game.name}</td>
              <td>{game.author}</td>
              <td><a href={game.url} target="_blank" rel="noopener noreferrer">{game.url}</a></td>
              <td>{new Date(game.publishedDate).toLocaleDateString()}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(game)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(game._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
