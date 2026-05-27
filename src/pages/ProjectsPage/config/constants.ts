import travelClass from '../../../assets/img/png/projects/travel-class.png';
import kler from '../../../assets/img/png/projects/kler.png';
import antiageClinic from '../../../assets/img/png/projects/antiage-clinic.png';
import lombardL1 from '../../../assets/img/png/projects/lombard-l1.png';
import avtodor from '../../../assets/img/png/projects/avtodor.png';
import yourservice from '../../../assets/img/png/projects/yourservice.png';
import rafarma from '../../../assets/img/png/projects/rafarma.png';
import serviceme from '../../../assets/img/png/projects/serviceme.png';
import wandwork from '../../../assets/img/png/projects/wandwork.png';
import teboil from '../../../assets/img/png/projects/teboil.png';

import { Project } from './interfaces';

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Travel Class',
    description: {
      ru: 'Travel Class - это международная платформа, предназначенная для преподавателей, ' +
        'студентов и их родителей, чтобы упростить планирование и бронирование языковых и учебных курсов.',
      en: 'Travel Class is an international platform designed for teachers, ' +
        'students and their parents to simplify the planning and booking of language and study courses.',
    },
    responsibility: {
      ru: 'Работа в тесном контакте с PHP-разработчиком. Правка дизайна существующих страниц, ' +
        'реализаций новых пожеланий клиента на сайте.',
      en: 'Working closely with a PHP developer. Edit the design of existing pages, ' +
        'implementations of new customer wishes on the site.',
    },
    href: 'https://www.travelclass.org/',
    src: travelClass,
    alt: 'Travel Class',
    stack: [
      {
        id: 1,
        name: 'PHP',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
      {
        id: 4,
        name: 'JQuery',
      },
    ],
    period: {
      ru: 'с 05.2021 по 12.2021',
      en: 'from 2021.05 to 2021.12',
    },
  },
  {
    id: 2,
    name: 'Kler',
    description: {
      ru: 'Kler – это сайт магазина современной и элегантной мебели для гостиных, спален и столовых комнат.',
      en: 'Kler is a website of a store of modern and elegant furniture for living rooms, bedrooms and dining rooms.',
    },
    responsibility: {
      ru: 'Работа в тесном контакте с PHP-разработчиком. Правка дизайна существующих страниц, ' +
        'реализаций новых пожеланий клиента на сайте.',
      en: 'Working closely with a PHP developer. Edit the design of existing pages, ' +
        'implementations of new customer wishes on the site.',
    },
    href: 'https://www.kler.eu/en',
    src: kler,
    alt: 'Kler',
    stack: [
      {
        id: 1,
        name: 'PHP',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
      {
        id: 4,
        name: 'JQuery',
      },
    ],
    period: {
      ru: 'с 05.2021 по 12.2021',
      en: 'from 2021.05 to 2021.12',
    },
  },
  {
    id: 3,
    name: 'AntiAge Clinic',
    description: {
      ru: 'AntiAge Clinic – это медицинская онлайн-платформа для клиник и врачей частной практики, ' +
        'позволяющая работать как со своей базой пациентов, так и получать новых клиентов онлайн.',
      en: 'AntiAge Clinic is an online medical platform for clinics and doctors of private practice, ' +
        'allowing you to work both with your patient base and get new clients online.',
    },
    responsibility: {
      ru: 'Разработка пользовательского интерфейса для администратора клиники или врача частной практики. ' +
        'Разработка CRUD списков врачей и пациентов, функционала графика работы врача: правил рабочих дней, ' +
        'а также отпусков, отгулов и больничных. Проектирование и реализация функционала видеочатов и ' +
        'консилиумов между врачами и пациентами. Верстка протоколов приема, а также заполненного календаря ' +
        'назначений препаратов для их последующего вывода в PDF. Создание конструктора шаблонов осмотра ' +
        'для врача, возможность подгрузки определенного шаблона в консультацию с привязкой к услуге.',
      en: 'Development of a user interface for a clinic administrator or a private practitioner. ' +
        'Development of CRUD lists of doctors and patients, the functionality of the doctor\'s work schedule: ' +
        'rules of working days, as well as vacations, days off and sick days. Designing and implementing ' +
        'the functionality of video chats and consultations between doctors and patients. ' +
        'Layout of reception protocols, as well as a completed calendar of prescriptions of drugs for ' +
        'their subsequent output in PDF. Creating a designer of examination templates for a doctor, ' +
        'the ability to upload a specific template to a consultation with a link to a service.',
    },
    href: 'https://clinic.antiage-expert.com/schedule',
    src: antiageClinic,
    alt: 'AntiAge Clinic',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'React hook form',
      },
      {
        id: 3,
        name: 'React i18next',
      },
      {
        id: 4,
        name: 'React Query',
      },
      {
        id: 5,
        name: 'Redux thunk',
      },
      {
        id: 6,
        name: 'Antd',
      },
      {
        id: 7,
        name: 'Classnames',
      },
      {
        id: 8,
        name: 'HTML react parser',
      },
      {
        id: 9,
        name: 'Jest',
      },
      {
        id: 10,
        name: 'React testing library',
      },
    ],
    period: {
      ru: 'с 05.2021 по 12.2023',
      en: 'from 2021.05 to 2023.12',
    },
  },
  {
    id: 4,
    name: 'Ломбард - Л1',
    description: {
      ru: 'ООО "Ломбард - Л1" - финансовая организация, предоставляющая займы физическим лицам ' +
        'под залог ювелирных изделий из драгоценных металлов, изделий с драгоценными камнями и электроники.',
      en: 'Lombard - L1 is a financial organization that provides loans to individuals secured ' +
        'by jewelry made of precious metals, jewelry with precious stones and electronics.',
    },
    responsibility: {
      ru: 'Разработка приложения бота для мессенджера телеграм, позволяющего пользователю напрямую ' +
        'отправить заявку на оценку изделия, не используя сайт.',
      en: 'Development of a bot application for the telegram messenger, ' +
        'which allows the user to directly send a request for product evaluation without using the website.',
    },
    href: 'https://lombard-l1.ru/',
    src: lombardL1,
    alt: 'Lombard - L1',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'React hook form',
      },
      {
        id: 4,
        name: 'React Query',
      },
      {
        id: 5,
        name: 'Material UI',
      },
      {
        id: 6,
        name: 'Classnames',
      },
    ],
    period: {
      ru: 'с 01.2024 по 02.2024',
      en: 'from 2024.01 to 2024.02',
    },
  },
  {
    id: 5,
    name: 'Автодор (Outstaff)',
    description: {
      ru: 'ООО «Автодор – Платные Дороги» входит в группу компаний «Автодор». ' +
        'Компания была создана в 2014 году с целью ведения операторской деятельности по ' +
        'взиманию денежных средств на платных участках автодорог, ' +
        'распространению транспондеров T-pass и внедрения удобных клиентских сервисов.',
      en: 'Avtodor – Toll Roads LLC is a member of the Avtodor group of companies. ' +
        'The company was established in 2014 with the aim of conducting operator activities ' +
        'for the collection of funds on toll sections of highways, ' +
        'the distribution of T-pass transponders and the introduction of convenient customer services.',
    },
    responsibility: {
      ru: 'Доработка существующего функционала портала. Реализация новых фичей согласно техническому заданию заказчика.',
      en: 'Improvement of the existing functionality of the portal. ' +
        'Implementation of new features according to the customer terms of reference.',
    },
    href: 'https://avtodor-tr.ru/',
    src: avtodor,
    alt: 'Avtodor',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
    ],
    period: {
      ru: 'с 02.2024 по 04.2024',
      en: 'from 2024.02 to 2024.04',
    },
  },
  {
    id: 6,
    name: '@Your Service',
    description: {
      ru: 'YourService — сайт сервиса для поиска специалистов в Западной Европе.',
      en: 'YourService is a service website for finding specialists in Western Europe.',
    },
    responsibility: {
      ru: 'Разработка web-приложения с нуля. Выбор и реализация структуры проекта. ' +
        'Реализация фичи по оформлению заказа пользователем. Интеграция с google-maps. ' +
        'Реализация многоязычности в интерфейсе приложения.',
      en: 'Developing a web application from scratch. Selection and implementation of the project structure. ' +
        'Implementation of the feature for placing an order by the user. Integration with Google maps. ' +
        'Implementation of multilingualism in the application interface.',
    },
    href: 'https://atyourservice.lu/',
    src: yourservice,
    alt: '@Your Service',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'React hook form',
      },
      {
        id: 4,
        name: 'React i18next',
      },
      {
        id: 5,
        name: 'React Query',
      },
      {
        id: 6,
        name: 'Luxon',
      },
      {
        id: 7,
        name: 'Material UI',
      },
      {
        id: 8,
        name: 'Classnames',
      },
      {
        id: 9,
        name: 'Google-maps react',
      },
    ],
    period: {
      ru: 'с 04.2024 по 06.2024',
      en: 'from 2024.04 to 2024.06',
    },
  },
  {
    id: 7,
    name: 'Rafarma',
    description: {
      ru: 'АО «Рафарма» - научно-производственный фармацевтический комплекс ' +
        'по производству лекарственных препаратов в соответствии со стандартом GMP.',
      en: 'Rafarma is a scientific and production pharmaceutical complex for the production ' +
        'of medicines in accordance with the GMP standard.',
    },
    responsibility: {
      ru: 'Старший фронтенд разработчик. Разработка web-приложения с нуля. Выбор и реализация структуры. ' +
        'Функционал реализованного приложения позволяет через канал websocket получать данные онлайн с ' +
        'подключенных весов к рабочему месту оператора. В интерфейсе реализованы возможности ' +
        'рецептурного взвешивания и простого взвешивания, выбор весов, проведение калибровки и тарирования оборудования.',
      en: 'Senior frontend developer. Developing a web application from scratch. ' +
        'The choice and implementation of the structure. ' +
        'The functionality of the implemented application allows you to receive data online from the connected scales ' +
        'to the operator workplace through the websocket channel. The interface implements the capabilities of ' +
        'prescription weighing and simple weighing, selection of scales, calibration and calibration of equipment.',
    },
    href: 'https://rafarma.ru/',
    src: rafarma,
    alt: 'Rafarma',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'React hook form',
      },
      {
        id: 4,
        name: 'Redux tool kit',
      },
      {
        id: 5,
        name: 'RTK Query',
      },
      {
        id: 6,
        name: 'Luxon',
      },
      {
        id: 7,
        name: 'Classnames',
      },
    ],
    period: {
      ru: 'с 06.2024 по 09.2024',
      en: 'from 2024.06 to 2024.09',
    },
  },
  {
    id: 8,
    name: 'Service Me',
    description: {
      ru: 'Service Me - приложение для записи автомобиля на сервис.',
      en: 'Service Me is an application for recording a car for service.',
    },
    responsibility: {
      ru: 'Старший фронтенд разработчик. Разработка web-приложения с нуля. Выбор и реализация структуры. ' +
        'Адаптивная верстка (mobile first). Функционал реализованного приложения позволяет добавить автомобиль ' +
        'в гараж как по vin и госномеру так и вручную, внести данные об автомобиле. Записаться на выбранную услугу. ' +
        'В приложение интегрированы Яндекс карты.',
      en: 'Senior frontend developer. Developing a web application from scratch. ' +
        'The choice and implementation of the structure. Adaptive layout (mobile first). ' +
        'The functionality of the implemented application allows you to add a car to the garage both ' +
        'by vin and license plate number and manually enter data about the car. Sign up for the selected service. ' +
        'Yandex Maps are integrated into the application.',
    },
    href: 'https://serviceme.pro/',
    src: serviceme,
    alt: 'ServiceMe',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'React hook form',
      },
      {
        id: 4,
        name: 'Redux tool kit',
      },
      {
        id: 5,
        name: 'RTK Query',
      },
      {
        id: 6,
        name: 'Classnames',
      },
      {
        id: 7,
        name: 'React yandex-maps',
      },
    ],
    period: {
      ru: 'с 09.2024 по 11.2024',
      en: 'from 2024.09 to 2024.11',
    },
  },
  {
    id: 9,
    name: 'WandWork',
    description: {
      ru: 'WandWork - приложение-социальная сеть для заказчиков и фрилансеров.',
      en: 'WandWork is a social network application for clients and freelancers.',
    },
    responsibility: {
      ru: 'Фронтенд разработчик в команде разработки. Разработка функционала мессенджера. ' +
        'Адаптивная верстка (desktop first). Функционал поддерживает личные и групповые чаты, чат поддержки ' +
        'и уведомлений. Реализовано с помощью технологии WebSocket.',
      en: 'A frontend developer in the development team. Messenger functionality development. ' +
        'Adaptive layout (desktop first). The functionality supports personal and group chats, support chat ' +
        'and notifications. Implemented using WebSocket technology.',
    },
    href: '',
    src: wandwork,
    alt: 'WandWork',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'TypeScript',
      },
      {
        id: 3,
        name: 'Redux tool kit',
      },
      {
        id: 4,
        name: 'RTK Query',
      },
      {
        id: 5,
        name: 'Classnames',
      },
    ],
    period: {
      ru: 'с 11.2024 по 03.2025',
      en: 'from 2024.11 to 2025.03',
    },
  },
  {
    id: 10,
    name: 'Teboil',
    description: {
      ru: 'Продукция Teboil — высокоэффективные смазочные материалы, соответствующие международным стандартам качества. ' +
        'Даже в экстремальных условиях эксплуатации они обеспечивают бесперебойную работу техники и оборудования.',
      en: 'Teboil products are highly efficient lubricants that meet international quality standards. ' +
        'Even in extreme operating conditions, they ensure the smooth operation of machinery and equipment.',
    },
    responsibility: {
      ru: 'Старший фронтенд разработчик на трех поддоменах: основной сайт, интернет-магазин, и сайт азс. ' +
        'Поддержка существующего функционала, а также разработка нового согласно требованиям бизнеса. ' +
        'Участие в координации команды, грумминг требований и их последующая декомпозиция по задачам. ' +
        'Выбор и реализация структуры для нового функционала. Адаптивная верстка макетов новых разделов (mobile first).',
      en: 'Senior frontend developer on three subdomains: the main site, the online store, and the gas station site. ' +
        'Support for existing functionality, as well as the development of new ones according to business requirements. ' +
        'Participation in team coordination, grooming of requirements and their subsequent decomposition by tasks. ' +
        'Selection and implementation of the structure for the new functionality. ' +
        'Adaptive layout of new sections (mobile first).',
    },
    href: 'https://teboil.ru/',
    src: teboil,
    alt: 'Teboil',
    stack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Next.js',
      },
      {
        id: 3,
        name: 'TypeScript',
      },
      {
        id: 4,
        name: 'PHP',
      },
      {
        id: 5,
        name: 'Axios',
      },
    ],
    period: {
      ru: 'с 07.2025 по 05.2026',
      en: 'from 2025.07 to 2026.05',
    },
  },
];

export default PROJECTS.reverse();