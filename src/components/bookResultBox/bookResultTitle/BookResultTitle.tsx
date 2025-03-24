import Typography from '../../typography/Typography.tsx';

interface BookResultTitleProps {
  text: string;
  total?: number;
}

export default function BookResultTitle({ text, total = 0 }: BookResultTitleProps) {
  return (
    <Typography as="p" className="text-text-primary">
      {text}{' '}
      <span className="pl-[16px]">
        총 <span className="text-primary">{total?.toLocaleString()}</span>건
      </span>
    </Typography>
  );
}
