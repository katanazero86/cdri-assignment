import { useState } from 'react';
import Typography from '../typography/Typography.tsx';
import Button from '../button/Button.tsx';
import SearchBoxInput from './searchBoxInput/SearchBoxInput.tsx';
import DetailSearchModal from '../modals/detailSearchModal/DetailSearchModal.tsx';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [isShow, setIsShow] = useState(false);

  const handleDetailSearchClick = () => {
    setIsShow(true);
  };

  return (
    <div className="flex flex-col w-full max-w-[568px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">
        검색 결과
      </Typography>
      <div className="flex items-center gap-4 pt-[16px]">
        <div className="flex-auto">
          <SearchBoxInput placeholder="검색어를 입력하세요" onSearch={onSearch} />
        </div>
        <Button label="상세검색" onClick={handleDetailSearchClick} variant="outlined" size="sm" />
      </div>
      <div className="mt-4">
        <DetailSearchModal />
      </div>
    </div>
  );
}
