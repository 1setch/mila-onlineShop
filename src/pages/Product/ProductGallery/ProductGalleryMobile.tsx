// ProductGalleryMobile.tsx
import { useState, useRef, useEffect } from 'react';
import styles from './ProductGallery.module.scss';

interface ProductGalleryMobileProps {
  images: string[];
}

export function ProductGalleryMobile({ images }: ProductGalleryMobileProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < images.length) {
      setActiveIndex(index);
    }
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Обработчики для свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Минимальное расстояние для свайпа

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Свайп влево - следующий слайд
        goToNext();
      } else {
        // Свайп вправо - предыдущий слайд
        goToPrev();
      }
    }
  };

  // Автопереключение (опционально)
  // useEffect(() => {
  //   if (images.length <= 1) return;
    
  //   const interval = setInterval(() => {
  //     goToNext();
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, [activeIndex, images.length]);

  return (
    <div className={styles.mobileGallery}>
      <div 
        className={styles.slidesContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ''
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className={styles.slideImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Точки для навигации */}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}