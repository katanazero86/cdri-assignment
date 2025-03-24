import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Typography from '../../typography/Typography.tsx';

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
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(defaultValue);
  const [isShow, setIsShow] = useState(false);

  const handleSelectClick = () => {
    setIsShow(!isShow);
  };

  const handleOptionClick = (targetOption: Option) => {
    onSelect(targetOption);
    setSelected(targetOption);
    setIsShow(false);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsShow(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative" ref={ref}>
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
        <ul className="absolute p-[8px] bg-white w-full rounded-sm shadow-lg flex flex-col gap-1 mt-[6px]">
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
