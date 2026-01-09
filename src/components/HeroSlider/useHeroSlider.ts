import { useEffect, useState } from 'react';

interface UseHeroSliderParams {
  slidesCount: number;
  autoPlayDelay?: number;
}

export function useHeroSlider({
  slidesCount,
  autoPlayDelay = 5000,
}: UseHeroSliderParams) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slidesCount);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [slidesCount, autoPlayDelay]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    goToSlide,
  };
}
