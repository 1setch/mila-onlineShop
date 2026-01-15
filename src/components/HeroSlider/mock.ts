// mock.ts
import type { HeroSlideData } from './types';

import hero1Desktop from '@/assets/images/hero/hero-1-desktop.png';
import hero1Mobile from '@/assets/images/hero/hero-1-mobile.png';

import hero2Desktop from '@/assets/images/hero/hero-2-desktop.jpg';
import hero2Mobile from '@/assets/images/hero/hero-2-mobile.png';

import hero3Desktop from '@/assets/images/hero/hero-3-desktop.jpg';
import hero3Mobile from '@/assets/images/hero/hero-3-mobile.png';

import hero4Desktop from '@/assets/images/hero/hero-4-desktop.jpg';
import hero4Mobile from '@/assets/images/hero/hero-4-mobile.png';



export const heroSlidesMock: HeroSlideData[] = [
  {
    id: 'summer-collection',
    title: 'Maximum impact',
    subtitle: 'Swimwear designed for confidence',
    imageDesktop: hero1Desktop,
    imageMobile: hero1Mobile,
    ctaText: 'Shop now',
    ctaLink: '/collection/summer',
  },
  {
    id: 'new-arrivals',
    title: 'New season essentials',
    subtitle: 'Minimal silhouettes. Premium fabrics.',
    imageDesktop: hero2Desktop,
    imageMobile: hero2Mobile,
    ctaText: 'Discover',
    ctaLink: '/collection/new',
  },
  {
    id: 'new-arrivals2',
    title: 'New huynya',
    subtitle: 'Minimal silhouettes. Premium fabrics.',
    imageDesktop: hero3Desktop,
    imageMobile: hero3Mobile,
    ctaText: 'Discover',
    ctaLink: '/collection/new',
  },
  {
    id: 'new-arrivals3',
    title: 'Брюнетки рулят дура',
    subtitle: 'Minimal silhouettes. Premium fabrics.',
    imageDesktop: hero4Desktop,
    imageMobile: hero4Mobile,
    ctaText: 'Discover',
    ctaLink: '/collection/new',
  },
];
