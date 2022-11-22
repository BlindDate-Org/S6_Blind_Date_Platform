import axios from "axios";

export default class BaseHttpService {
  BASE_URL = process.env.REACT_APP_BASE_URL || "https://localhost:7071";
  _accessToken = null;

  constructor(routerStore) {
    this.routerStore = routerStore;
  }

  /*async get(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions());

    await axios.get(`${this.BASE_URL}/${endpoint}`, options)
      .then(function (response) {
        const responseData = JSON.parse(response.data);
        console.log("response:", response.data);
        console.log("response parse:", responseData);
        return responseData;
      })
      .catch((error) => this._handleHttpError(error));
  }*/

  async get(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions());

    try {
      const response = await axios.get(`${this.BASE_URL}/${endpoint}`, options);
      console.log("response  ", response);
      return response.data;
    } catch (error) {
      this._handleHttpError(error);
    }
  }

  async post(endpoint, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  async delete(endpoint, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch((error) => this._handleHttpError(error));
  }

  async put(endpoint, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios
      .put(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch((error) => this._handleHttpError(error));
  }

  _handleHttpError(error) {
    console.log("error: ", error);
    const { statusCode } = error.response.data;

    if (statusCode !== 401) {
      throw error;
    } else {
      return this._handle401();
    }
  }

  _handle401() {
    window.location.hash = "/signin";
  }

  _getCommonOptions() {
    const token = this.loadToken();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken(accessToken) {
    this._accessToken = accessToken;
    return localStorage.setItem("accessToken", accessToken);
  }

  loadToken() {
    const token = localStorage.getItem("accessToken");
    this._accessToken = token;
    return token;
  }

  removeToken() {
    localStorage.removeItem("accessToken");
  }
}
