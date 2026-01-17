// CollectionCard.tsx
import styles from './CollectionCard.module.scss';

interface CollectionCardProps {
  collection: {
    id: string;
    title: string;
    image: string;
    productCount: number;
  };
  isActive: boolean;
  onClick: () => void;
}

export function CollectionCard({ collection, isActive, onClick }: CollectionCardProps) {
  return (
    <button
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-label={`Select ${collection.title} collection`}
    >
      <div 
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${collection.image})` }}
      >
        <div className={styles.overlay} />
        <h3 className={styles.title}>{collection.title}</h3>
      </div>
    </button>
  );
}