// src/pages/Collections/CollectionShowcase/mockProducts.ts
import type { Product } from './ProductGrid/ProductGrid';

import image1 from '@/assets/images/products/image-1.png';
import image2 from '@/assets/images/products/image-2.png';
import image3 from '@/assets/images/products/image-3.png';
import image4 from '@/assets/images/products/image-4.png';
import image5 from '@/assets/images/products/image-5.png';
import image6 from '@/assets/images/products/image-6.png';
import image7 from '@/assets/images/products/image-7.png';
import image8 from '@/assets/images/products/image-8.png';
import image9 from '@/assets/images/products/image.png';
// import image10 from '@/assets/images/products/image-10.png';
// import image11 from '@/assets/images/products/image-11.png';
// import image12 from '@/assets/images/products/image-12.png';
// Добавь остальные если нужно

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Essential Swim Top',
    price: 89,
    currency: 'USD',
    image: image1,
  },
  {
    id: '2',
    name: 'Classic One-Piece Swimsuit',
    price: 129,
    currency: 'USD',
    image: image2,
  },
  {
    id: '3',
    name: 'High-Waist Swim Bottoms',
    price: 65,
    currency: 'USD',
    image: image3,
  },
  {
    id: '4',
    name: 'Tankini Set',
    price: 145,
    currency: 'USD',
    image: image4,
  },
  {
    id: '5',
    name: 'Bikini Top with Padded Cups',
    price: 78,
    currency: 'USD',
    image: image5,
  },
  {
    id: '6',
    name: 'Sporty Swim Shorts',
    price: 95,
    currency: 'USD',
    image: image6,
  },
  {
    id: '7',
    name: 'Elegant Monokini',
    price: 165,
    currency: 'USD',
    image: image7,
  },
  {
    id: '8',
    name: 'Strapless Bandeau',
    price: 72,
    currency: 'USD',
    image: image8,
  },
  {
    id: '9',
    name: 'Cheeky Swim Bottom',
    price: 58,
    currency: 'USD',
    image: image9,
  }
//   },
//   {
//     id: '10',
//     name: 'Long Sleeve Swim Top',
//     price: 98,
//     currency: 'USD',
//     image: image10,
//   },
//   {
//     id: '11',
//     name: 'Wrap Swimsuit',
//     price: 139,
//     currency: 'USD',
//     image: image11,
//   },
//   {
//     id: '12',
//     name: 'High-Neck Swim Top',
//     price: 85,
//     currency: 'USD',
//     image: image12,
//   },
];