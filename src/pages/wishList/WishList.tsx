import BookResultBox from '../../components/bookResultBox/BookResultBox.tsx';
import BookResultTitle from '../../components/bookResultBox/bookResultTitle/BookResultTitle.tsx';
import NoBooks from '../../components/bookResultBox/noBooks/NoBooks.tsx';
import Typography from '../../components/typography/Typography.tsx';

export default function WishList() {
  return (
    <section className="w-full max-w-[960px] m-auto pt-[108px]">
      <Typography as="h2" className="font-bold text-text-primary text-[22px]">
        내가 찜한 책
      </Typography>
      <BookResultBox
        onFetchNext={() => null}
        renderTitle={() => <BookResultTitle text="찜한 책" />}
        renderEmpty={() => <NoBooks text="찜한 책이 없습니다." />}
      />
    </section>
  );
}
