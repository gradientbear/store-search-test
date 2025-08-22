export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  orderDate: string;
}

export const dummyOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    },
    items: [
      { productId: '1', productName: 'Whey Protein Powder', price: 49.99, quantity: 1 },
      { productId: '2', productName: 'Creatine Monohydrate', price: 29.99, quantity: 1 }
    ],
    total: 79.98,
    status: 'processing',
    orderDate: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah@example.com',
    customerPhone: '555-0456',
    shippingAddress: {
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210'
    },
    items: [
      { productId: '4', productName: 'Omega-3 Fish Oil', price: 34.99, quantity: 1 }
    ],
    total: 34.99,
    status: 'shipped',
    orderDate: '2024-01-14'
  }
];