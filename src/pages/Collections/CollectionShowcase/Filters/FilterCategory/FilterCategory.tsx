// FilterCategory.tsx

import { ColorSwatch } from '../FilterCheckbox/ColorSwatch';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { FilterRadio } from '../FilterCheckbox/FilterRadio';
import styles from './FilterCategory.module.scss';

interface FilterCategoryProps {
  category: {
    id: string;
    title: string;
    type: 'radio' | 'checkbox' | 'color' | 'sort';
    options: Array<{
      id: string;
      label: string;
      value: string;
      count?: number;
      color?: string;
      icon?: React.ReactNode;
    }>;
    isCollapsible?: boolean;
  };
  isCollapsed: boolean;
  onToggle: () => void;
  selectedValue: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
}

export function FilterCategory({
  category,
  isCollapsed,
  onToggle,
  selectedValue,
  onChange,
}: FilterCategoryProps) {
  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
    
    if (isChecked) {
      onChange([...currentValues, value]);
    } else {
      onChange(currentValues.filter(v => v !== value));
    }
  };

  const handleColorChange = (value: string) => {
    onChange(value);
  };

  const renderOptions = () => {
    if (isCollapsed) return null;

    switch (category.type) {
      case 'checkbox':
        return (
          <div className={styles.options}>
            {category.options.map((option) => (
              <FilterCheckbox
                key={option.id}
                label={option.label}
                value={option.value}
                count={option.count}
                isChecked={Array.isArray(selectedValue) && selectedValue.includes(option.value)}
                onChange={(checked) => handleCheckboxChange(option.value, checked)}
              />
            ))}
          </div>
        );

      case 'radio':
      case 'sort':
        return (
          <div className={styles.options}>
            {category.options.map((option) => (
              <FilterRadio
                key={option.id}
                label={option.label}
                value={option.value}
                isSelected={selectedValue === option.value}
                onChange={() => handleRadioChange(option.value)}
              />
            ))}
          </div>
        );

      case 'color':
        return (
          <div className={styles.colorOptions}>
            {category.options.map((option) => (
              <ColorSwatch
                key={option.id}
                color={option.color || '#000'}
                label={option.label}
                icon={option.icon}
                isSelected={selectedValue === option.value}
                onClick={() => handleColorChange(option.value)}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.category}>
      <div className={styles.header}>
        <h4 className={styles.title}>{category.title}</h4>
        
        {category.isCollapsible && (
          <button
            className={styles.toggleButton}
            onClick={onToggle}
            aria-label={isCollapsed ? 'Expand category' : 'Collapse category'}
          >
            {isCollapsed ? '+' : '−'}
          </button>
        )}
      </div>
      
      {renderOptions()}
    </div>
  );
}