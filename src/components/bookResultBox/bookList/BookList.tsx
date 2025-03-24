import BookItem from './bookItem/BookItem.tsx';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage.utils.ts';
import { LOCAL_STORAGE_KEYS } from '../../../constants/localStorage.constants.ts';

interface BookListProps {
  data?: Response.BookDocument[] | null;
}

export default function BookList({ data = null }: BookListProps) {
  const [likes, setLikes] = useState<Response.BookDocument[]>([]);

  const handleLikeClick = (targetBook: Response.BookDocument) => {
    const isLiked = likes.some((item) => item.isbn === targetBook.isbn);
    let updatedLikes;
    if (isLiked) {
      updatedLikes = likes.filter((item) => item.isbn !== targetBook.isbn);
    } else {
      updatedLikes = [...likes, { ...targetBook }];
    }
    setLocalStorage(LOCAL_STORAGE_KEYS.LIKE, updatedLikes);
    setLikes(updatedLikes);
  };

  useEffect(() => {
    const targetLikes = getLocalStorage(LOCAL_STORAGE_KEYS.LIKE);
    if (targetLikes) {
      setLikes(JSON.parse(targetLikes));
    } else {
      setLikes([...likes]);
    }
  }, []);

  return (
    <ul className="flex flex-col">
      {data !== null &&
        data.map((book) => {
          return (
            <BookItem
              key={book.isbn}
              likes={likes}
              onClickLike={() => handleLikeClick(book)}
              {...book}
            />
          );
        })}
    </ul>
  );
}
