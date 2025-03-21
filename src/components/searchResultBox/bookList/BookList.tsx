import { Fragment } from 'react';
import type { InfiniteBookData } from '../../../types/book.types.ts';
import BookItem from './bookItem/BookItem.tsx';

interface BookListProps {
  data: InfiniteBookData;
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
