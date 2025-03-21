import axios from 'axios';

const API_URL = import.meta.env.VITE_KAKAO_BOOK_API_URL;
const API_KEY = import.meta.env.VITE_KAKAO_BOOK_API_KEY;

export const bookApi = {
  async findBooks(page: number, query: string) {
    try {
      const res = await axios.get<Response.BookResponse>(
        `${API_URL}?page=${page}&size=10&query=${query}`,
        {
          headers: {
            Authorization: `KakaoAK ${API_KEY}`,
          },
        },
      );
      return res.data;
    } catch (e) {
      console.error('findBooks API Error:', e);
      throw e;
    }
  },
};
