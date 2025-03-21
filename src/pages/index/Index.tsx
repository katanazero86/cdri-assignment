import { useState } from 'react';
import SearchBox from '../../components/searchBox/SearchBox.tsx';
import SearchResultBox from '../../components/searchResultBox/SearchResultBox.tsx';
import { useBooks } from '../../hooks/useBooks.ts';
import Spinner from '../../components/spinner/Spinner.tsx';

export default function Index() {
  const [query, setQuery] = useState('');
  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const { data, isError, isLoading } = useBooks({ query });

  return (
    <>
      {isLoading && <Spinner />}
      <section className="w-full max-w-[960px] m-auto pt-[108px]">
        <SearchBox onSearch={handleSearch} />
        <SearchResultBox data={data} />
      </section>
    </>
  );
}
