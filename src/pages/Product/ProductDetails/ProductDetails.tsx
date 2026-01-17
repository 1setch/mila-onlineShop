// ProductDetails.tsx
import { useState } from 'react';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  description: string;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
}

export function ProductDetails({ description, reviews }: ProductDetailsProps) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className={styles.details}>
      {/* Блок описания */}
      <div className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          aria-expanded={isDescriptionOpen}
        >
          <h3 className={styles.sectionTitle}>Description</h3>
          <span className={styles.toggleIcon}>
            {isDescriptionOpen ? '−' : '+'}
          </span>
        </button>
        
        {isDescriptionOpen && (
          <div className={styles.sectionContent}>
            <p className={styles.description}>{description}</p>
          </div>
        )}
      </div>
      
      {/* Блок отзывов */}
      <div className={styles.section}>
        <button
          className={styles.sectionHeader}
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          aria-expanded={isReviewsOpen}
        >
          <h3 className={styles.sectionTitle}>
            Reviews {reviews.length > 0 && `(${reviews.length})`}
          </h3>
          <span className={styles.toggleIcon}>
            {isReviewsOpen ? '−' : '+'}
          </span>
        </button>
        
        {isReviewsOpen && (
          <div className={styles.sectionContent}>
            {reviews.length > 0 ? (
              <div className={styles.reviewsList}>
                {reviews.map((review) => (
                  <div key={review.id} className={styles.review}>
                    <div className={styles.reviewHeader}>
                      <span className={styles.reviewAuthor}>{review.author}</span>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                    <div className={styles.reviewRating}>
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.noReviews}>No reviews yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}