// ProductPage.tsx
import { useState } from 'react';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ProductGalleryMobile } from './ProductGallery/ProductGalleryMobile';
import { ProductInfo } from './ProductInfo/ProductInfo';
import { ProductDetails } from './ProductDetails/ProductDetails';
import styles from './ProductPage.module.scss';

// Импорт локальных изображений
import prodImg1 from '@/assets/images/product/prod-img-1.png';
import prodImg2 from '@/assets/images/product/prod-img-2.png';
import prodImg3 from '@/assets/images/product/prod-img-3.png';
import prodImg4 from '@/assets/images/product/prod-img-4.png';

import prodVar1 from '@/assets/images/product/prod-var-1.png';
import prodVar2 from '@/assets/images/product/prod-var-2.png';
import prodVar3 from '@/assets/images/product/prod-var-3.png';
import prodVar4 from '@/assets/images/product/prod-var-4.png';

import bannerImage from '../../assets/images/product/Subscription.png';
import { useMediaQuery } from '../../shared/hooks/useMediaQuery';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Моковые данные товара с твоими изображениями
const mockProduct = {
  id: '1',
  collectionName: 'Summer Collection',
  name: 'Essential Swim Top',
  price: 89,
  currency: 'USD',
  images: [
    prodImg1,
    prodImg2,
    prodImg3,
    prodImg4,
  ],
  colors: [
    { id: 'black', name: 'Black', image: prodVar1 },
    { id: 'beige', name: 'Beige', image: prodVar2 },
    { id: 'brown', name: 'Brown', image: prodVar3 },
    { id: 'navy', name: 'Navy', image: prodVar4 },
  ],
  sizes: [
    { value: 'XS', available: true },
    { value: 'S', available: true },
    { value: 'M', available: false },
    { value: 'L', available: true },
    { value: 'XL', available: true },
  ],
  description: 'This essential swim top features a classic design with modern details. Made from sustainable recycled materials, it offers both comfort and style for your beach days. The adjustable straps and soft lining ensure a perfect fit.',
  reviews: [
    {
      id: '1',
      author: 'Sarah M.',
      rating: 5,
      text: 'Perfect fit and very comfortable! The quality is amazing.',
      date: '2024-05-15'
    },
    {
      id: '2',
      author: 'Jessica L.',
      rating: 4,
      text: 'Love the color and material. Runs a bit small, so size up.',
      date: '2024-04-22'
    },
  ],
  stores: [
    { name: 'NYC Store', address: '123 Madison Ave', available: true },
    { name: 'LA Store', address: '456 Sunset Blvd', available: true },
    { name: 'Miami Store', address: '789 Ocean Dr', available: false },
    { name: 'Chicago Store', address: '101 Michigan Ave', available: true },
  ],
};

const ProductPage = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0].id);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
  };

  const handleSizeSelect = (sizeValue: string) => {
    setSelectedSize(sizeValue);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const item = {
      productId: mockProduct.id,
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: mockProduct.price,
      name: mockProduct.name,
      image: mockProduct.images[0]
    };
    console.log('Add to cart:', item);
    // Здесь будет логика добавления в корзину
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
    // Здесь будет логика покупки сразу
  };

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        <div className="container">
          {/* Основной блок товара */}
          <section className={styles.productSection}>
            <div className={styles.productLayout}>
              
              {/* Блок с фотографиями (левая часть) */}
              <div className={styles.gallery}>
                {isMobile ? (
                  <ProductGalleryMobile images={mockProduct.images} />
                ) : (
                  <ProductGallery images={mockProduct.images} />
                )}
              </div>
              
              {/* Информативный блок (правая часть) */}
              <div className={styles.info}>
                <ProductInfo 
                  product={mockProduct}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  quantity={quantity}
                  onColorSelect={handleColorSelect}
                  onSizeSelect={handleSizeSelect}
                  onQuantityChange={handleQuantityChange}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                />
              </div>
              
            </div>
          </section>
          
          {/* Блок описания и отзывов */}
          <section className={styles.detailsSection}>
            <ProductDetails 
              description={mockProduct.description}
              reviews={mockProduct.reviews}
            />
          </section>
          
          {/* Блок со слоганом */}
          <section className={styles.sloganSection}>
            <div className={styles.slogan}>
              <h2 className={styles.sloganText}>Sustainable fashion for conscious living</h2>
            </div>
          </section>
          
          {/* Блок с баннером */}
          <section className={styles.bannerSection}>
            <div className={styles.banner}>
              <img 
                src={bannerImage}
                alt="Discover more" 
                className={styles.bannerImage}
              />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductPage;