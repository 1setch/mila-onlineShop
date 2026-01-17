// ProductInfo.tsx - с обработчиками
import { ColorSelector } from './ColorSelector/ColorSelector';
import { SizeSelector } from './SizeSelector/SizeSelector';
import { QuantitySelector } from './QuantitySelector/QuantitySelector';
import { StoreAvailability } from './StoreAvailability/StoreAvailability';
import Button from '../../../components/Button/Button';
import styles from './ProductInfo.module.scss';

interface ProductInfoProps {
  product: {
    collectionName: string;
    name: string;
    price: number;
    currency?: string;
    colors: Array<{ id: string; name: string; image: string }>;
    sizes: Array<{ value: string; available: boolean }>;
    stores: Array<{ name: string; address: string; available: boolean }>;
  };
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  onColorSelect: (colorId: string) => void;
  onSizeSelect: (sizeValue: string) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export function ProductInfo({ 
  product, 
  selectedColor, 
  selectedSize, 
  quantity,
  onColorSelect, 
  onSizeSelect, 
  onQuantityChange,
  onAddToCart,
  onBuyNow 
}: ProductInfoProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency || 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className={styles.info}>
      {/* Название коллекции */}
      <p className={styles.collection}>{product.collectionName}</p>
      
      {/* Название товара */}
      <h1 className={styles.name}>{product.name}</h1>
      
      {/* Цена */}
      <p className={styles.price}>{formattedPrice}</p>
      
      {/* Выбор цвета */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Color</h3>
        <ColorSelector 
          colors={product.colors} 
          selectedColor={selectedColor}
          onColorSelect={onColorSelect}
        />
      </div>
      
      {/* Выбор размера */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Size</h3>
        <SizeSelector 
          sizes={product.sizes} 
          selectedSize={selectedSize}
          onSizeSelect={onSizeSelect}
        />
      </div>
      
      {/* Кнопки: количество + добавить в корзину */}
      <div className={styles.actionsRow}>
        <QuantitySelector 
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
        <Button 
          variant="dark" 
          //className={styles.addToCartButton}
          onClick={onAddToCart}
          disabled={!selectedSize}
        >
          Add to cart
        </Button>
      </div>
      
      {/* Кнопка Buy it now */}
      <Button 
        variant="outline" 
        //className={styles.buyNowButton}
        onClick={onBuyNow}
        disabled={!selectedSize}
      >
        Buy it now
      </Button>
      
      {/* Наличие в магазинах */}
      <div className={styles.section}>
        <StoreAvailability stores={product.stores} />
      </div>
    </div>
  );
}