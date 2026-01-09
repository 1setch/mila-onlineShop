import styles from "./MegaMenu.module.scss";
import MegaMenuLinksList from "./MegaMenuLinksList";
import MegaMenuCard from "./MegaMenuCard";

type Props = {
  isOpen: boolean;
};

const MegaMenu = ({ isOpen }: Props) => {
  const shopLinks = [
    "Shop all",
    "One Pieces",
    "Tops",
    "Bottoms",
    "Tankinis",
    "Surf Suits & Rash Vests",
    "Sustainable Swim",
  ];
  const collectionsLinks = [
    "Elite",
    "Tango",
    "Wildside",
    "Chamarel",
    "Messina",
    "One Eco Essentials",
  ];

  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.menuActive : ""}`}
      //className={`${styles.menu}  ${styles.menuActive} `}
    >
      <div className="container">
        <div className={styles.inner}>
          <MegaMenuLinksList title="Shop" links={shopLinks} />
          <MegaMenuLinksList title="Collections" links={collectionsLinks} />

          <MegaMenuCard
            img="/src/assets/bg/menubanner.png"
            subTitle="Classics"
            title="Best Sellers"
            // href="/collections/best-sellers"
          />
          <MegaMenuCard
            img="/src/assets/bg/menubanner2.png"
            subTitle="Holiday shop"
            title="New Arrivals"
            // href="/collections/new"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
