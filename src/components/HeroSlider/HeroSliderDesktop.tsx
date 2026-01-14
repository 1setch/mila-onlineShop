import styles from './HeroSlider.module.scss';
import type { HeroSlideData } from './types';

interface HeroSliderDesktopProps {
  slides: HeroSlideData[];
  activeIndex: number;
  onSelectSlide: (index: number) => void;
}

export function HeroSliderDesktop({
  slides,
  activeIndex,
  onSelectSlide,
}: HeroSliderDesktopProps) {
  const slide = slides[activeIndex];

  return (
    <div className={styles.desktop}>
      <img
        src={slide.imageDesktop}
        alt={slide.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
        <a href={slide.ctaLink}>{slide.ctaText}</a>
      </div>

      <div className={styles.controls}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
