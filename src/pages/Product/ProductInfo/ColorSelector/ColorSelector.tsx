// ColorSelector.tsx
import { useState } from 'react';
import styles from './ColorSelector.module.scss';

interface ColorOption {
  id: string;
  name: string;
  image: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (colorId: string) => void;
}

export function ColorSelector({ colors }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]?.id || '');

  return (
    <div className={styles.colorSelector}>
      {colors.map((color) => (
        <button
          key={color.id}
          className={`${styles.colorOption} ${
            selectedColor === color.id ? styles.selected : ''
          }`}
          onClick={() => setSelectedColor(color.id)}
          aria-label={`Select color: ${color.name}`}
          title={color.name}
        >
          <img
            src={color.image}
            alt={color.name}
            className={styles.colorImage}
          />
        </button>
      ))}
    </div>
  );
}