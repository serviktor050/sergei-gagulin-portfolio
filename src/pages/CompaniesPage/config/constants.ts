import flycode from '../../../assets/img/png/flycode.png';
import spider from '../../../assets/img/png/spider.png';
import stecpoint from '../../../assets/img/png/stecpoint.png';
import triada from '../../../assets/img/png/triada.png';
import { Company } from './interfaces';

const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'FlyCode',
    description: {
      ru: 'Разработка веб-сервисов и приложений. Сайты, корпоративные системы, личные кабинеты и дашборды под ключ.',
      en: 'Development of web services and applications. Websites, corporate systems, personal accounts and turn-key dashboards.',
    },
    href: 'https://fly-code.com/',
    src: flycode,
    alt: 'FlyCode',
    period: {
      ru: 'с 05.2021 по 12.2023',
      en: 'from 2021.05 to 2023.12',
    },
  },
  {
    id: 2,
    name: 'StecPoint (Outstaff)',
    description: {
      ru: 'Разрабатываем программное обеспечение для бизнеса. ' +
        'Создаем высоконагруженные платформы, проектируем web и мобильные приложения. ' +
        'Переписываем старый софт на микросервисы и OpenSource.',
      en: 'We develop software for business. ' +
        'We create high-load platforms, design web and mobile applications. ' +
        'Rewriting the old software for microservices and OpenSource.',
    },
    href: 'https://stecpoint.ru/',
    src: stecpoint,
    alt: 'StecPoint',
    period: {
      ru: 'с 01.2024 по 03.2024',
      en: 'from 2024.01 to 2024.03',
    },
  },
  {
    id: 3,
    name: 'Spider Group',
    description: {
      ru: 'Разработка мобильных приложений, веб-платформ, серверной логики, а также проектов с определяющими наш век' +
        'технологиями, такими как искусственный интеллект, дополненная реальность и интернет вещей.',
      en: 'Development of mobile applications, web platforms, server logic, as well as projects with technologies defining' +
        'our age, such as artificial intelligence, augmented reality and the internet of things.',
    },
    href: 'https://msk.spider.ru/',
    src: spider,
    alt: 'Spider Group',
    period: {
      ru: 'с 12.2023 по 03.2025',
      en: 'from 2023.12 to 2025.03',
    },
  },
  {
    id: 4,
    name: 'Триада',
    description: {
      ru: 'Разработка и поддержка технологичных сайтов, высоконагруженных e-commerce проектов, корпоративных порталов,' +
        ' CRM систем, мобильных приложений.',
      en: 'Development and support of high-tech websites, high-load e-commerce projects, corporate portals, '+
        ' CRM systems, and mobile applications.',
    },
    href: 'https://triadasite.ru/',
    src: triada,
    alt: 'Triada',
    period: {
      ru: 'с 07.2025 по 05.2026',
      en: 'from 2025.07 to 2026.05',
    },
  },
];

export default COMPANIES.reverse();