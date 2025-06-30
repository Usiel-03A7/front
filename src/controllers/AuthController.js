// controllers/AuthController.js
import User from '../models/User';

const API_URL = 'http://localhost:3001';

export const register = async (email, password, name) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name, orders: [] })
  });
  return await response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
  const users = await response.json();
  if (users.length === 0) throw new Error('Credenciales inválidas');
  return users[0];
};
