import bookIcon from '../../../assets/icons/book_icon.png';
import Typography from '../../typography/Typography.tsx';

export default function NoBooks() {
  return (
    <div className="w-[160px] flex flex-col items-center">
      <img
        width={80}
        height={80}
        src={bookIcon}
        className="mb-[24px] object-cover w-[80px] h-[80px]"
      />
      <Typography as="p" className="text-[16px] text-text-secondary">
        검색된 결과가 없습니다.
      </Typography>
    </div>
  );
}
