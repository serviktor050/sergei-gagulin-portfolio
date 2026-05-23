import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('wrapper')}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;