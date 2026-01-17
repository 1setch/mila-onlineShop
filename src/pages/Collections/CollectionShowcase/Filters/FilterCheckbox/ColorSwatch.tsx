// ColorSwatch.tsx
import styles from './ColorSwatch.module.scss';

interface ColorSwatchProps {
  color: string;
  label: string;
  icon?: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export function ColorSwatch({
  color,
  label,
  icon,
  isSelected,
  onClick,
}: ColorSwatchProps) {
  return (
    <button
      className={`${styles.swatch} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      aria-label={`Select color: ${label}`}
      title={label}
    >
      <div className={styles.colorCircle} style={{ backgroundColor: color }}>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      
      {isSelected && (
        <div className={styles.checkmark}>
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path
              d="M1 4L4.5 7.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </button>
  );
}