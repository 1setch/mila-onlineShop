import styles from "./FooterBottom.module.scss";
import frame1 from '@/assets/images/payment-methods/frame-1.png';

const FooterBottom = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.copyright}>
        <span>United Kingdom (GBP £)</span>
        <span>© 2025 milà. Powered by Shopify</span>
      </div>
      <div className={styles.payment}>
        <img src={frame1} alt="Visa / Mastercard" />
      </div>
    </div>
  );
};

export default FooterBottom;
