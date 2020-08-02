import axios from 'axios';

export const categories = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://pedradaflix.herokuapp.com/categorias'
      : 'http://localhost:8080/categorias',
});
