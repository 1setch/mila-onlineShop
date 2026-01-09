import styles from './HeroSlider.module.scss';
import type { HeroSlideData } from './types';

interface HeroSliderMobileProps {
  slides: HeroSlideData[];
  activeIndex: number;
  onSelectSlide: (index: number) => void;
}

export function HeroSliderMobile({
  slides,
  activeIndex,
  onSelectSlide,
}: HeroSliderMobileProps) {
  const slide = slides[activeIndex];

  return (
    <div className={styles.mobile}>
      <img
        src={slide.imageMobile}
        alt={slide.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h1>{slide.title}</h1>
        <a href={slide.ctaLink}>{slide.ctaText}</a>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={
              index === activeIndex ? styles.dotActive : styles.dot
            }
            onClick={() => onSelectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
