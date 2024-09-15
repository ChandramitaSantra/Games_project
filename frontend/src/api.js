import axios from 'axios';

const API_URL = 'http://localhost:5000/api/games';

export const fetchGames = () => axios.get(API_URL);
export const createGame = (game) => axios.post(API_URL, game);
export const updateGame = (id, game) => axios.put(`${API_URL}/${id}`, game);
export const deleteGame = (id) => axios.delete(`${API_URL}/${id}`);
export const fetchGame = (id) => axios.get(`${API_URL}/${id}`);
