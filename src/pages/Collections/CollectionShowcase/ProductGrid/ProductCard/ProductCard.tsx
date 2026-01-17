// ProductCard.tsx
import { useState } from 'react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    currency?: string;
    image: string;
  };
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency || 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
        
        {/* Индикатор кликабельности */}
        <div className={styles.hoverIndicator} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formattedPrice}</p>
        
        {/* Подсказка при наведении */}
        {isHovered && (
          <div className={styles.clickHint}>
            Click to view details
          </div>
        )}
      </div>
    </div>
  );
}