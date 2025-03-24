import BookItem from './bookItem/BookItem.tsx';

interface BookListProps {
  data?: Response.BookDocument[] | null;
}

export default function BookList({ data = null }: BookListProps) {
  return (
    <ul className="flex flex-col">
      {data !== null &&
        data.map((book) => {
          return <BookItem key={book.isbn} {...book} />;
        })}
    </ul>
  );
}
