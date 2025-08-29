import React from 'react';
import './Button.css';

// The component accepts 'props' (properties) that configure it
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <button
      onClick={onClick}
      // Combine classes: static 'btn', dynamic 'btn-variant', and optional 'className'
      className={`btn btn-${variant} ${className}`}
    >
      {children} {/* 'children' is the text or icon inside the button */}
    </button>
  );
};

export default Button;
