import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import useIsRussianLang from '../../../../shared/lib/useIsRussianLang';

import COMPANIES from '../../config/constants';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CompaniesList: React.FC = () => {
  const { t } = useTranslation();

  return(
    <div className={cx('company-list-wrapper')}>
      {COMPANIES.map(({
        id,
        name,
        description,
        href,
        src,
        alt,
        period,
      }) => (
        <div className={cx('company-item')} key={id}>
          <div className={cx('company-item-name')}>
            {name}
          </div>
          <div className={cx('company-item-description')}>
            <div className={cx('company-item-description-photo')}>
              <img className={cx('company-item-description-photo__img')} alt={alt} src={src} />
            </div>
            <div className={cx('company-item-description__text')}>
              {useIsRussianLang() ? description.ru : description.en}
            </div>
          </div>
          <div className={cx('company-item-href')}>
            <div className={cx('company-item-href__sub-title')}>
              {t('companies-page.company-item.sub-title.link')}
            </div>
            <a href={href} target="_blank" rel="noreferrer">
              {href}
            </a>
          </div>
          <div className={cx('company-item-period')}>
            <div className={cx('company-item-period__sub-title')}>
              {t('companies-page.company-item.sub-title.period')}
            </div>
            {useIsRussianLang() ? period.ru : period.en}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompaniesList;