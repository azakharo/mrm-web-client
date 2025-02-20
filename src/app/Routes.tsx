import {FC, memo} from 'react';
import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';

import {
  ROUTE__DASHBOARD,
  ROUTE__LOGIN,
  ROUTE__LOGIN_CALLBACK,
} from '@/constants';
import {DashboardPage} from '@/pages/DashboardPage';
import {LoginCallbackPage} from '@/pages/LoginCallbackPage';
import {LoginPage} from '@/pages/LoginPage';

const Routes: FC = () => {
  return (
    <ReactRoutes>
      <Route path={ROUTE__LOGIN} element={<LoginPage />} />
      <Route path={ROUTE__LOGIN_CALLBACK} element={<LoginCallbackPage />} />
      <Route path={ROUTE__DASHBOARD} element={<DashboardPage />} />
      <Route path="*" element={<Navigate to={ROUTE__LOGIN} replace />} />
    </ReactRoutes>
  );
};

export default memo(Routes);
