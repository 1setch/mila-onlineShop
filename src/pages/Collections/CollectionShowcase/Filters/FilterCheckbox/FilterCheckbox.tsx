// FilterCheckbox.tsx
import styles from './FilterCheckbox.module.scss';

interface FilterCheckboxProps {
  label: string;
  value: string;
  count?: number;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

export function FilterCheckbox({
  label,
  value,
  count,
  isChecked,
  onChange,
}: FilterCheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        value={value}
        className={styles.input}
      />
      
      <span className={styles.customCheckbox}>
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          className={styles.checkIcon}
        >
          <path
            d="M1 4L4.5 7.5L11 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      
      <span className={styles.label}>{label}</span>
      
      {count !== undefined && (
        <span className={styles.count}>({count})</span>
      )}
    </label>
  );
}