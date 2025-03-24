import BookList from './bookList/BookList.tsx';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.ts';

interface BookResultBoxProps {
  data?: Response.BookDocument[];
  total?: number;
  isEnd?: boolean;
  likes: Response.BookDocument[];
  onClickLike: (targetBook: Response.BookDocument) => void;
  onFetchNext: VoidFunction;
  renderTitle: () => React.ReactNode;
  renderEmpty: () => React.ReactNode;
}

export default function BookResultBox({
  data = [],
  total = 0,
  isEnd = false,
  likes,
  onClickLike,
  renderTitle,
  renderEmpty,
  onFetchNext,
}: BookResultBoxProps) {
  const { ref } = useIntersectionObserver(() => {
    onFetchNext();
  });

  return (
    <div className="pt-[24px]">
      {renderTitle()}
      {total === 0 && <div className="w-full flex justify-center pt-[120px]">{renderEmpty()}</div>}
      {total !== 0 && <BookList likes={likes} onClickLike={onClickLike} data={data} />}
      {total !== 0 && !isEnd && <div className="w-full h-[100px]" ref={ref}></div>}
    </div>
  );
}
