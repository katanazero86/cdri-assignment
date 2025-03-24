import { useEffect, useState } from 'react';
import BookResultBox from '../../components/bookResultBox/BookResultBox.tsx';
import BookResultTitle from '../../components/bookResultBox/bookResultTitle/BookResultTitle.tsx';
import NoBooks from '../../components/bookResultBox/noBooks/NoBooks.tsx';
import Typography from '../../components/typography/Typography.tsx';
import { getLocalStorage } from '../../utils/localStorage.utils.ts';
import { LOCAL_STORAGE_KEYS } from '../../constants/localStorage.constants.ts';

const SIZE = 10;

export default function WishList() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Response.BookDocument[] | null>(null);
  const [visibleData, setVisibleData] = useState<Response.BookDocument[] | null>(null);

  const handleFetchNext = () => {
    const start = page * SIZE;
    const end = (page + 1) * SIZE;

    const nextSlice = data!.slice(start, end);
    setVisibleData((prev) => [...prev!, ...nextSlice]);
    setPage(page + 1);
  };

  useEffect(() => {
    const wishBooks = getLocalStorage(LOCAL_STORAGE_KEYS.LIKE);
    if (wishBooks) {
      const parsed = JSON.parse(wishBooks);
      setData(JSON.parse(wishBooks));
      setVisibleData(parsed.slice(0, SIZE));
    }
  }, []);

  const total = data?.length ?? 0;
  const isEnd = data !== null && visibleData !== null && visibleData?.length >= data?.length;

  return (
    <section className="w-full max-w-[960px] m-auto pt-[108px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">
        내가 찜한 책
      </Typography>
      <BookResultBox
        data={visibleData}
        total={total}
        isEnd={isEnd}
        onFetchNext={handleFetchNext}
        renderTitle={() => <BookResultTitle text="찜한 책" total={total} />}
        renderEmpty={() => <NoBooks text="찜한 책이 없습니다." />}
      />
    </section>
  );
}
