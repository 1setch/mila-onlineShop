import Button from "../../../Button/Button";
import styles from "./MegaMenuCard.module.scss";

interface MegaMenuCardProps {
  img: string;
  title: string;
  subTitle: string;
  href?: string;
}
const MegaMenuCard = ({ img, title, subTitle, href }: MegaMenuCardProps) => {
  return (
    <a
      href={href}
      className={styles.card}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styles.content}>
        <div className={styles.description}>
          <span className={styles.subTitle}>{subTitle}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <Button variant="light">Shop now</Button>
      </div>
    </a>
  );
};

export default MegaMenuCard;
