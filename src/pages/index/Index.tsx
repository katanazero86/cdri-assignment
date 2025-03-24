import { useState } from 'react';
import axios from 'axios';
import { useBooks, UseBooksParams } from '../../hooks/api/useBooks.ts';
import SearchBox from '../../components/searchBox/SearchBox.tsx';
import Spinner from '../../components/spinner/Spinner.tsx';
import Error404 from '../errors/Error404.tsx';
import Error500 from '../errors/Error500.tsx';
import Typography from '../../components/typography/Typography.tsx';
import BookResultBox from '../../components/bookResultBox/BookResultBox.tsx';
import BookResultTitle from '../../components/bookResultBox/bookResultTitle/BookResultTitle.tsx';
import NoBooks from '../../components/bookResultBox/noBooks/NoBooks.tsx';

export default function Index() {
  const [bookSearch, setBookSearch] = useState<UseBooksParams>({
    query: '',
    target: '',
  });

  const handleSearch = (query: string, target: UseBooksParams['target']) => {
    setBookSearch({
      target,
      query,
    });
  };

  const { data, isError, error, isLoading, fetchNextPage, isFetchingNextPage } = useBooks({
    ...bookSearch,
  });
  if (isError) {
    console.error('useBooks Error..');
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 404) {
        return <Error404 />;
      } else if (status === 500) {
        return <Error500 />;
      } else {
        if (!error.response) {
          return (
            <div className="w-full max-w-[960px] m-auto pt-[108px]">
              <Typography as="p" className="text-text-primary font-semibold">
                {error.code}-{error.name}
              </Typography>
            </div>
          );
        }
      }
    }
  }

  const total = data?.pages[0]?.meta.total_count ?? 0;
  const isEnd = data?.pages[data.pages.length - 1].meta.is_end ?? false;

  return (
    <>
      {(isLoading || isFetchingNextPage) && <Spinner />}
      <section className="w-full max-w-[960px] m-auto pt-[108px]">
        <Typography as="h2" className="font-bold text-text-primary text-[22px]">
          도서 검색
        </Typography>
        <SearchBox onSearch={handleSearch} />
        <BookResultBox
          data={data}
          onFetchNext={fetchNextPage}
          isEnd={isEnd}
          total={total}
          renderTitle={() => <BookResultTitle text="도서 검색 결과" total={total} />}
          renderEmpty={() => <NoBooks text="검색된 결과가 없습니다." />}
        />
      </section>
    </>
  );
}
