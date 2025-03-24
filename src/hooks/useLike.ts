import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.utils.ts';
import { LOCAL_STORAGE_KEYS } from '../constants/localStorage.constants.ts';

export const useLike = () => {
  const [likes, setLikes] = useState<Response.BookDocument[]>([]);

  const handleLikeClick = (targetBook: Response.BookDocument) => {
    const isLiked = likes.some((item) => item.isbn === targetBook.isbn);
    let updatedLikes;
    if (isLiked) {
      updatedLikes = likes.filter((item) => item.isbn !== targetBook.isbn);
    } else {
      updatedLikes = [...likes, { ...targetBook }];
    }
    const result = setLocalStorage(LOCAL_STORAGE_KEYS.LIKE, updatedLikes);
    if (result) setLikes(updatedLikes);
  };

  useEffect(() => {
    const targetLikes = getLocalStorage(LOCAL_STORAGE_KEYS.LIKE);
    if (targetLikes) setLikes(JSON.parse(targetLikes));
  }, []);

  return {
    likes,
    handleLikeClick,
  };
};
