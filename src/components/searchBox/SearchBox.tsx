import Title from './title/Title.tsx';
// import SearchInput from './searchInput/SearchInput.tsx';
import Button from '../button/Button.tsx';
import Input from '../input/Input.tsx';
// import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';

export default function SearchBox() {
  return (
    <div className="flex flex-col">
      <Title text="도서 검색" />
      <div className="flex items-center gap-4">
        {/*<SearchInput placeholder="검색어를 입력하세요" />*/}
        <div className="flex-auto">
          <Input
            placeholder="검색어를 입력하세요"
            variant="rounded"
            size="sm"
            renderIcon={() => <Search />}
          />
        </div>
        <Button label="상세검색" onClick={() => {}} variant="outlined" size="sm" />
      </div>
      <Input placeholder="검색어를 입력" size="sm" />
      <Input placeholder="검색어를 입력하세요" variant="rounded" renderIcon={() => <Search />} />
    </div>
  );
}
