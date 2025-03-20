interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <h2 className="text-[22px] font-bold">{text}</h2>;
}
