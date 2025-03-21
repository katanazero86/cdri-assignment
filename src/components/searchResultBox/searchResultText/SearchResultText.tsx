import Typography from '../../typography/Typography.tsx';

interface SearchResultTextProps {
  total?: number;
}

export default function SearchResultText({ total = 0 }: SearchResultTextProps) {
  return (
    <Typography as="p" className="text-text-primary">
      도서 검색 결과{' '}
      <span className="pl-[16px]">
        총 <span className="text-primary">{total?.toLocaleString()}</span>건
      </span>
    </Typography>
  );
}
