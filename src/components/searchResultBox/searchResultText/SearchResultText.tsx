import Typography from '../../typography/Typography.tsx';

export default function SearchResultText() {
  return (
    <Typography as="p" className="text-text-primary">
      도서 검색 결과{' '}
      <span className="pl-[16px]">
        총 <span className="text-primary">0</span>건
      </span>
    </Typography>
  );
}
