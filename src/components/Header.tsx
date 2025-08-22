import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              SupplementStore
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {!isAdmin ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                <Link to="/admin/orders" className="text-gray-700 hover:text-blue-600">Admin</Link>
              </>
            ) : (
              <>
                <Link to="/admin/orders" className="text-gray-700 hover:text-blue-600">Orders</Link>
                <Link to="/" className="text-gray-700 hover:text-blue-600">Storefront</Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {!isAdmin && (
              <Link to="/cart">
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {state.items.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {state.items.length}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;