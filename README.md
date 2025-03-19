# Авточехлы - Telegram Mini App

Интернет-магазин авточехлов на сидения, разработанный как Telegram Mini App.

## Описание проекта

Приложение позволяет пользователям:
- Просматривать каталог авточехлов
- Фильтровать и сортировать товары по различным параметрам
- Добавлять товары в корзину
- Оформлять заказы

## Технологии

- React
- TypeScript
- Redux Toolkit
- React Router DOM
- Vite
- Telegram Mini Apps API

## Структура проекта

```
📁 car-seat-covers-shop/
├── 📁 public/
│   ├── 📄 index.html
│   └── 📁 assets/
│       └── 📁 images/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 common/
│   │   │   ├── 📄 Button.tsx
│   │   │   ├── 📄 Input.tsx
│   │   │   └── 📄 Loader.tsx
│   │   ├── 📁 layout/
│   │   │   ├── 📄 Header.tsx
│   │   │   ├── 📄 Footer.tsx
│   │   │   └── 📄 Navigation.tsx
│   │   ├── 📁 catalog/
│   │   │   ├── 📄 ProductCard.tsx
│   │   │   ├── 📄 ProductList.tsx
│   │   │   └── 📄 FilterPanel.tsx
│   │   └── 📁 cart/
│   │       ├── 📄 CartItem.tsx
│   │       └── 📄 CartSummary.tsx
│   ├── 📁 pages/
│   │   ├── 📄 HomePage.tsx
│   │   ├── 📄 CatalogPage.tsx
│   │   ├── 📄 ProductPage.tsx
│   │   ├── 📄 CartPage.tsx
│   │   └── 📄 OrderPage.tsx
│   ├── 📁 services/
│   │   ├── 📄 api.ts
│   │   ├── 📄 telegram.ts
│   │   └── 📄 storage.ts
│   ├── 📁 store/
│   │   ├── 📄 index.ts
│   │   ├── 📄 cartSlice.ts
│   │   └── 📄 catalogSlice.ts
│   ├── 📁 hooks/
│   │   ├── 📄 useCart.ts
│   │   └── 📄 useTelegram.ts
│   ├── 📁 types/
│   │   ├── 📄 product.ts
│   │   └── 📄 order.ts
│   ├── 📁 utils/
│   │   ├── 📄 constants.ts
│   │   └── 📄 helpers.ts
│   ├── 📁 styles/
│   │   ├── 📄 global.css
│   │   └── 📄 variables.css
│   ├── 📄 App.tsx
│   └── 📄 index.tsx
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md
```

## Запуск проекта

1. Установка зависимостей:
```bash
npm install
```

2. Запуск в режиме разработки:
```bash
npm run dev
```

3. Сборка для продакшена:
```bash
npm run build
```

## Интеграция с Telegram

Для работы с Telegram Mini Apps API используется хук `useTelegram` и сервис `telegram.ts`. 
Они обеспечивают взаимодействие с Telegram Web App API для получения данных пользователя, 
управления интерфейсом и отправки данных боту.

## Дополнительная информация

Проект использует:
- Redux Toolkit для управления состоянием
- React Router для навигации
- TypeScript для типизации данных
- Vite для сборки и разработки

## Автор

Vladimr 