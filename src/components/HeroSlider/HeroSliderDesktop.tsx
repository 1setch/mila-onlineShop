// HeroSliderDesktop.tsx
import styles from "./HeroSlider.module.scss";
import Button from "../Button/Button";
import { DotButton } from "./DotButton";
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
  return (
    <div className={styles.desktop}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === activeIndex ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.imageDesktop})` }}
        >
          <div className="container">
            <div className={styles.content}>
              <h1>{slide.title}</h1>
              {slide.subtitle && <p>{slide.subtitle}</p>}
              <Button variant="light">{slide.ctaText}</Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <DotButton
            key={index}
            isActive={index === activeIndex}
            onClick={() => onSelectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}