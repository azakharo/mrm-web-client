import {FC, memo} from 'react';
import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';
import {ProtectedRoute} from '@features/auth';

import {
  ROUTE__DASHBOARD,
  ROUTE__DASHBOARD_MAIN,
  ROUTE__EMPLOYEES,
  ROUTE__LOGIN,
  ROUTE__LOGIN_CALLBACK,
  ROUTE__MY_TASK_DETAIL,
  ROUTE__MY_TASK_DETAIL__SUB_TASKS,
  ROUTE__MY_TASKS,
  ROUTE__TK_STATISTICS,
} from '@shared/constants';

import {DashboardPage} from '@/pages/DashboardPage';
import {Dashboard} from '@/pages/DashboardPage/Dashboard';
import Employees from '@/pages/DashboardPage/Employees';
import {MyTasks} from '@/pages/DashboardPage/MyTasks';
import NotImplemented from '@/pages/DashboardPage/NotImplemented';
import {SubTasks} from '@/pages/DashboardPage/SubTasks';
import {TaskDetails} from '@/pages/DashboardPage/TaskDetails';
import {TkStatistics} from '@/pages/DashboardPage/TkStatistics';
import {UserProfile} from '@/pages/DashboardPage/UserProfile';
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
            <DashboardPage />
          </ProtectedRoute>
        }
      >
        <Route path={ROUTE__DASHBOARD_MAIN} element={<Dashboard />} />
        <Route path={ROUTE__TK_STATISTICS} element={<TkStatistics />} />
        <Route path={ROUTE__MY_TASKS} element={<MyTasks />} />
        <Route path={ROUTE__MY_TASK_DETAIL} element={<TaskDetails />} />
        <Route path={ROUTE__MY_TASK_DETAIL__SUB_TASKS} element={<SubTasks />} />
        <Route
          path="tasks"
          element={<NotImplemented pageName="Все задачи" />}
        />
        <Route path={ROUTE__EMPLOYEES} element={<Employees />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route
          path="notifications"
          element={<NotImplemented pageName="Уведомления" />}
        />

        <Route
          index
          element={<Navigate replace to={ROUTE__DASHBOARD_MAIN} />}
        />

        <Route path="*" element={<ErrorPage404 />} />
      </Route>

      <Route
        path="/"
        element={<Navigate replace to={ROUTE__DASHBOARD_MAIN} />}
      />

      <Route path="*" element={<ErrorPage404 />} />
    </ReactRoutes>
  );
};

export default memo(Routes);
