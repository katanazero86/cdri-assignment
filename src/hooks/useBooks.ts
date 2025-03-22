import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../apis';
import type { BookSearchTargetEng } from '../types/bookSearch.types.ts';
const QUERY_KEY = ['books'];

export interface UseBooksParams {
  query: string;
  target: BookSearchTargetEng;
}

export const useBooks = ({ query, target }: UseBooksParams) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY, query, target],
    queryFn: ({ pageParam = 1, queryKey }) =>
      api.book.findBooks(pageParam, queryKey[1], queryKey[2] as BookSearchTargetEng),
    initialPageParam: 1,
    enabled: query !== '',
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage != undefined) return !lastPage.meta.is_end ? allPages.length + 1 : null;
      return null;
    },
    // getPreviousPageParam: (firstPage, allPages) => null,
  });
};
