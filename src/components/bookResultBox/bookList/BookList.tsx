import BookItem from './bookItem/BookItem.tsx';

interface BookListProps {
  data?: Response.BookDocument[];
  onClickLike: (targetBook: Response.BookDocument) => void;
  likes: Response.BookDocument[];
}

export default function BookList({ data = [], onClickLike, likes }: BookListProps) {
  return (
    <ul className="flex flex-col">
      {data.map((book) => {
        return <BookItem key={book.isbn} likes={likes} onClickLike={onClickLike} {...book} />;
      })}
    </ul>
  );
}
