interface InputProps {
  placeholder?: string;
  renderIcon?: () => React.ReactNode;
  size?: 'sm' | 'md';
  variant?: 'primary' | 'rounded';
}

export default function Input({
  placeholder = '',
  renderIcon,
  size = 'md',
  variant = 'primary',
}: InputProps) {
  const baseStyle = 'w-full text-text-subtitle focus:outline-none';
  const baseStylesWithIcon = 'pl-[50px]';

  const variantStyles = {
    primary: 'border-b-1 border-primary',
    rounded: 'rounded-full bg-light-gray',
  };

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
    <div className="relative w-full">
      {renderIcon !== undefined ? (
        <>
          <div className={`${iconBoxBaseStyles} ${sizeStylesWithIcon[size]}`}>{renderIcon()}</div>
          <input
            type="text"
            placeholder={placeholder}
            className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${baseStylesWithIcon}`}
          />
        </>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]}`}
        />
      )}
    </div>
  );
}
