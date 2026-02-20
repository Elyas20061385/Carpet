// Product and Category Data

import categoryQazaq from '@/assets/category-qazaq.jpg';
import categoryKilim from '@/assets/category-kilim.jpg';
import categorySilk from '@/assets/category-silk.jpg';
import categoryWool from '@/assets/category-wool.jpg';
import categoryShirwan from '@/assets/category-shirwan.jpg';
import categoryChobrang from '@/assets/category-chobrang.jpg';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  material: string;
  size: string;
  weight: string;
  origin: string;
  weavingType: string;
  sku: string;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Qazaq',
    slug: 'qazaq',
    image: categoryQazaq,
    description: 'Bold geometric patterns with vibrant colors',
    productCount: 24
  },
  {
    id: '2',
    name: 'Kilim',
    slug: 'kilim',
    image: categoryKilim,
    description: 'Flat-weave tribal artistry',
    productCount: 18
  },
  {
    id: '3',
    name: 'Silk',
    slug: 'silk',
    image: categorySilk,
    description: 'Luxurious handwoven silk masterpieces',
    productCount: 12
  },
  {
    id: '4',
    name: 'Afghan Wool',
    slug: 'wool',
    image: categoryWool,
    description: 'Classic medallion designs in premium wool',
    productCount: 32
  },
  {
    id: '5',
    name: 'Shirwan',
    slug: 'shirwan',
    image: categoryShirwan,
    description: 'Caucasian-inspired medallion patterns',
    productCount: 15
  },
  {
    id: '6',
    name: 'Chob Rang',
    slug: 'chobrang',
    image: categoryChobrang,
    description: 'Unique wooden color palette designs',
    productCount: 10
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Herat Medallion',
    slug: 'royal-herat-medallion',
    category: 'Qazaq',
    price: 2850,
    originalPrice: 3200,
    image: product1,
    images: [product1, product1, product1],
    description: 'A magnificent hand-knotted carpet featuring the iconic Herat medallion pattern. Each knot is tied with precision by master weavers in the Herat province, using techniques passed down through generations. The rich crimson field is adorned with intricate geometric motifs in deep navy and ivory.',
    material: '100% Hand-spun Wool',
    size: '200 x 300 cm',
    weight: '12.5 kg',
    origin: 'Herat, Afghanistan',
    weavingType: 'Hand-knotted',
    sku: 'AFG-QZQ-001',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: '2',
    name: 'Tribal Kilim Runner',
    slug: 'tribal-kilim-runner',
    category: 'Kilim',
    price: 1450,
    image: product2,
    images: [product2, product2, product2],
    description: 'A stunning flat-weave kilim runner showcasing bold tribal patterns in vibrant terracotta and navy. Perfect for hallways and entryways, this piece brings warmth and cultural richness to any space.',
    material: 'Hand-spun Wool',
    size: '80 x 300 cm',
    weight: '4.2 kg',
    origin: 'Mazar-i-Sharif, Afghanistan',
    weavingType: 'Flat-weave',
    sku: 'AFG-KLM-002',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Emerald Garden Silk',
    slug: 'emerald-garden-silk',
    category: 'Silk',
    price: 8500,
    originalPrice: 9200,
    image: product3,
    images: [product3, product3, product3],
    description: 'An exquisite silk carpet featuring an enchanting garden motif in emerald green with golden floral scrollwork. The luminous silk threads create a shimmering effect that changes with the light, making this piece a true work of art.',
    material: '100% Pure Silk',
    size: '180 x 270 cm',
    weight: '8.5 kg',
    origin: 'Kabul, Afghanistan',
    weavingType: 'Hand-knotted',
    sku: 'AFG-SLK-003',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: '4',
    name: 'Classic Medallion Wool',
    slug: 'classic-medallion-wool',
    category: 'Afghan Wool',
    price: 3200,
    image: product4,
    images: [product4, product4, product4],
    description: 'A timeless wool carpet featuring a grand central medallion on a rich burgundy field. The intricate corner spandrels and detailed border showcase the pinnacle of Afghan weaving artistry.',
    material: '100% Highland Wool',
    size: '250 x 350 cm',
    weight: '18.5 kg',
    origin: 'Kabul, Afghanistan',
    weavingType: 'Hand-knotted',
    sku: 'AFG-WOL-004',
    inStock: true,
    bestSeller: true
  },
  {
    id: '5',
    name: 'Shirwan Star Pattern',
    slug: 'shirwan-star-pattern',
    category: 'Shirwan',
    price: 2100,
    image: categoryShirwan,
    images: [categoryShirwan, categoryShirwan, categoryShirwan],
    description: 'Featuring the distinctive Shirwan star medallion pattern, this carpet showcases the Caucasian influence on Afghan weaving traditions. The repeating geometric stars on a crimson field create a mesmerizing visual rhythm.',
    material: 'Hand-spun Wool',
    size: '200 x 280 cm',
    weight: '11.2 kg',
    origin: 'Northern Afghanistan',
    weavingType: 'Hand-knotted',
    sku: 'AFG-SHR-005',
    inStock: true
  },
  {
    id: '6',
    name: 'Chob Rang Earth Tones',
    slug: 'chob-rang-earth-tones',
    category: 'Chob Rang',
    price: 1890,
    image: categoryChobrang,
    images: [categoryChobrang, categoryChobrang, categoryChobrang],
    description: 'The unique "wooden color" palette of this Chob Rang carpet features warm earth tones with subtle geometric patterns. Its natural, rustic appearance makes it perfect for both traditional and contemporary interiors.',
    material: 'Natural-dyed Wool',
    size: '180 x 260 cm',
    weight: '9.8 kg',
    origin: 'Ghazni, Afghanistan',
    weavingType: 'Hand-knotted',
    sku: 'AFG-CHB-006',
    inStock: true
  },
  {
    id: '7',
    name: 'Heritage Qazaq Bold',
    slug: 'heritage-qazaq-bold',
    category: 'Qazaq',
    price: 3450,
    image: categoryQazaq,
    images: [categoryQazaq, categoryQazaq, categoryQazaq],
    description: 'Bold geometric patterns define this exceptional Qazaq carpet. The striking contrast of crimson, navy, and cream creates a powerful visual statement while honoring centuries-old weaving traditions.',
    material: '100% Hand-spun Wool',
    size: '220 x 320 cm',
    weight: '14.2 kg',
    origin: 'Ghazni, Afghanistan',
    weavingType: 'Hand-knotted',
    sku: 'AFG-QZQ-007',
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'Tribal Kilim Accent',
    slug: 'tribal-kilim-accent',
    category: 'Kilim',
    price: 980,
    image: categoryKilim,
    images: [categoryKilim, categoryKilim, categoryKilim],
    description: 'A vibrant accent kilim perfect for adding a pop of color to any room. The traditional tribal motifs in orange and navy showcase the rich textile heritage of Afghan flat-weave artistry.',
    material: 'Hand-spun Wool',
    size: '120 x 180 cm',
    weight: '2.8 kg',
    origin: 'Mazar-i-Sharif, Afghanistan',
    weavingType: 'Flat-weave',
    sku: 'AFG-KLM-008',
    inStock: true
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Elizabeth Hartley',
    location: 'London, UK',
    rating: 5,
    text: 'The quality of my Herat carpet exceeded all expectations. The craftsmanship is extraordinary, and it has become the centerpiece of our living room.',
    product: 'Royal Herat Medallion'
  },
  {
    id: '2',
    name: 'James Mitchell',
    location: 'New York, USA',
    rating: 5,
    text: 'Working with Afghan Carpets was a pleasure from start to finish. Their expertise helped me find the perfect silk carpet for my home office.',
    product: 'Emerald Garden Silk'
  },
  {
    id: '3',
    name: 'Sophie Dubois',
    location: 'Paris, France',
    rating: 5,
    text: 'I\'ve collected carpets for 20 years, and the pieces from Afghan Carpets are among the finest in my collection. Truly museum-quality work.',
    product: 'Classic Medallion Wool'
  }
];

export const branches = [
  {
    id: '1',
    name: 'Kabul Showroom',
    city: 'Kabul',
    country: 'Afghanistan',
    address: 'Karte-e-Mamorin, District 6, Kabul',
    phone: '+93 700 123 456',
    email: 'kabul@afghancarpets.com',
    hours: 'Sat-Thu: 9:00 AM - 6:00 PM'
  },
  {
    id: '2',
    name: 'Mazar-i-Sharif Gallery',
    city: 'Mazar-i-Sharif',
    country: 'Afghanistan',
    address: 'Blue Mosque District, Mazar-i-Sharif',
    phone: '+93 700 234 567',
    email: 'mazar@afghancarpets.com',
    hours: 'Sat-Thu: 9:00 AM - 5:00 PM'
  },
  {
    id: '3',
    name: 'Istanbul Trade Center',
    city: 'Istanbul',
    country: 'Turkey',
    address: 'Grand Bazaar, Kapalicarsi, Istanbul',
    phone: '+90 212 123 4567',
    email: 'istanbul@afghancarpets.com',
    hours: 'Mon-Sat: 10:00 AM - 7:00 PM'
  },
  {
    id: '4',
    name: 'Dubai Design District',
    city: 'Dubai',
    country: 'UAE',
    address: 'Dubai Design District (D3), Building 4',
    phone: '+971 4 123 4567',
    email: 'dubai@afghancarpets.com',
    hours: 'Sun-Thu: 10:00 AM - 8:00 PM'
  }
];

export const blogPosts = [
  {
    id: '1',
    title: 'The Art of Afghan Carpet Weaving: A Centuries-Old Tradition',
    slug: 'art-of-afghan-carpet-weaving',
    excerpt: 'Discover the intricate techniques and cultural significance behind traditional Afghan carpet weaving.',
    category: 'Heritage',
    date: '2024-01-15',
    readTime: '8 min read',
    image: categoryQazaq
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Carpet for Your Space',
    slug: 'choose-perfect-carpet',
    excerpt: 'Expert tips on selecting size, color, and pattern to complement your interior design.',
    category: 'Buying Guide',
    date: '2024-01-10',
    readTime: '6 min read',
    image: categoryWool
  },
  {
    id: '3',
    title: 'Caring for Your Handmade Carpet: Essential Maintenance Tips',
    slug: 'carpet-care-tips',
    excerpt: 'Learn how to preserve the beauty and longevity of your investment with proper care.',
    category: 'Care Guide',
    date: '2024-01-05',
    readTime: '5 min read',
    image: categorySilk
  }
];
