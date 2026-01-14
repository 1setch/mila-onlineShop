// MobileMenu.tsx
import styles from './MobileMenu.module.scss';

type Props = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: Props) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <nav className={styles.nav}>
        <a>New Arrivals</a>
        <a>Collections</a>
        <a>Swimwear</a>
        <a>About Us</a>
        <a>Demos</a>
      </nav>

      <div className={styles.account}>
        <a>Account</a>
      </div>
    </div>
  );
};

export default MobileMenu;
