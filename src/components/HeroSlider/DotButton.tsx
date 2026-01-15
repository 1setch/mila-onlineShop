// DotButton.tsx
import styles from './HeroSlider.module.scss';

interface DotButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export function DotButton({ isActive, onClick }: DotButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={styles.dotButton}
      aria-label={`Go to slide`}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isActive ? styles.dotActive : styles.dotInactive}
      >
        <circle cx="5" cy="5" r="5" />
      </svg>
    </button>
  );
}