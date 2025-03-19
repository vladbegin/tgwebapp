export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  features: string[];
  inStock: boolean;
  carModels: string[];
  colors: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  color: string;
  carModel: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  address: {
    fullName: string;
    phone: string;
    city: string;
    street: string;
    house: string;
    apartment?: string;
  };
  paymentMethod: 'card' | 'cash';
  createdAt: string;
} 