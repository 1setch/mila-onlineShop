import styles from "./HeroSlider.module.scss";
import Button from "../Button/Button";
import type { HeroSlideData } from "./types";

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
    <div
      className={styles.desktop}
      style={{ backgroundImage: `url(${slide.imageDesktop})` }}
    >
      <div className="container">
        <div className={styles.content}>
          <h1>{slide.title}</h1>

          {slide.subtitle && <p>{slide.subtitle}</p>}

          <Button variant="light">{slide.ctaText}</Button>
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? styles.dotActive : styles.dot}
            onClick={() => onSelectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
