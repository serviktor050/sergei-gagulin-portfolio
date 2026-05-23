import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectsList } from './ui';
import { PageLayout } from '../../shared/layouts';

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <PageLayout title={t('projects-page.title')}>
      <ProjectsList />
    </PageLayout>
  );
}
export default ProjectsPage;
