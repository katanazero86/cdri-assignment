interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  label: string;
  onClick: VoidFunction;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outlined';
  isFull?: boolean;
  iconRender?: () => React.ReactNode;
}

export default function Button({
  type = 'button',
  label,
  onClick,
  size = 'md',
  variant = 'primary',
  isFull = false,
  iconRender,
}: ButtonProps) {
  const baseStyles = 'rounded-lg cursor-pointer flex items-center';
  const variantStyles = {
    primary: 'text-white bg-primary',
    secondary: 'bg-light-gray text-text-secondary',
    outlined: 'bg-white border border-text-subtitle text-text-subtitle',
  };
  const sizeStyles = {
    sm: 'p-[10px] text-[10px] h-[36px]',
    md: 'px-[28px] py-[16px] text-[16px] h-[48px]',
    lg: 'px-[32px] py-[20px] text-[24px] h-[60px]',
  };
  const isFullStyle = isFull ? 'w-full' : '';

  if (size)
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${isFullStyle}`}
      >
        {label} {iconRender !== undefined && iconRender()}
      </button>
    );
}
