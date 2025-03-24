import { useEffect, useState } from 'react';
import BookResultBox from '../../components/bookResultBox/BookResultBox.tsx';
import BookResultTitle from '../../components/bookResultBox/bookResultTitle/BookResultTitle.tsx';
import NoBooks from '../../components/bookResultBox/noBooks/NoBooks.tsx';
import Typography from '../../components/typography/Typography.tsx';
import { useLike } from '../../hooks/useLike.ts';

const SIZE = 10;

export default function WishList() {
  const { likes, handleLikeClick } = useLike();
  const [visibleData, setVisibleData] = useState<Response.BookDocument[]>([]);

  const handleFetchNext = () => {
    const start = visibleData.length;
    const end = visibleData.length + SIZE;

    const nextSlice = likes.slice(start, end);
    console.log(nextSlice);
    setVisibleData((prev) => [...prev, ...nextSlice]);
  };

  useEffect(() => {
    if (likes.length > 0) {
      if (visibleData.length === 0) {
        setVisibleData(likes.slice(0, SIZE));
      } else {
        const updatedVisible = visibleData.filter((book) =>
          likes.some((like) => like.isbn === book.isbn),
        );
        setVisibleData(updatedVisible);
      }
    }
  }, [likes]);

  const total = likes.length;
  const isEnd = visibleData.length >= likes.length;

  return (
    <section className="w-full max-w-[960px] m-auto pt-[108px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">
        내가 찜한 책
      </Typography>
      <BookResultBox
        data={visibleData}
        isEnd={isEnd}
        total={total}
        likes={likes}
        onClickLike={handleLikeClick}
        onFetchNext={handleFetchNext}
        renderTitle={() => <BookResultTitle text="찜한 책" total={total} />}
        renderEmpty={() => <NoBooks text="찜한 책이 없습니다." />}
      />
    </section>
  );
}
