import FooterTalkAbout from "./FooterTalkAbout";
import styles from "./Footer.module.scss";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";
// import Button from "../Button/Button";
// import frame1 from '@/assets/images/payment-methods/frame-1.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <FooterTalkAbout />
          <FooterLinks
            title="Shop"
            links={[
              "One Pieces",
              "Swimwear Tops",
              "Swim Bottoms",
              "Tankinis",
              "Surf Suits & Rash vests",
              "Sustainable Swim",
            ]}
          />
          <FooterLinks
            title="Help"
            links={["Search", "About Us", "Contact us", "FAQs"]}
          />
          <FooterNewsletter description="Sign up for our newsletter to only receive good things." />
        </div>
        <FooterBottom/>
      </div>
    </footer>
  );
};

export default Footer;
