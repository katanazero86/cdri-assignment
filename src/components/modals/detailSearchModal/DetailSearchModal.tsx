import { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../../button/Button.tsx';
import Input from '../../forms/input/Input.tsx';
import CustomSelect from '../../forms/customSelect/CustomSelect.tsx';
import { DETAIL_SEARCH_OPTIONS } from '../../../constants/selectOptions.constants.ts';
import type { BookOnSearch, BookSearchTargetEng } from '../../../types/bookSearch.types.ts';

interface DetailSearchModalProps {
  onClose: VoidFunction;
  onSearch: BookOnSearch;
  defaultValues: {
    query: string;
    target: BookSearchTargetEng;
  };
}

export default function DetailSearchModal({
  onClose,
  onSearch,
  defaultValues,
}: DetailSearchModalProps) {
  const [query, setQuery] = useState(defaultValues.query);
  const [targetObj, setTargetObj] = useState(() => {
    const find = DETAIL_SEARCH_OPTIONS.find((item) => item.value === defaultValues.target);
    if (find) return find;
    return DETAIL_SEARCH_OPTIONS[0];
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSelect = (targetValue: { label: string; value: string }) => {
    setTargetObj(targetValue);
  };

  const handleClick = () => {
    onSearch(query, targetObj!.value as BookSearchTargetEng);
  };

  return (
    <div className="p-[8px] shadow-lg w-full min-h-[160px] rounded-lg">
      <div className="flex justify-end">
        <X className="cursor-pointer" onClick={onClose} />
      </div>
      <div className="flex items-center gap-1 mt-[8px]">
        <div className="flex-1">
          <CustomSelect
            options={DETAIL_SEARCH_OPTIONS}
            onSelect={handleSelect}
            defaultValue={targetObj!}
          />
        </div>
        <div className="flex-3">
          <Input onChange={handleChange} placeholder="검색어 입력" value={query} />
        </div>
      </div>
      <div className="mt-[16px]">
        <Button isFull label="검색하기" onClick={handleClick} />
      </div>
    </div>
  );
}
