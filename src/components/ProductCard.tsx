import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch, state } = useCart();
  const isInCart = state.items.some(item => item.product.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch({ type: 'ADD_ITEM', product });
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.isBestSeller && (
            <Badge className="absolute top-2 left-2 bg-orange-500">
              Best Seller
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
        <p className="text-2xl font-bold text-blue-600">${product.price}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 space-y-2">
        <Button
          onClick={handleAddToCart}
          disabled={isInCart || product.stock === 0}
          className="w-full"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isInCart ? 'In Cart' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
        <Link to={`/product/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;