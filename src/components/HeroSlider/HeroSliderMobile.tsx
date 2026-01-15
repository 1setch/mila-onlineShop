// HeroSliderMobile.tsx
import styles from "./HeroSlider.module.scss";
import Button from "../Button/Button";
import { DotButton } from "./DotButton";
import type { HeroSlideData } from "./types";

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
  return (
    <div className={styles.mobile}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.mobileSlide} ${
            index === activeIndex ? styles.active : ""
          }`}
        >
          <img
            src={slide.imageMobile}
            alt={slide.title}
            className={styles.image}
          />

          <div className={styles.mobileContent}>
            <h1>{slide.title}</h1>
            {slide.subtitle && <p>{slide.subtitle}</p>}
            <Button variant="light">{slide.ctaText}</Button>
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