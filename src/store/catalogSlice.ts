import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, Category } from '@/types';
import { productsApi, categoriesApi } from '@/services/api';

interface CatalogState {
  products: Product[];
  categories: Category[];
  selectedProduct: Product | null;
  filteredProducts: Product[];
  searchQuery: string;
  selectedCategory: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CatalogState = {
  products: [],
  categories: [],
  selectedProduct: null,
  filteredProducts: [],
  searchQuery: '',
  selectedCategory: null,
  isLoading: false,
  error: null,
};

// Асинхронные операции
export const fetchProducts = createAsyncThunk(
  'catalog/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await productsApi.getAll();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'catalog/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await categoriesApi.getAll();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'catalog/fetchProductById',
  async (id: string, { rejectWithValue }) => {
    try {
      return await productsApi.getById(id);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'catalog/fetchProductsByCategory',
  async (categoryId: string, { rejectWithValue }) => {
    try {
      return await productsApi.getByCategory(categoryId);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const searchProducts = createAsyncThunk(
  'catalog/searchProducts',
  async (query: string, { rejectWithValue }) => {
    try {
      return await productsApi.search(query);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    clearFilters: (state) => {
      state.searchQuery = '';
      state.selectedCategory = null;
      state.filteredProducts = state.products;
    },
  },
  extraReducers: (builder) => {
    // Обработка fetchProducts
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Обработка fetchCategories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Обработка fetchProductById
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Обработка fetchProductsByCategory
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Обработка searchProducts
    builder
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredProducts = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, setSelectedCategory, clearFilters } = catalogSlice.actions;

export default catalogSlice.reducer; 