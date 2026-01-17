import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CollectionHero } from "../../components/CollectionHero/ColletionHero";
import imageDesktop from "../../assets/images/hero/hero-2-desktop.png";
import imageMobile from "../../assets/images/hero/hero-2-mobile.png";

const CollectionPage = () => {
  return (
    <>
      <Header />
      
        <CollectionHero
          title="Best Sellers"
          description="We are committed to creating collections in the most mindful and sustainable ways."
          imageDesktop={imageDesktop}
          imageMobile={imageMobile}
        />
      
      <Footer />
    </>
  );
};

export default CollectionPage;
