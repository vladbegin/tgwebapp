import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import catalogReducer from './catalogSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 