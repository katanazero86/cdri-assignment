import { useEffect, useState } from 'react';
import BookResultBox from '../../components/bookResultBox/BookResultBox.tsx';
import BookResultTitle from '../../components/bookResultBox/bookResultTitle/BookResultTitle.tsx';
import NoBooks from '../../components/bookResultBox/noBooks/NoBooks.tsx';
import Typography from '../../components/typography/Typography.tsx';
import { getLocalStorage } from '../../utils/localStorage.utils.ts';
import { LOCAL_STORAGE_KEYS } from '../../constants/localStorage.constants.ts';

export default function WishList() {
  const [targetData, setTargetData] = useState<Response.BookDocument[] | null>(null);

  useEffect(() => {
    const wishBooks = getLocalStorage(LOCAL_STORAGE_KEYS.LIKE);
    console.log(wishBooks);
    if (wishBooks) {
      setTargetData(JSON.parse(wishBooks));
    } else {
      setTargetData(null);
    }
  }, []);

  const total = targetData?.length ?? 0;

  return (
    <section className="w-full max-w-[960px] m-auto pt-[108px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">
        내가 찜한 책
      </Typography>
      <BookResultBox
        data={targetData}
        total={total}
        onFetchNext={() => null}
        renderTitle={() => <BookResultTitle text="찜한 책" />}
        renderEmpty={() => <NoBooks text="찜한 책이 없습니다." />}
      />
    </section>
  );
}
