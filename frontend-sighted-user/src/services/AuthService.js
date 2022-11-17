import { post } from 'axios';
import BaseHttpService from './BaseHttpService';

export default class AuthService extends BaseHttpService {

  async signin(username, password) {
    const result = await post(`${this.BASE_URL}/???`, { username, password });
    const accessToken = result.data.accessToken;
    this.saveToken(accessToken);
    return result.data.username;
  }

  async signup(username, password) {
    await post(`${this.BASE_URL}/????`, { username, password });
  }

  async signout() {
    this.removeToken();
  }
}