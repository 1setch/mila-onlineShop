// MegaMenuLinksList.tsx
import Button from "../../../Button/Button";
import styles from "./MegaMenuLinksList.module.scss";

interface MegaMenuLinksListProps {
  title: string;
  links: string[];
}

const MegaMenuLinksList = ({ title, links }: MegaMenuLinksListProps) => {
  return (
    <div className={styles.list}>
      <span className={styles.title}>{title}</span>
      {links.map((link) => (
        <Button key={`${title}-${link}`} variant="ghost"> <a href="">{link}</a> </Button>
      ))}
    </div>
  );
};

export default MegaMenuLinksList;
