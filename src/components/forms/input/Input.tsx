interface InputProps {
  type?: 'text' | 'password';
  placeholder?: string;
  renderIcon?: () => React.ReactNode;
  size?: 'sm' | 'md';
  variant?: 'primary';
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: () => void;
  isFocused?: boolean;
  onFocus?: () => void;
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({
  type = 'text',
  placeholder = '',
  size = 'md',
  variant = 'primary',
  value = '',
  onChange,
  onKeyUp,
  ref,
}: InputProps) {
  const baseStyle = 'w-full text-text-subtitle focus:outline-none';

  const variantStyles = {
    primary: 'border-b-1 border-primary',
  };

  const sizeStyles = {
    sm: 'px-[10px] py-[5px] text-[14px] h-36[px]',
    md: 'p-[16px] text-[16px] h-[50px]',
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (onKeyUp) onKeyUp();
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyUp={handleKeyUp}
      ref={ref}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]}`}
    />
  );
}
