// FilterRadio.tsx
import styles from './FilterRadio.module.scss';

interface FilterRadioProps {
  label: string;
  value: string;
  isSelected: boolean;
  onChange: () => void;
}

export function FilterRadio({
  label,
  value,
  isSelected,
  onChange,
}: FilterRadioProps) {
  return (
    <label className={styles.radio}>
      <input
        type="radio"
        checked={isSelected}
        onChange={onChange}
        value={value}
        className={styles.input}
      />
      
      <span className={styles.customRadio}>
        {isSelected && <span className={styles.radioDot} />}
      </span>
      
      <span className={styles.label}>{label}</span>
    </label>
  );
}