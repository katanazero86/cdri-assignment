import Title from './title/Title.tsx';
import Input from './input/Input.tsx';
import Button from '../button/Button.tsx';
import { ChevronDown } from 'lucide-react';

export default function SearchBox() {
  return (
    <div className="flex flex-col">
      <Title text="도서 검색" />
      <div>
        <Input />
        <Button label="구매 하기" onClick={() => window.scrollTo(0, 0)} />
        <Button
          label="구매 하기"
          onClick={() => window.scrollTo(0, 0)}
          variant="secondary"
          iconRender={() => <ChevronDown className="ml-1.5 w-5 h-5" />}
        />
        <Button label="구매 하기" onClick={() => window.scrollTo(0, 0)} variant="outlined" />
        <Button
          label="상세검색"
          onClick={() => window.scrollTo(0, 0)}
          variant="outlined"
          size="sm"
        />
      </div>
    </div>
  );
}
