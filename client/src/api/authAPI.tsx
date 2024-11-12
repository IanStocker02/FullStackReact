import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    } else {
      throw new Error('Login failed');
    }
  }
};