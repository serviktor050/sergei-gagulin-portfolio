import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import { Technologies } from './ui';
import { PageLayout } from '../../shared/layouts';

import mainImage from '../../assets/img/png/main-image.png';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const AboutPage: React.FC = ()=>  {
  const { t } = useTranslation();

  return (
    <PageLayout title={t('about-page.title')}>
      <div className={cx('description')}>
        <div className={cx('description-item-with-photo')}>
          <div className={cx('description-item-with-photo__text')}>
            {t('about-page.description-1')}
          </div>
          <div className={cx('description-item-with-photo__photo')}>
            <img className={cx('description-item-with-photo__photo__img')} alt="mainImage" src={mainImage} />
          </div>
        </div>
        <div className={cx('description-item')}>{t('about-page.description-2')}</div>
        <div className={cx('description-item')}>{t('about-page.description-3')}</div>
        <div className={cx('description-item')}>{t('about-page.description-4')}</div>
        <div className={cx('description-item')}>{t('about-page.description-5')}</div>
        <div className={cx('description-item')}>{t('about-page.description-6')}</div>
        <div className={cx('description-item')}>{t('about-page.description-7')}</div>
      </div>
      <Technologies />
    </PageLayout>
  );
};

export default AboutPage;