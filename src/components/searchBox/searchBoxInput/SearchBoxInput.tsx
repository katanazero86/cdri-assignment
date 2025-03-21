import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage.utils.ts';
import {LOCAL_STORAGE_KEYS} from "../../../constants/localStorage.constants.ts";

interface SearchBoxInputProps {
  placeholder?: string;
  size?: 'sm' | 'md';
  onSearch: (value: string) => void;
}

export default function SearchBoxInput({
  placeholder = '',
  size = 'md',
  onSearch,
}: SearchBoxInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const [history, setHistory] = useState<string[]>([]);
  const handleHistoryClick = (item: string) => {
    setQuery(item);
    onSearch(item);
    inputRef.current?.blur();
    setIsFocused(false);
  };
  const removeHistoryItem = (item: string) => {
    const filteredHistory = history.filter((historyItem) => historyItem !== item);
    setHistory(filteredHistory);
    setLocalStorage(LOCAL_STORAGE_KEYS.SEARCH, filteredHistory);
    inputRef.current?.focus();
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (query !== '') {
        onSearch(query);
        setHistory((prev) => {
          if (!prev.includes(query)) {
            if (prev.length === 8) {
              const newArr = [...prev].slice(1);
              setLocalStorage(LOCAL_STORAGE_KEYS.SEARCH, [...newArr!, query]);
              return [...newArr!, query];
            } else {
              setLocalStorage(LOCAL_STORAGE_KEYS.SEARCH, [...prev, query]);
              return [...prev, query];
            }
          } else {
            return [...prev];
          }
        });
        inputRef.current?.blur();
        setIsFocused(false);
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const targetHistory = getLocalStorage(LOCAL_STORAGE_KEYS.SEARCH);
    if (targetHistory) setHistory(JSON.parse(targetHistory));
  }, []);

  const baseStyle = `w-full text-text-subtitle focus:outline-none ${isFocused ? 'rounded-t-3xl' : 'rounded-full'} bg-light-gray pl-[50px]`;

  const sizeStyles = {
    sm: 'px-[10px] py-[5px] text-[14px] h-36[px]',
    md: 'p-[16px] text-[16px] h-[50px]',
  };

  const iconBoxBaseStyles = 'flex items-center absolute mr-[10px]';
  const sizeStylesWithIcon = {
    sm: 'left-[10px] top-[5px] w-[20px] h-[20px]',
    md: 'left-[10px] top-[10px] w-[30px] h-[30px]',
  };

  return (
    <div className="relative w-full" ref={boxRef}>
      <div className={`${iconBoxBaseStyles} ${sizeStylesWithIcon[size]}`}>
        <Search />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        ref={inputRef}
        className={`${baseStyle} ${sizeStyles[size]}`}
      />
      {isFocused && history.length > 0 && (
        <div className="absolute left-0 right-0 p-[8px] rounded-b-3xl bg-light-gray text-text-subtitle flex flex-col gap-4 pl-[50px] pr-[25px] pb-[28px]">
          {history.map((item) => (
            <p key={item} className="flex items-center justify-between">
              <span className="cursor-pointer" onClick={() => handleHistoryClick(item)}>
                {item}
              </span>
              <X className="cursor-pointer" onClick={() => removeHistoryItem(item)} />
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
