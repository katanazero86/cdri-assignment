import { memo } from 'react';
import bookIcon from '../../../assets/icons/book_icon.png';
import Typography from '../../typography/Typography.tsx';

interface NoBooksProps {
  text?: string;
}

function NoBooks({ text = '검색된 결과가 없습니다.' }: NoBooksProps) {
  return (
    <div className="w-[160px] flex flex-col items-center">
      <img
        width={80}
        height={80}
        src={bookIcon}
        className="mb-[24px] object-cover w-[80px] h-[80px]"
        alt="book-icon"
      />
      <Typography as="p" className="text-[16px] text-text-secondary">
        {text}
      </Typography>
    </div>
  );
}

export default memo(NoBooks);
