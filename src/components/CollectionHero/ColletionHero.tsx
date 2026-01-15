import styles from './ColletionHero.module.scss';
import { useMediaQuery } from '../../shared/hooks/useMediaQuery';

type CollectionHeroProps = {
  title: string;
  description?: string;
  imageDesktop: string;
  imageMobile: string;
};

export const CollectionHero = ({
  title,
  description,
  imageDesktop,
  imageMobile,
}: CollectionHeroProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const backgroundImage = isMobile ? imageMobile : imageDesktop;

  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};