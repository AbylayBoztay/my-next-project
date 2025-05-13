import Head from 'next/head';
import styles from '../styles/News.module.css';

export default function News() {
  const newsItems = [

    {
      title: 'Запуск новой темы оформления',
      date: '9 мая 2025',
      description: 'Теперь пользователи могут переключаться между светлой и тёмной темой.',
      image: '/images/theme-news.jpg',
    },
    {
      title: 'Добавлен адаптивный бургер-меню',
      date: '6 мая 2025',
      description: 'Сайт теперь удобен для просмотра на телефонах и планшетах.',
      image: '/images/burger-news.png',
    },
    {
      title: 'Первая версия сайта готова!',
      date: '9 мая 2025',
      description: 'Базовый функционал реализован: навигация, темы, адаптивность.',
      image: '/images/launch-news.jpg',
    },
  ];


return (
  <>
    <Head>
      <title>Новости</title>
    </Head>
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Это страница с новостями. Какие есть обновления, новости, смотрите ниже:
      </p>
      <div className={styles.container}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2>{item.title}</h2>
            <p><strong>Дата:</strong> {item.date}</p>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  </>
);

}
