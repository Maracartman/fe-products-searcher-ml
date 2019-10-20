import Axios from 'axios';

const instance = Axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    Accept: 'application/json'
  }
});

export const searchByQuery = async query =>
  instance.get(`/items?q=${encodeURIComponent(query)}`);

export const searchProductById = async id => instance.get(`/items/${id}`);
