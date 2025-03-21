import { X } from 'lucide-react';
import Button from '../../button/Button.tsx';
import Input from '../../forms/input/Input.tsx';
import CustomSelect from '../../forms/customSelect/CustomSelect.tsx';

export default function DetailSearchModal() {
  return (
    <div className="p-[8px] shadow-lg w-full min-h-[160px] rounded-lg">
      <div className="flex justify-end">
        <X className="cursor-pointer" />
      </div>
      <div className="flex items-center gap-1 mt-[8px]">
        <div className="flex-1">
          <CustomSelect options={['제목', '저자명', '출판사']} />
        </div>
        <div className="flex-3">
          <Input onChange={() => null} placeholder="검색어 입력" />
        </div>
      </div>
      <div className="mt-[16px]">
        <Button isFull label="검색하기" onClick={() => null} />
      </div>
    </div>
  );
}
