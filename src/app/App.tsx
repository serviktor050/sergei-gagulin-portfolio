import React from 'react';
import { Route, Routes } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Header, Sidebar } from '../widgets';
import { AboutPage, CompaniesPage, EducationPage, ProjectsPage } from '../pages';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const App: React.FC = () => {
  return (
    <div className={cx('main-layout')}>
      <Header />
      <div className={cx('main-container')}>
        <Sidebar />
        <div className={cx('content-layout')}>
          <Routes>
            <Route
              path="/"
              element={<AboutPage />}
            />
            <Route
              path="/education"
              element={<EducationPage />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/companies"
              element={<CompaniesPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;