// Этот файл содержит функции и методы для работы с Telegram Mini Apps API

/**
 * Получает данные пользователя из initDataUnsafe
 */
export const getUserData = () => {
  const tg = window.Telegram.WebApp;
  return tg.initDataUnsafe?.user || null;
};

/**
 * Настраивает главную кнопку Telegram
 */
export const setupMainButton = (
  text: string,
  onClick: () => void,
  color = '#0088cc',
  textColor = '#ffffff',
) => {
  const tg = window.Telegram.WebApp;
  tg.MainButton.setText(text);
  tg.MainButton.setParams({
    color,
    textColor,
  });
  tg.MainButton.onClick(onClick);
  tg.MainButton.show();

  return () => {
    tg.MainButton.offClick(onClick);
    tg.MainButton.hide();
  };
};

/**
 * Отправляет данные в Telegram бота
 */
export const sendDataToBot = (data: any) => {
  const tg = window.Telegram.WebApp;
  tg.sendData(JSON.stringify(data));
};

/**
 * Открывает ссылку в браузере
 */
export const openLink = (url: string) => {
  const tg = window.Telegram.WebApp;
  tg.openLink(url);
}; 