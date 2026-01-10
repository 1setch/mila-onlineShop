import { useEffect, useState } from 'react';

interface UseHeroSliderParams {
  slidesCount: number;
  delay?: number;
}

export function useHeroSlider({
  slidesCount,
  delay = 5000,
}: UseHeroSliderParams) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slidesCount <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slidesCount);
    }, delay);

    return () => clearInterval(interval);
  }, [slidesCount, delay]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    goToSlide,
  };
}
