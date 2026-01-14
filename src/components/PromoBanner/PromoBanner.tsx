import styles from './PromoBanner.module.scss'

const PromoBanner = () => {
    return (
        <div className={styles.promo}>
            <span className={styles.supertitle}>our vision</span>
            <h1>To empower women globally <br />to celebrate summer with<br /> confidence.</h1>
            <span className={styles.subtitle}>Luxurious high quality pieces that are designed to last.</span>
        </div>
    );
};

export default PromoBanner;