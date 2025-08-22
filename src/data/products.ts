export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Whey Protein Powder',
    description: 'Premium whey protein for muscle building and recovery',
    price: 49.99,
    category: 'Protein',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
    isBestSeller: true,
    stock: 50
  },
  {
    id: '2', 
    name: 'Creatine Monohydrate',
    description: 'Pure creatine for strength and power enhancement',
    price: 29.99,
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    isBestSeller: true,
    stock: 30
  },
  {
    id: '3',
    name: 'Multivitamin Complex',
    description: 'Complete daily vitamin and mineral support',
    price: 24.99,
    category: 'Vitamins',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400',
    isBestSeller: false,
    stock: 75
  },
  {
    id: '4',
    name: 'Omega-3 Fish Oil',
    description: 'High-quality fish oil for heart and brain health',
    price: 34.99,
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    isBestSeller: true,
    stock: 40
  }
];

export const categories = ['All', 'Protein', 'Performance', 'Vitamins', 'Health'];