import SearchResultText from './searchResultText/SearchResultText.tsx';
import NoBooks from './noBooks/NoBooks.tsx';
import BookList from './bookList/BookList.tsx';
import type { InfiniteBookData } from '../../types/book.types.ts';

interface SearchResultBoxProps {
  data: InfiniteBookData;
}

export default function SearchResultBox({ data }: SearchResultBoxProps) {
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
    </div>
  );
}
