// QuantitySelector.tsx
import { useState } from 'react';
import styles from './QuantitySelector.module.scss';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({ 
  quantity,
  onQuantityChange,
  min = 1, 
  max = 10,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className={styles.quantitySelector}>
      <button
        className={`${styles.button} ${styles.buttonLeft}`}
        onClick={handleDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        type="button"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 8H13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </button>
      
      <span className={styles.value}>{quantity}</span>
      
      <button
        className={`${styles.button} ${styles.buttonRight}`}
        onClick={handleIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        type="button"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M8 3V13M3 8H13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}