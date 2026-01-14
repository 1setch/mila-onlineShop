import styles from './HeroSlider.module.scss';
import { useHeroSlider } from './useHeroSlider';
import { HeroSliderDesktop } from './HeroSliderDesktop';
import { HeroSliderMobile } from './HeroSliderMobile';
import type { HeroSlideData } from './types';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

interface HeroSliderProps {
  slides: HeroSlideData[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { activeIndex, goToSlide } = useHeroSlider({
    slidesCount: slides.length,
  });

  return (
    <section className={styles.heroSlider}>
      {isMobile ? (
        <HeroSliderMobile
          slides={slides}
          activeIndex={activeIndex}
          onSelectSlide={goToSlide}
        />
      ) : (
        <HeroSliderDesktop
          slides={slides}
          activeIndex={activeIndex}
          onSelectSlide={goToSlide}
        />
      )}
    </section>
  );
}
