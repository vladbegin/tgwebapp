// Базовый URL API
const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

// Типы для данных
import { Product, Category, CartItem, Order } from '@/types';

/**
 * Функция для выполнения fetch запросов
 */
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ошибка! статус: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * API для продуктов
 */
export const productsApi = {
  // Получить все продукты
  getAll: () => fetchApi<Product[]>('/products'),
  
  // Получить продукт по ID
  getById: (id: string) => fetchApi<Product>(`/products/${id}`),
  
  // Получить продукты по категории
  getByCategory: (categoryId: string) => fetchApi<Product[]>(`/products?categoryId=${categoryId}`),
  
  // Поиск продуктов
  search: (query: string) => fetchApi<Product[]>(`/products/search?q=${query}`),
};

/**
 * API для категорий
 */
export const categoriesApi = {
  // Получить все категории
  getAll: () => fetchApi<Category[]>('/categories'),
  
  // Получить категорию по ID
  getById: (id: string) => fetchApi<Category>(`/categories/${id}`),
};

/**
 * API для заказов
 */
export const ordersApi = {
  // Создать заказ
  create: (order: Omit<Order, 'id'>) => 
    fetchApi<Order>('/orders', { 
      method: 'POST', 
      body: JSON.stringify(order) 
    }),
  
  // Получить заказ по ID
  getById: (id: string) => fetchApi<Order>(`/orders/${id}`),
  
  // Получить все заказы пользователя
  getUserOrders: (userId: string) => fetchApi<Order[]>(`/orders?userId=${userId}`),
}; 