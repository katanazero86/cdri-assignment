import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Typography from '../../typography/Typography.tsx';
import { useOutsideClick } from '../../../hooks/useOutsideClick.ts';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultValue: Option;
  onSelect: (targetValue: Option) => void;
}

export default function CustomSelect({ options, defaultValue, onSelect }: CustomSelectProps) {
  const [selected, setSelected] = useState(defaultValue);
  const [isShow, setIsShow] = useState(false);
  const { containerRef } = useOutsideClick(() => setIsShow(false));

  const handleSelectClick = () => {
    setIsShow(!isShow);
  };

  const handleOptionClick = (targetOption: Option) => {
    onSelect(targetOption);
    setSelected(targetOption);
    setIsShow(false);
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      <div
        className="border-b-1 border-gray-300 h-[50px] p-[8px] flex items-center justify-between cursor-pointer"
        onClick={handleSelectClick}
      >
        <Typography as="p" className="text-[14px] font-bold">
          {selected.label}
        </Typography>
        <ChevronDown color="#B1B8C0" />
      </div>
      {isShow && (
        <ul className="absolute p-[8px] bg-white w-full rounded-sm shadow-lg flex flex-col gap-1 mt-[6px] starting:opacity-0 transition-opacity duration-250 ease-out opacity-100">
          {options.map((option) => (
            <li
              key={option.label}
              className="text-text-secondary cursor-pointer text-[14px]"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
