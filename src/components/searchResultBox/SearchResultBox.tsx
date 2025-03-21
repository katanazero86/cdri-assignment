import SearchResultText from './searchResultText/SearchResultText.tsx';
import NoBooks from './noBooks/NoBooks.tsx';

export default function SearchResultBox() {
  return (
    <div className="pt-[24px]">
      <SearchResultText />
      <div className="w-full flex justify-center pt-[120px]">
        <NoBooks />
      </div>
    </div>
  );
}
