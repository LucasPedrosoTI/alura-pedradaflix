import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://pedradaflix.herokuapp.com'
    : 'http://localhost:8080';

export const categories = axios.create({
  baseURL: URL + '/categorias',
});

export const Category = {
  async getCategories() {
    try {
      const { data } = await categories.get('/');

      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getCategoriesWithVideos() {
    try {
      const { data } = await categories.get('?_embed=videos');
      if (data[0].videos.length === 0) throw new Error('Cannot get videos');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
