import SearchBox from '../../components/searchBox/SearchBox.tsx';
import SearchResultBox from '../../components/searchResultBox/SearchResultBox.tsx';

export default function Index() {
  return (
    <section className="w-full max-w-[960px] m-auto pt-[108px] border-dashed border border-indigo-500">
      <SearchBox />
      <SearchResultBox />
    </section>
  );
}
