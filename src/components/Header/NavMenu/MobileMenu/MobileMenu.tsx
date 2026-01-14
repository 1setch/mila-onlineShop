// MobileMenu.tsx
import Button from "../../../Button/Button";
import styles from "./MobileMenu.module.scss";

type Props = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: Props) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          <Button variant="ghost">
            <a href="#">New Arrivals</a>
          </Button>
          <Button variant="ghost">
            <a href="#">Collections</a>
          </Button>
          <Button variant="ghost">
            <a href="#">Swimwear</a>
          </Button>
          <Button variant="ghost">
            <a href="#">About Us</a>
          </Button>
          <Button variant="ghost">
            <a href="#">Demos</a>
          </Button>
        </nav>

        <div className={styles.account}>
          <hr />
          <Button variant="ghost">
            <a>Account</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
