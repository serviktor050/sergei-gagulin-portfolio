import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import { EducationCard, Certificates } from './ui';
import { PageLayout } from '../../shared/layouts';
import { HIGHER_EDUCATION, ADDITIONAL_EDUCATION } from './config/constants';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const EducationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout title={t('education-page.title')}>
      <div className={cx('sub-title')}>{t('education-page.sub-title.higher-education')}</div>
      <EducationCard education={HIGHER_EDUCATION} />
      <div className={cx('sub-title')}>{t('education-page.sub-title.additional-education')}</div>
      <EducationCard education={ADDITIONAL_EDUCATION} />
      <div className={cx('sub-title')}>{t('education-page.sub-title.certificates')}</div>
      <Certificates />
    </PageLayout>
  );
};

export default EducationPage;