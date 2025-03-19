import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  className = '',
  ...restProps
}) => {
  const baseClass = 'button';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const widthClass = fullWidth ? `${baseClass}--full-width` : '';
  
  const combinedClassName = `${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${className}`.trim();
  
  return (
    <button className={combinedClassName} {...restProps}>
      {children}
    </button>
  );
};

export default Button; 