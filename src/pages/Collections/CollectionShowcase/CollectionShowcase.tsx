// CollectionShowcase.tsx - с импортом из mockProducts.ts
import { useState, useMemo } from 'react';
import { Filters } from './Filters/Filters';
import { ProductGrid } from './ProductGrid/ProductGrid';
import type { FilterCategoryData } from './Filters/Filters';
import type { Product } from './ProductGrid/ProductGrid';
import { mockProducts } from './mockProducts';
import styles from './CollectionShowcase.module.scss';

// ВСЕ фильтры как у тебя было:
const filterCategories: FilterCategoryData[] = [
  {
    id: 'availability',
    title: 'Availability',
    type: 'radio',
    options: [
      { id: 'in-stock', label: 'In stock', value: 'in-stock' },
      { id: 'out-of-stock', label: 'Out of stock', value: 'out-of-stock' },
    ],
    isCollapsible: true,
    defaultCollapsed: false,
  },
  {
    id: 'product-type',
    title: 'Product type',
    type: 'checkbox',
    options: [
      { id: 'tops', label: 'Tops', value: 'tops', count: 24 },
      { id: 'tankinis', label: 'Tankinis', value: 'tankinis', count: 12 },
      { id: 'one-piece', label: 'One Piece', value: 'one-piece', count: 18 },
      { id: 'bottoms', label: 'Bottoms', value: 'bottoms', count: 16 },
    ],
    isCollapsible: true,
    defaultCollapsed: false,
  },
  {
    id: 'color',
    title: 'Color',
    type: 'color',
    options: [
      { id: 'black', label: 'Black', value: 'black', color: '#000000' },
      { id: 'white', label: 'White', value: 'white', color: '#FFFFFF' },
      { id: 'beige', label: 'Beige', value: 'beige', color: '#E8E4DF' },
      { id: 'brown', label: 'Brown', value: 'brown', color: '#B79987' },
      { id: 'navy', label: 'Navy', value: 'navy', color: '#0A2342' },
      { id: 'red', label: 'Red', value: 'red', color: '#C44536' },
      { id: 'green', label: 'Green', value: 'green', color: '#406661' },
      { id: 'yellow', label: 'Yellow', value: 'yellow', color: '#F4D35E' },
    ],
    isCollapsible: true,
    defaultCollapsed: true,
  },
  {
    id: 'size',
    title: 'Size',
    type: 'checkbox',
    options: Array.from({ length: 7 }, (_, i) => {
      const size = (i + 1) * 2;
      return {
        id: `size-${size}`,
        label: size.toString(),
        value: size.toString(),
        count: Math.floor(Math.random() * 20) + 5,
      };
    }),
    isCollapsible: true,
    defaultCollapsed: true,
  },
  {
    id: 'sort',
    title: 'Sort by',
    type: 'sort',
    options: [
      { id: 'best-selling', label: 'Best selling', value: 'best-selling' },
      { id: 'a-z', label: 'Alphabetically, A-Z', value: 'a-z' },
      { id: 'z-a', label: 'Alphabetically, Z-A', value: 'z-a' },
      { id: 'price-low-high', label: 'Price, low to high', value: 'price-low-high' },
      { id: 'price-high-low', label: 'Price, high to low', value: 'price-high-low' },
      { id: 'date-new-old', label: 'Date, new to old', value: 'date-new-old' },
    ],
    isCollapsible: false,
    defaultCollapsed: false,
  },
];

export function CollectionShowcase() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string | string[]>>({
    sort: 'best-selling',
  });

  // Фильтрация товаров (базовая)
  const filteredProducts = useMemo(() => {
    let products = [...mockProducts];

    // Сортировка
    if (selectedFilters.sort) {
      switch (selectedFilters.sort) {
        case 'a-z':
          products.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'z-a':
          products.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'price-low-high':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'date-new-old':
          // Пример сортировки по ID (новые первыми)
          products.sort((a, b) => parseInt(b.id) - parseInt(a.id));
          break;
        // 'best-selling' - оставляем как есть
      }
    }

    return products;
  }, [selectedFilters]);

  const handleFilterChange = (categoryId: string, value: string | string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({ sort: 'best-selling' });
  };

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.layout}>
          {/* Фильтры слева - ВСЕ 5 КАТЕГОРИЙ */}
          <Filters
            categories={filterCategories}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearAll}
          />
          
          {/* Витрина товаров справа */}
          <div className={styles.products}>
            <div className={styles.productsHeader}>
              <p className={styles.resultsCount}>
                Showing {filteredProducts.length} products
              </p>
            </div>
            
            {/* Сетка товаров */}
            <ProductGrid
              products={filteredProducts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}