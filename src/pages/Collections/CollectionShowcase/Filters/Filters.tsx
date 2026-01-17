// Filters.tsx
import { useState } from 'react';
import { FilterCategory } from './FilterCategory/FilterCategory';
import styles from './Filters.module.scss';

// Экспортируем типы
export interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
  color?: string;
  icon?: React.ReactNode;
}

export interface FilterCategoryData {
  id: string;
  title: string;
  type: 'radio' | 'checkbox' | 'color' | 'sort';
  options: FilterOption[];
  isCollapsible?: boolean;
  defaultCollapsed?: boolean;
}

interface FiltersProps {
  categories: FilterCategoryData[];
  selectedFilters: Record<string, string | string[]>;
  onFilterChange: (categoryId: string, value: string | string[]) => void;
  onClearAll?: () => void;
}

// Именованный экспорт компонента
export function Filters({
  categories,
  selectedFilters,
  onFilterChange,
  onClearAll,
}: FiltersProps) {
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>(
    categories.reduce((acc, category) => ({
      ...acc,
      [category.id]: category.defaultCollapsed || false
    }), {})
  );

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.header}>
        <h3 className={styles.title}>Filters</h3>
        {onClearAll && (
          <button className={styles.clearButton} onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>

      <div className={styles.categories}>
        {categories.map((category) => (
          <FilterCategory
            key={category.id}
            category={category}
            isCollapsed={collapsedCategories[category.id]}
            onToggle={() => toggleCategory(category.id)}
            selectedValue={selectedFilters[category.id]}
            onChange={(value) => onFilterChange(category.id, value)}
          />
        ))}
      </div>
    </aside>
  );
}