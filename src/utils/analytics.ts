// src/utils/analytics.ts
import { useEffect, useState, useRef } from 'react';

// Типизация для результата с геолокацией
type LocationData = {
  ip: string;
  city: string;
  region: string;
  country: string;
};

export function useAnalytics() {
  const [clicks, setClicks] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [location, setLocation] = useState('');
  const hasNotified = useRef(false);
  const startTime = useRef(Date.now());

  // Получение геолокации
  const fetchGeoLocation = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=10d4e38271cb2e');
      const data: LocationData = await response.json();
      setLocation(
        `${data.city}, ${data.region}, ${data.country} (${data.ip}), ${data.loc}`
      );
    } catch (error) {
      console.error('Ошибка получения геолокации', error);
      setLocation('Не удалось определить местоположение');
    }
  };

  // Отправка уведомления в Telegram
  const sendVisitNotification = async () => {
    if (hasNotified.current) return;

    // Получение дополнительных данных
    const userAgent = navigator.userAgent;
    const referer = document.referrer;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const language = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Сбор данных для отправки
    const data = `
      Посетитель зашел на сайт:
      - Время на странице: ${(Date.now() - startTime.current) / 1000} сек.
      - Клики: ${clicks}
      - Прокрутка: ${scrollDepth}%
      - Местоположение: ${location}
      - User Agent: ${userAgent}
      - Referer: ${referer || 'неизвестно'}
      - Размер экрана: ${screenWidth}x${screenHeight}
      - Язык: ${language}
      - Часовой пояс: ${timezone}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot2116707856:AAFxAytMmyEEFTUs4xfm7MkPWGHfB5vliuc/sendMessage?chat_id=1166930953&text=${encodeURIComponent(
          data
        )}`
      );

      if (!response.ok) throw new Error('Ошибка отправки');
      hasNotified.current = true;
      console.log('Уведомление отправлено в Telegram');
    } catch (err) {
      console.error('Произошла ошибка при отправке', err);
    }
  };

  useEffect(() => {
    fetchGeoLocation();

    // Обработчик кликов
    const handleClick = () => setClicks((prev) => prev + 1);

    // Обработчик прокрутки
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setScrollDepth(Math.round((scrollPosition / documentHeight) * 100));
    };

    // Добавление обработчиков
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    // Завершение действия при размонтировании компонента
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      sendVisitNotification();
    };
  }, []);

  return { clicks, scrollDepth, location };
}
