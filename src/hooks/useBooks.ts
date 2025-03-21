import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../apis';
const QUERY_KEY = ['books'];

export const useBooks = ({ query }: { query: string }) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY, query],
    queryFn: ({ pageParam = 1, queryKey }) => api.book.findBooks(pageParam, queryKey[1]),
    initialPageParam: 1,
    enabled: query !== '',
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage != undefined) return lastPage.meta.is_end === false ? allPages.length + 1 : null;
      return null;
    },
    // getPreviousPageParam: (firstPage, allPages) => null,
  });
};
