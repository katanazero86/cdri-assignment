import axios from 'axios';

const API_URL = import.meta.env.VITE_KAKAO_BOOK_API_URL;
const API_KEY = import.meta.env.VITE_KAKAO_BOOK_API_KEY;

export const bookApi = {
  async findBooks(
    page: number,
    query: string,
    target: '' | 'title' | 'isbn' | 'publisher' | 'person',
  ) {
    try {
      let queryString = `?page=${page}&query=${query}`;
      if (target !== '') {
        queryString += `&target=${target}`;
      }
      const res = await axios.get<Response.BookResponse>(`${API_URL}${queryString}`, {
        headers: {
          Authorization: `KakaoAK ${API_KEY}`,
        },
      });
      return res.data;
    } catch (e) {
      console.error('findBooks API Error:', e);
      throw e;
    }
  },
};
