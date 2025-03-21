import { Fragment } from 'react';
import { ChevronDown } from 'lucide-react';
import type { BookDocument, InfiniteBookData } from '../../../types/book.types.ts';
import Typography from '../../typography/Typography.tsx';
import Button from '../../button/Button.tsx';

type BookItemProps = BookDocument;

const BookItem = ({ price, title, authors, thumbnail }: BookItemProps) => {
  const author = `${authors[0]}${authors.length > 1 ? ` 외 ${authors.length}명` : ''}`;

  return (
    <li className="flex items-center p-[16px]">
      <div className="flex items-center flex-auto">
        <img
          width={48}
          height={68}
          src={thumbnail}
          alt={title}
          className="object-cover w-[48px] ml-[32px]"
        />
        <div className="flex items-center justify-between w-full pr-[56px]">
          <Typography
            as="h3"
            className="flex flex-auto items-center text-text-primary text-[18px] font-bold pl-[48px]"
          >
            <span className="inline-block truncate w-full max-w-[250px]">{title}</span>
            <span className="inline-block pl-[16px] text-text-secondary text-[14px]">{author}</span>
          </Typography>
          <Typography as="p" className="text-text-primary text-[18px]">
            {price.toLocaleString()}원
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button label="구매하기" onClick={() => null} />
        <Button
          label="상세보기"
          variant="secondary"
          iconRender={() => <ChevronDown className="h-[16px] w-[16px] pl-2]" />}
          onClick={() => null}
        />
      </div>
    </li>
  );
};

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
