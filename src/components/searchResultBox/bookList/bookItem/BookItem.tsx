import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Typography from '../../../typography/Typography.tsx';
import Button from '../../../button/Button.tsx';

type BookItemProps = Response.BookDocument;

export default function BookItem({
  price,
  title,
  authors,
  thumbnail,
  contents,
  sale_price,
  url,
}: BookItemProps) {
  const [isDetailShow, setIsDetailShow] = useState(false);

  const handleDetailClick = () => {
    setIsDetailShow(!isDetailShow);
  };

  const handlePurchaseClick = (targetUrl: string) => {
    window.open(targetUrl, '_blank');
  };

  const author = `${authors[0]}${authors.length > 1 ? ` 외 ${authors.length}명` : ''}`;

  return (
    <li className="flex flex-col p-[16px] border-b border-gray-300">
      {!isDetailShow && (
        <div className="flex items-center">
          <div>
            <img
              width={48}
              height={68}
              src={thumbnail || undefined}
              alt={title}
              className="object-cover w-[48px] max-h-[68px] mx-[32px]"
            />
          </div>
          <div className="flex items-center justify-between basis-[60%] pr-[56px]">
            <Typography
              as="h3"
              className="flex items-center text-text-primary text-[18px] font-bold"
            >
              <span className="inline-block truncate max-w-[200px] tracking-tighter">{title}</span>
              <span className="inline-block px-[16px] text-text-secondary text-[14px] tracking-tighter break-all">
                {author}
              </span>
            </Typography>
            <Typography
              as="p"
              className="text-text-primary text-[18px] text-right whitespace-normal"
            >
              {price.toLocaleString()}원
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <Button label="구매하기" onClick={() => handlePurchaseClick(url)} />
            <Button
              label="상세보기"
              variant="secondary"
              iconRender={() => <ChevronDown className="h-[16px] w-[16px] pl-2]" />}
              onClick={handleDetailClick}
            />
          </div>
        </div>
      )}
      {isDetailShow && (
        <div className="flex">
          <img
            width={210}
            height={280}
            src={thumbnail || undefined}
            alt={title}
            className="object-cover w-[210px] h-[280px] mx-[32px]"
          />
          <div className="flex flex-col basis-[360px]">
            <div className="flex items-center">
              <Typography
                as="h3"
                className="text-[18px] font-bold text-text-primary tracking-tighter"
              >
                {title}
              </Typography>
              <Typography className="text-text-secondary text-[14px] pl-[16px] tracking-tighter">
                {author}
              </Typography>
            </div>
            <div>
              <Typography as="p" className="font-bold text-[14px] mt-[16px] mb-[12px]">
                책 소개
              </Typography>
              <Typography className="text-[10px] text-text-primary">
                {contents === '' ? '소개가 없습니다.' : contents}{' '}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col flex-auto ml-[48px] justify-between">
            <div className="flex-auto flex justify-end">
              <Button
                label="상세보기"
                variant="secondary"
                iconRender={() => <ChevronUp className="h-[16px] w-[16px] pl-2]" />}
                onClick={handleDetailClick}
              />
            </div>
            <div>
              <div className="flex flex-col gap-2 text-[18px] mb-[28px]">
                <Typography
                  className={`text-text-primary ${sale_price !== 0 && sale_price > 0 ? 'line-through' : ''}`}
                >
                  <span className="inline-block text-[10px] text-text-subtitle mr-[8px]">정가</span>
                  {price.toLocaleString()}원
                </Typography>
                {sale_price !== 0 && sale_price > 0 && (
                  <Typography className="text-text-primary font-bold">
                    <span className="inline-block text-[10px] text-text-subtitle mr-[8px]">
                      할인가
                    </span>
                    {sale_price.toLocaleString()}원
                  </Typography>
                )}
              </div>
              <Button label="구매하기" isFull onClick={() => handlePurchaseClick(url)} />
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
