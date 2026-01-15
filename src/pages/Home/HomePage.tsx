import React from "react";
import Button from "../../components/Button/Button";

import styles from "./HomePage.module.scss";
import Header from "../../components/Header/Header";
import NavMenuCard from "../../components/Header/NavMenu/MegaMenu/MegaMenuCard";
<<<<<<< HEAD
import { HeroSlider } from "../../components/HeroSlider/HeroSlider";
import { heroSlidesMock } from "../../components/HeroSlider/mock";
import Footer from "../../components/Footer/Footer";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
=======
import { heroSlidesMock } from '../../components/HeroSlider/mock';
import { HeroSlider } from "../../components/HeroSlider/HeroSlider";
>>>>>>> feature/hero-slider

const HomePage = () => {
  return (
    <>
      <Header />

      <HeroSlider slides={heroSlidesMock} />
      <div className="container">
        <div className={styles.test}>
          <Button variant="outline" onClick={() => console.log("click")}>
            хуй
          </Button>
          <Button variant="dark" onClick={() => console.log("click")}>
            хуй
          </Button>
          <Button variant="light" onClick={() => console.log("click")}>
            хуй
          </Button>
          <Button variant="ghost" onClick={() => console.log("click")}>
            хуй
          </Button>
          {/* <NavMenuCard
            title="privet"
            subTitle="loh"
            img="/src/assets/bg/menubanner.png"
          /> */}
        </div>
      </div>
      <PromoBanner />
      <Footer />
    </>
  );
};

export default HomePage;
