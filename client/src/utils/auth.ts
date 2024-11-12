import { login } from '../api/authAPI.tsx';

class AuthService {
  async login(username: string, password: string) {
    const { token } = await login(username, password);
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    const token = this.getToken();
    // Optionally, you can add more checks to validate the token
    return !!token;
  }
}

export default new AuthService();