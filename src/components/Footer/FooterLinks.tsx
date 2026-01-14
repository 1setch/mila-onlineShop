import Button from "../Button/Button";
import styles from "./FooterLinks.module.scss";

interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className={styles.list}>
      <span>{title}</span>
      <ul className={styles.link}>
        {links.map((link) => (
          <li key={link} className={styles.link}>
            <Button variant="ghost">{link}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
