import BookList from './bookList/BookList.tsx';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.ts';

interface BookResultBoxProps {
  data?: Response.BookDocument[] | null;
  total?: number;
  isEnd?: boolean;
  onFetchNext: VoidFunction;
  renderTitle: () => React.ReactNode;
  renderEmpty: () => React.ReactNode;
}

export default function BookResultBox({
  data = null,
  total = 0,
  isEnd = false,
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
      {total !== 0 && <BookList data={data} />}
      {total !== 0 && !isEnd && <div className="w-full h-[100px]" ref={ref}></div>}
    </div>
  );
}
