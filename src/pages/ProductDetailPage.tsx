import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch, state } = useCart();
  
  const product = products.find(p => p.id === id);
  const isInCart = state.items.some(item => item.product.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch({ type: 'ADD_ITEM', product });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {product.isBestSeller && (
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                Best Seller
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <Badge variant="secondary" className="mb-4">{product.category}</Badge>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(4.8/5 - 124 reviews)</span>
            </div>

            <div className="text-4xl font-bold text-blue-600">
              ${product.price}
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium quality ingredients</li>
                  <li>• Third-party tested for purity</li>
                  <li>• Made in FDA-approved facilities</li>
                  <li>• 30-day money-back guarantee</li>
                  <li>• Free shipping on orders over $50</li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                  {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={isInCart || product.stock === 0}
                className="w-full py-3 text-lg"
                size="lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {isInCart ? 'Already in Cart' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;