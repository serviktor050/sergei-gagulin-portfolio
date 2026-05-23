import React from 'react';
import { useTranslation } from 'react-i18next';

import { CompaniesList } from './ui';
import { PageLayout } from '../../shared/layouts';

const CompaniesPage: React.FC = () => {
  const { t } = useTranslation();

  return(
    <PageLayout title={t('companies-page.title')}>
      <CompaniesList />
    </PageLayout>
  );
};

export default CompaniesPage;