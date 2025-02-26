import {FC, memo} from 'react';
import {Route, Routes as ReactRoutes} from 'react-router-dom';

import {ProtectedRoute} from '@/components/ProtectedRoute';
import {
  ROUTE__DASHBOARD,
  ROUTE__LOGIN,
  ROUTE__LOGIN_CALLBACK,
} from '@/constants';
import {DashboardPage} from '@/pages/DashboardPage';
import {DashboardPrototypePage} from '@/pages/DashboardPrototypePage';
import ErrorPage404 from '@/pages/Errors/404';
import {LoginCallbackPage} from '@/pages/LoginCallbackPage';
import {LoginPage} from '@/pages/LoginPage';

const Routes: FC = () => {
  return (
    <ReactRoutes>
      <Route path={ROUTE__LOGIN} element={<LoginPage />} />
      <Route path={ROUTE__LOGIN_CALLBACK} element={<LoginCallbackPage />} />

      <Route path="dashboard" element={<DashboardPrototypePage />}>
        <Route index element={<div>Дашборд</div>} />
        <Route path="my-tasks" element={<div>Мои задачи</div>} />
        <Route path="tasks" element={<div>Все задачи</div>} />
        <Route path="employees" element={<div>Сотрудники</div>} />
        <Route path="notifications" element={<div>Уведомления</div>} />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Route>

      <Route
        path={ROUTE__DASHBOARD}
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage404 />} />
    </ReactRoutes>
  );
};

export default memo(Routes);
