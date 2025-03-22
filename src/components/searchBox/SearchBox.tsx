import { useState } from 'react';
import Typography from '../typography/Typography.tsx';
import Button from '../button/Button.tsx';
import SearchBoxInput from './searchBoxInput/SearchBoxInput.tsx';
import DetailSearchModal from '../modals/detailSearchModal/DetailSearchModal.tsx';
import type { BookOnSearch, BookSearchTargetEng } from '../../types/bookSearch.types.ts';

interface SearchBoxProps {
  onSearch: BookOnSearch;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [resetKey, setResetKey] = useState<'general' | 'detail'>('general');
  const [isOpen, setIsOpen] = useState(false);
  const [detailSearchParams, setDetailSearchParams] = useState<{
    query: string;
    target: BookSearchTargetEng;
  }>({
    query: '',
    target: '',
  });

  const handleGeneralSearch = (query: string, target: BookSearchTargetEng) => {
    setDetailSearchParams({
      query: '',
      target: '',
    });
    onSearch(query, target);
    handleClose();
    setResetKey('general');
  };

  const handleDetailSearchClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDetailSearch = (query: string, target: BookSearchTargetEng) => {
    setDetailSearchParams({ query, target });
    onSearch(query, target);
    handleClose();
    setResetKey('detail');
  };

  return (
    <div className="flex flex-col w-full max-w-[568px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">
        검색 결과
      </Typography>
      <div className="flex items-center gap-4 pt-[16px]">
        <div className="flex-auto">
          <SearchBoxInput
            key={resetKey}
            placeholder="검색어를 입력하세요"
            onSearch={handleGeneralSearch}
            onFocus={handleClose}
          />
        </div>
        <Button label="상세검색" onClick={handleDetailSearchClick} variant="outlined" size="sm" />
      </div>
      {isOpen && (
        <div className="mt-4">
          <DetailSearchModal
            onClose={handleClose}
            onSearch={handleDetailSearch}
            defaultValues={detailSearchParams}
          />
        </div>
      )}
    </div>
  );
}
