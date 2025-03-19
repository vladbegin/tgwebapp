import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state, 
      action: PayloadAction<{ product: Product; quantity: number; color: string; carModel: string }>
    ) => {
      const { product, quantity, color, carModel } = action.payload;
      const existingItem = state.items.find(
        item => 
          item.productId === product.id &&
          item.color === color &&
          item.carModel === carModel
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          productId: product.id,
          product,
          quantity,
          color,
          carModel,
        });
      }
    },
    
    removeFromCart: (
      state, 
      action: PayloadAction<{ productId: string; color: string; carModel: string }>
    ) => {
      const { productId, color, carModel } = action.payload;
      state.items = state.items.filter(
        item => 
          !(item.productId === productId && 
            item.color === color && 
            item.carModel === carModel)
      );
    },
    
    updateQuantity: (
      state, 
      action: PayloadAction<{ 
        productId: string; 
        color: string; 
        carModel: string; 
        quantity: number 
      }>
    ) => {
      const { productId, color, carModel, quantity } = action.payload;
      const item = state.items.find(
        item => 
          item.productId === productId && 
          item.color === color && 
          item.carModel === carModel
      );
      
      if (item) {
        item.quantity = quantity;
      }
    },
    
    clearCart: (state) => {
      state.items = [];
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  setLoading,
  setError,
} = cartSlice.actions;

export default cartSlice.reducer; 