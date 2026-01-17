// StoreAvailability.tsx
import styles from './StoreAvailability.module.scss';

interface Store {
  name: string;
  address: string;
  available: boolean;
}

interface StoreAvailabilityProps {
  stores: Store[];
}

export function StoreAvailability({ stores }: StoreAvailabilityProps) {
  const availableStores = stores.filter(store => store.available);
  
  if (availableStores.length === 0) {
    return null;
  }

  return (
    <div className={styles.storeAvailability}>
      <h4 className={styles.title}>Available in stores</h4>
      
      <div className={styles.storesList}>
        {availableStores.map((store, index) => (
          <div key={index} className={styles.store}>
            <div className={styles.storeName}>{store.name}</div>
            <div className={styles.storeAddress}>{store.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}