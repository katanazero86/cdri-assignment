import { useState } from 'react';
import { useBooks } from '../../hooks/useBooks.ts';
import SearchBox from '../../components/searchBox/SearchBox.tsx';
import SearchResultBox from '../../components/searchResultBox/SearchResultBox.tsx';
import Spinner from '../../components/spinner/Spinner.tsx';

export default function Index() {
  const [query, setQuery] = useState('');
  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const { data, isError, isLoading, fetchNextPage, isFetchingNextPage } = useBooks({ query });
  if (isError) {
    console.error('useBooks Error..');
    // TODO: 에러 핸들링
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
