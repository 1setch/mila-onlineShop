// useHeroSlider.ts
import { useEffect, useRef, useState } from 'react';

interface UseHeroSliderParams {
  slidesCount: number;
  delay?: number;
}

export function useHeroSlider({
  slidesCount,
<<<<<<< HEAD
  delay = 15000,
=======
  delay = 7000,
>>>>>>> feature/hero-slider
}: UseHeroSliderParams) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    if (slidesCount <= 1) return;

    clearTimer();

    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slidesCount);
    }, delay);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [slidesCount, delay]);

  const goToSlide = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      startTimer(); // сброс таймера при клике
    }
  };

  return {
    activeIndex,
    goToSlide,
  };
}