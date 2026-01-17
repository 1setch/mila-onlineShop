// SizeSelector.tsx
import { useState } from 'react';
import styles from './SizeSelector.module.scss';

interface SizeOption {
  value: string;
  available: boolean;
}

interface SizeSelectorProps {
  sizes: SizeOption[];
  selectedSize: string;
  onSizeSelect: (sizeValue: string) => void;
}

export function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <div className={styles.sizeSelector}>
      {sizes.map((size) => (
        <button
          key={size.value}
          className={`${styles.sizeOption} ${
            selectedSize === size.value ? styles.selected : ''
          } ${!size.available ? styles.unavailable : ''}`}
          onClick={() => size.available && setSelectedSize(size.value)}
          disabled={!size.available}
          aria-label={`Select size: ${size.value}`}
        >
          {size.value}
        </button>
      ))}
    </div>
  );
}