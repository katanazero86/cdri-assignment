import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
const QUERY_KEY = ['books'];

const API_URL = import.meta.env.VITE_KAKAO_BOOK_API_URL;
const API_KEY = import.meta.env.VITE_KAKAO_BOOK_API_KEY;

const findBooks = async (page: number, query: string) => {
  try {
    const res = await axios.get(`${API_URL}?page=${page}&size=10&query=${query}`, {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const useBooks = ({ query }: { query: string }) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY, query],
    queryFn: ({ pageParam = 1, queryKey }) => findBooks(pageParam, queryKey[1]),
    initialPageParam: 1,
    enabled: query !== '',
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.meta.is_end === false ? allPages.length + 1 : null;
    },
    // getPreviousPageParam: (firstPage, allPages) => null,
  });
};
