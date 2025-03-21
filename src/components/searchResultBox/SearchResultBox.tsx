import type { InfiniteData } from '@tanstack/react-query'
import SearchResultText from './searchResultText/SearchResultText.tsx';
import NoBooks from './noBooks/NoBooks.tsx';
import BookList from './bookList/BookList.tsx';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.ts';;

interface SearchResultBoxProps {
  data: InfiniteData<Response.BookResponse> | undefined;
  onFetchNext: VoidFunction;
}

export default function SearchResultBox({ data, onFetchNext }: SearchResultBoxProps) {
  const { ref } = useIntersectionObserver(() => {
    onFetchNext();
  });

  const isEnd = data?.pages[data.pages.length - 1].meta.is_end ?? false;
  const total = data?.pages[0]?.meta.total_count ?? 0;
  return (
    <div className="pt-[24px]">
      <SearchResultText total={total} />
      {total === 0 && (
        <div className="w-full flex justify-center pt-[120px]">
          <NoBooks />
        </div>
      )}
      {total !== 0 && <BookList data={data} />}
      {total !== 0 && !isEnd && <div className="w-full h-[100px]" ref={ref}></div>}
    </div>
  );
}
