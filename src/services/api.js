import Axios from 'axios';

const instance = Axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    Accept: 'application/json'
  }
});

export const searchByQuery = async query => {
  return instance.get(`/items?q=${encodeURIComponent(query)}`);
};

export const searchProductById = async id => {
  return instance.get(`/items/${id}`);
};
