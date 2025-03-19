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

## Инструкция по загрузке проекта на GitHub Pages

Для загрузки вашего Telegram Mini App на GitHub Pages следуйте этим шагам:

### 1. Создайте репозиторий на GitHub

1. Войдите в свой аккаунт GitHub
2. Нажмите "+" в правом верхнем углу и выберите "New repository"
3. Укажите имя репозитория, например "car-seat-covers-shop"
4. Установите публичный доступ
5. Нажмите "Create repository"

### 2. Подготовьте проект для деплоя

1. Установите пакет `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Добавьте следующие строки в ваш `package.json`:
   ```json
   "homepage": "https://ваш-пользователь.github.io/car-seat-covers-shop",
   "scripts": {
     ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Настройте маршрутизацию для GitHub Pages, изменив в файле `src/App.tsx` строку:
   ```tsx
   <BrowserRouter>
   ```
   на
   ```tsx
   <BrowserRouter basename="/car-seat-covers-shop">
   ```

4. Обновите конфигурацию Vite, добавив базовый путь в `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/car-seat-covers-shop/',
     ...
   });
   ```

### 3. Свяжите локальный репозиторий с GitHub

1. Инициализируйте Git в вашем проекте (если еще не сделано):
   ```bash
   git init
   ```

2. Добавьте все файлы в репозиторий:
   ```bash
   git add .
   ```

3. Сделайте первый коммит:
   ```bash
   git commit -m "Первоначальная загрузка проекта"
   ```

4. Свяжите с удаленным репозиторием:
   ```bash
   git remote add origin https://github.com/ваш-пользователь/car-seat-covers-shop.git
   ```

5. Отправьте код в основную ветку:
   ```bash
   git push -u origin master
   ```

### 4. Выполните деплой на GitHub Pages

1. Выполните команду деплоя:
   ```bash
   npm run deploy
   ```

2. После успешного деплоя ваше приложение будет доступно по адресу:
   ```
   https://ваш-пользователь.github.io/car-seat-covers-shop/
   ```

### 5. Настройка Telegram Mini App

1. Откройте BotFather в Telegram
2. Выберите вашего бота
3. Выберите "Bot Settings" > "Menu Button" или отправьте команду `/setmenubutton`
4. Установите URL вашего приложения (URL из GitHub Pages)
5. Для тестирования используйте команду `/webapp` в чате с вашим ботом

### Дополнительные замечания

- Любые изменения в коде требуют повторного деплоя через `npm run deploy`
- Проверьте настройки CORS, если приложение будет обращаться к внешнему API
- Для работы с Telegram WebApp API убедитесь, что скрипт `telegram-web-app.js` правильно подключен

Ваше приложение теперь должно быть доступно через GitHub Pages и готово к интеграции с Telegram!