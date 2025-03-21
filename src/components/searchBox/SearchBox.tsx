import Typography from '../typography/Typography.tsx';
import Button from '../button/Button.tsx';
import Input from '../input/Input.tsx';
import { Search } from 'lucide-react';

export default function SearchBox() {
  return (
    <div className="flex flex-col w-full max-w-[568px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">검색 결과</Typography>
      <div className="flex items-center gap-4 pt-[16px]">
        <div className="flex-auto">
          <Input
            placeholder="검색어를 입력하세요"
            variant="rounded"
            renderIcon={() => <Search />}
          />
        </div>
        <Button label="상세검색" onClick={() => {}} variant="outlined" size="sm" />
      </div>
      {/*<Input placeholder="검색어를 입력" size="sm" />*/}
      {/*<Input placeholder="검색어를 입력하세요" variant="rounded" renderIcon={() => <Search />} />*/}
    </div>
  );
}
