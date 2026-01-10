import styles from './HeroSlider.module.scss';
import { useHeroSlider } from './useHeroSlider';
import { HeroSliderDesktop } from './HeroSliderDesktop';
import { HeroSliderMobile } from './HeroSliderMobile';
import { useMediaQuery } from '../../shared/hooks/useMediaQuery';
import type { HeroSlideData } from './types';

interface HeroSliderProps {
  slides: HeroSlideData[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { activeIndex, goToSlide } = useHeroSlider({
    slidesCount: slides.length,
  });

  return (
    <section className={styles.hero}>
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
