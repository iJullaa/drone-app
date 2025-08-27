import React from 'react';
import './Button.css';

// Komponent przyjmuje 'propsy' (właściwości), które go konfigurują
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <button
      onClick={onClick}
      // Łączymy klasy: stałą 'btn', dynamiczną 'btn-variant' i opcjonalną 'className'
      className={`btn btn-${variant} ${className}`}
    >
      {children} {/* 'children' to tekst lub ikona wewnątrz przycisku */}
    </button>
  );
};

export default Button;
