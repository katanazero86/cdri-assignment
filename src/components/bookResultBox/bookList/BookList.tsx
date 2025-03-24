import { Fragment } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import BookItem from './bookItem/BookItem.tsx';

interface BookListProps {
  data: InfiniteData<Response.BookResponse> | undefined;
}

export default function BookList({ data }: BookListProps) {
  return (
    <ul className="flex flex-col">
      {data!.pages.map((book, i) => {
        return (
          <Fragment key={i}>
            {book.documents.map((doc) => (
              <BookItem key={doc.isbn} {...doc} />
            ))}
          </Fragment>
        );
      })}
    </ul>
  );
}
