declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        close: () => void;
        expand: () => void;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
          setText: (text: string) => void;
          setParams: (params: {
            text?: string;
            color?: string;
            textColor?: string;
            isVisible?: boolean;
            isActive?: boolean;
          }) => void;
        };
        onEvent: (eventName: string, callback: (event: any) => void) => void;
        offEvent: (eventName: string, callback: (event: any) => void) => void;
        sendData: (data: string) => void;
        openLink: (url: string) => void;
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
        };
      };
    };
  }
}

export function useTelegram() {
  const tg = window.Telegram.WebApp;
  
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
  };
} 