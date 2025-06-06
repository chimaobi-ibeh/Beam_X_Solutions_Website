import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  children: React.ReactNode;
  icon?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  swapHover?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  variant = 'primary', 
  className = '', 
  children, 
  icon = false,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  swapHover = false
}) => {
  const getBaseClasses = () => {
    let classes = `
      btn
      transition-all
      duration-300
      transform
      hover:scale-105
      ${fullWidth ? 'w-full' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `;

    if (swapHover) {
      if (variant === 'primary') {
        classes += ' hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary';
      } else if (variant === 'outline') {
        classes += ' hover:bg-primary hover:text-white hover:border-primary';
      }
    } else {
      classes += ` ${variant === 'primary' ? 'btn-primary' : ''}
        ${variant === 'secondary' ? 'btn-secondary' : ''}
        ${variant === 'outline' ? 'btn-outline' : ''}
        ${variant === 'white' ? 'bg-white text-primary hover:bg-gray-100' : ''}`;
    }

    return classes;
  };
  
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  );
  
  if (href) {
    if (href.startsWith('http')) {
      return (
        <a 
          href={href} 
          className={getBaseClasses()}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link to={href} className={getBaseClasses()}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={getBaseClasses()} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;