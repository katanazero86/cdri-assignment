import { useState } from 'react';
import axios from 'axios';
import { useBooks, UseBooksParams } from '../../hooks/api/useBooks.ts';
import SearchBox from '../../components/searchBox/SearchBox.tsx';
import SearchResultBox from '../../components/searchResultBox/SearchResultBox.tsx';
import Spinner from '../../components/spinner/Spinner.tsx';
import Error404 from '../errors/Error404.tsx';
import Error500 from '../errors/Error500.tsx';
import Typography from '../../components/typography/Typography.tsx';

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

  return (
    <>
      {(isLoading || isFetchingNextPage) && <Spinner />}
      <section className="w-full max-w-[960px] m-auto pt-[108px]">
        <SearchBox onSearch={handleSearch} />
        <SearchResultBox data={data} onFetchNext={fetchNextPage} />
      </section>
    </>
  );
}
