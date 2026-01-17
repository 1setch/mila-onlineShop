// CollectionSelection.tsx
import { useRef, useState } from 'react';
import { CollectionCard } from './CollectionCard/CollectionCard';
import styles from './ColletionSelection.module.scss';
import { useHorizontalScroll } from '../../../shared/hooks/useHorizontalScroll';

interface Collection {
  id: string;
  title: string;
  image: string;
  productCount: number;
}

interface CollectionSelectionProps {
  collections: Collection[];
  activeCollection: string;
  onCollectionSelect: (id: string) => void;
}


export function CollectionSelection({
  collections,
  activeCollection,
  onCollectionSelect,
}: CollectionSelectionProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Используем хук для горизонтального скролла
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollBarWidth,
    handleScroll,
    scrollTo,
  } = useHorizontalScroll({
    itemWidth: 308, // Ширина карточки
    itemWidthMobile: 261, // Мобильная ширина
    gap: 20, // Отступ между карточками
  });

  // Обработчик начала перетаскивания (для десктопа)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    // Меняем курсор
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = '';
      containerRef.current.style.userSelect = '';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = '';
      containerRef.current.style.userSelect = '';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Умножаем для более быстрого скролла
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Featured Collection</h2>
        
        <div className={styles.scrollContainer}>
          {/* Контейнер для карточек с обработчиками перетаскивания */}
          <div
            ref={containerRef}
            className={styles.collectionsWrapper}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                isActive={activeCollection === collection.id}
                onClick={() => onCollectionSelect(collection.id)}
              />
            ))}
          </div>
          
          {/* Кастомный скроллбар для десктопа */}
          <div className={styles.desktopScrollBar}>
            <div 
              className={styles.scrollBarFill}
              style={{ width: `${scrollBarWidth}%` }}
            />
          </div>
          
          
        </div>
      </div>
    </section>
  );
}