import {FC} from 'react';
import {Box, Stack} from '@mui/material';

import {ROUTE__DASHBOARD, ROUTE__MY_TASKS} from '@shared/constants';
import AllTasksIcon from './icons/allTasks.svg?react';
import DashboardIcon from './icons/dashboard.svg?react';
import EmployeesIcon from './icons/employees.svg?react';
import MyTasksIcon from './icons/myTasks.svg?react';
import NotifsIcon from './icons/notifications.svg?react';
import UserProfileIcon from './icons/userProfile.svg?react';
import {RouteButton} from './RouteButton';
import {SideBarMenuItem} from './types';

import Logo from '@/pages/LoginPage/logo.svg?react';

const menuItems: SideBarMenuItem[] = [
  {
    Icon: DashboardIcon,
    text: 'Главная',
    route: ROUTE__DASHBOARD,
  },
  {
    Icon: MyTasksIcon,
    text: 'Мои задачи',
    route: ROUTE__MY_TASKS,
  },
  {
    Icon: AllTasksIcon,
    text: 'Все задачи',
    route: 'tasks',
  },
  {
    Icon: EmployeesIcon,
    text: 'Сотрудники',
    route: 'employees',
  },
  {
    Icon: UserProfileIcon,
    text: 'Профиль',
    route: 'user-profile',
  },
  {
    Icon: NotifsIcon,
    text: 'Уведомления',
    route: 'notifications',
  },
];

export const SideBar: FC = () => {
  return (
    <Box px={2} py={4}>
      <Logo width={144} height={'100%'} style={{marginBottom: 16}} />

      <Stack py={2} spacing={2}>
        {menuItems.map(item => (
          <RouteButton key={item.text} menuItem={item} />
        ))}
      </Stack>
    </Box>
  );
};
