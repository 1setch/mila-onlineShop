// NavMenu.tsx

import Button from '../../Button/Button';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Button variant='ghost'>New Arrivals</Button>
      <Button variant='ghost'>Swimwear</Button>
      <Button variant='ghost'>Collections</Button>
      <Button variant='ghost'>About Us</Button>
      <Button variant='ghost'>Demos</Button>
    </nav>
  );
};

export default NavMenu;
