import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Typography from '../../typography/Typography.tsx';

interface CustomSelectProps {
  options: string[];
}

export default function CustomSelect({ options }: CustomSelectProps) {
  const [selected, setSelected] = useState(options[0]);
  const [isShow, setIsShow] = useState(false);

  const handleSelectClick = () => {
    setIsShow(!isShow);
  };

  const handleOptionClick = (targetOption: string) => {
    setSelected(targetOption);
    setIsShow(false);
  };

  return (
    <div className="w-full relative">
      <div
        className="border-b-1 border-gray-300 h-[50px] p-[8px] flex items-center justify-between cursor-pointer"
        onClick={handleSelectClick}
      >
        <Typography as="p" className="text-[14px] font-bold">
          {selected}
        </Typography>
        <ChevronDown color="#B1B8C0" />
      </div>
      {isShow && (
        <ul className="absolute p-[8px] bg-white w-full rounded-sm shadow-lg flex flex-col gap-1 mt-[6px]">
          {options.map((option) => (
            <li
              key={option}
              className="text-text-secondary cursor-pointer text-[14px]"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
