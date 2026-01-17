// ProductGallery.tsx
import styles from './ProductGallery.module.scss';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  // Если изображений меньше 4, можно заполнить пустыми местами
  const gridImages = images.slice(0, 4);
  
  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {gridImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className={styles.image}
                loading="lazy"
                width="375"
                height="570"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}