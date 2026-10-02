import React from 'react';

const variants = {
  primary: 'btn-primary hover:opacity-90 hover:scale-105 border-transparent shadow-sm hover:shadow-md',
  outline: 'bg-transparent border border-border-subtle text-text-primary hover:border-accent hover:text-accent',
  ghost: 'bg-transparent border-transparent text-text-primary hover:bg-surface hover:text-accent'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base md:text-lg'
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  onClick, 
  icon,
  iconPosition = 'right',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 gap-2';
  
  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && <span className="flex items-center justify-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex items-center justify-center">{icon}</span>}
    </>
  );

  if (href) {
    // If it's an anchor link or external link
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    return (
      <a 
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
