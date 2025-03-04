import {FC, memo} from 'react';
import {Route, Routes as ReactRoutes} from 'react-router-dom';

import {ProtectedRoute} from '@/components/ProtectedRoute';
import {
  ROUTE__DASHBOARD,
  ROUTE__LOGIN,
  ROUTE__LOGIN_CALLBACK,
} from '@/constants';
import {DashboardPrototypePage} from '@/pages/DashboardPrototypePage';
import {Dashboard} from '@/pages/DashboardPrototypePage/Dashboard';
import NotImplemented from '@/pages/DashboardPrototypePage/NotImplemented';
import {UserProfile} from '@/pages/DashboardPrototypePage/UserProfile';
import ErrorPage404 from '@/pages/Errors/404';
import {LoginCallbackPage} from '@/pages/LoginCallbackPage';
import {LoginPage} from '@/pages/LoginPage';

const Routes: FC = () => {
  return (
    <ReactRoutes>
      <Route path={ROUTE__LOGIN} element={<LoginPage />} />
      <Route path={ROUTE__LOGIN_CALLBACK} element={<LoginCallbackPage />} />

      <Route
        path={ROUTE__DASHBOARD}
        element={
          <ProtectedRoute>
            <DashboardPrototypePage />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route
          path="my-tasks"
          element={<NotImplemented pageName="Мои задачи" />}
        />
        <Route
          path="tasks"
          element={<NotImplemented pageName="Все задачи" />}
        />
        <Route
          path="employees"
          element={<NotImplemented pageName="Сотрудники" />}
        />
        <Route path="user-profile" element={<UserProfile />} />
        <Route
          path="notifications"
          element={<NotImplemented pageName="Уведомления" />}
        />
        <Route path="*" element={<ErrorPage404 />} />
      </Route>

      <Route path="*" element={<ErrorPage404 />} />
    </ReactRoutes>
  );
};

export default memo(Routes);
