// useHorizontalScroll.ts
import { useRef, useState, useEffect } from 'react';

interface UseHorizontalScrollProps {
  itemWidth: number;
  itemWidthMobile?: number; // Добавляем опциональную ширину для мобильных
  gap: number;
}

export function useHorizontalScroll({ 
  itemWidth, 
  itemWidthMobile,
  gap 
}: UseHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Определяем текущую ширину в зависимости от экрана
  const getCurrentItemWidth = () => {
    if (itemWidthMobile && window.innerWidth <= 768) {
      return itemWidthMobile;
    }
    return itemWidth;
  };

  useEffect(() => {
    const updateScrollConstraints = () => {
      if (!containerRef.current) return;

      const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
      const max = scrollWidth - clientWidth;
      
      setMaxScroll(max);
      setScrollPosition(scrollLeft);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < max - 1);
    };

    updateScrollConstraints();
    window.addEventListener('resize', updateScrollConstraints);
    
    const resizeObserver = new ResizeObserver(updateScrollConstraints);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScrollConstraints);
      resizeObserver.disconnect();
    };
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const { scrollLeft } = containerRef.current;
    setScrollPosition(scrollLeft);
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll - 1);
  };

  const scrollTo = (direction: 'left' | 'right' | 'start' | 'end', customAmount?: number) => {
    if (!containerRef.current) return;

    const currentItemWidth = getCurrentItemWidth();
    const scrollAmount = customAmount || currentItemWidth + gap;
    const currentScroll = containerRef.current.scrollLeft;
    let targetScroll: number;

    switch (direction) {
      case 'left':
        targetScroll = Math.max(0, currentScroll - scrollAmount);
        break;
      case 'right':
        targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
        break;
      case 'start':
        targetScroll = 0;
        break;
      case 'end':
        targetScroll = maxScroll;
        break;
      default:
        targetScroll = currentScroll;
    }

    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const scrollToItem = (index: number) => {
    if (!containerRef.current) return;

    const currentItemWidth = getCurrentItemWidth();
    const targetScroll = index * (currentItemWidth + gap);
    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const scrollBarWidth = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return {
    containerRef,
    scrollPosition,
    maxScroll,
    canScrollLeft,
    canScrollRight,
    scrollBarWidth,
    handleScroll,
    scrollTo,
    scrollToItem
  };
}