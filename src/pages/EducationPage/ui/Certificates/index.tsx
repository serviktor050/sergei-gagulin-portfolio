import React from 'react';
import classNames from 'classnames/bind';
import { CERTIFICATES } from '../../config/constants';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Certificates: React.FC = () =>  {
  return(
    <div className={cx('slider')}>
      {CERTIFICATES.map(({ src, alt, id }) => (
        <img src={src} alt={alt} key={id} className={cx('slide')} />
      ))}
    </div>
  );
};

export default Certificates;
