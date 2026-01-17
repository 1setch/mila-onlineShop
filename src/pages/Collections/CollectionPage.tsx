// CollectionPage.tsx
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CollectionHero } from "../../components/CollectionHero/ColletionHero";
import { CollectionSelection } from "./CollectionSelections/ColletionSelection";
import { CollectionShowcase } from "./CollectionShowcase/CollectionShowcase";

import imageDesktop from "../../assets/images/hero/hero-2-desktop.png";
import imageMobile from "../../assets/images/hero/hero-2-mobile.png";
import imageCollectionCard1 from "../../assets/images/collections/collection-card-1.png";
import imageCollectionCard2 from "../../assets/images/collections/collection-card-2.png";
import imageCollectionCard3 from "../../assets/images/collections/collection-card-3.png";
import imageCollectionCard4 from "../../assets/images/collections/collection-card-4.png";

const mockCollections = [
  {
    id: "summer",
    title: "Summer Collection",
    image: imageCollectionCard1,
    productCount: 24
  },
  {
    id: "spring",
    title: "Spring Collection",
    image: imageCollectionCard2,
    productCount: 18
  },
  {
    id: "autumn",
    title: "Autumn Collection",
    image: imageCollectionCard3,
    productCount: 32
  },
  {
    id: "winter",
    title: "Winter Collection",
    image: imageCollectionCard4,
    productCount: 16
  },
  {
    id: "evening",
    title: "Evening Wear",
    image: imageCollectionCard2,
    productCount: 12
  },
  {
    id: "casual",
    title: "Casual Style",
    image: imageCollectionCard2,
    productCount: 28
  },
  {
    id: "spring2",
    title: "Spring Collection",
    image: imageCollectionCard2,
    productCount: 18
  },
  {
    id: "autumn2",
    title: "Autumn Collection",
    image: imageCollectionCard3,
    productCount: 32
  },
  {
    id: "winter2",
    title: "Winter Collection",
    image: imageCollectionCard4,
    productCount: 16
  },
  {
    id: "evening2",
    title: "Evening Wear",
    image: imageCollectionCard2,
    productCount: 12
  },
];

const CollectionPage = () => {
  const [activeCollection, setActiveCollection] = useState("summer");

  return (
    <>
      <Header />
      
      <main>
        <CollectionHero
          title="Best Sellers"
          description="We are committed to creating collections in the most mindful and sustainable ways."
          imageDesktop={imageDesktop}
          imageMobile={imageMobile}
        />
        
        <CollectionSelection 
          collections={mockCollections}
          activeCollection={activeCollection}
          onCollectionSelect={setActiveCollection}
        />
        
        <CollectionShowcase />
      </main>
      
      <Footer />
    </>
  );
};

export default CollectionPage;