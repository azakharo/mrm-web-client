import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Stack} from '@mui/material';

import AllTasksIcon from './icons/allTasks.svg?react';
import DashboardIcon from './icons/dashboard.svg?react';
import EmployeesIcon from './icons/employees.svg?react';
import MyTasksIcon from './icons/myTasks.svg?react';
import NotifsIcon from './icons/notifications.svg?react';
import {SideBarMenuItem} from './types';

import Logo from '@/pages/LoginPage/logo.svg?react';

const iconSize = 24; // px

const menuItems: SideBarMenuItem[] = [
  {
    icon: <DashboardIcon width={iconSize} height="auto" />,
    text: 'Дашбоард',
    route: '/',
  },
  {
    icon: <MyTasksIcon width={iconSize} height="auto" />,
    text: 'Мои задачи',
    route: '/my-tasks',
  },
  {
    icon: <AllTasksIcon width={iconSize} height="auto" />,
    text: 'Все задачи',
    route: '/tasks',
  },
  {
    icon: <EmployeesIcon width={iconSize} height="auto" />,
    text: 'Сотрудники',
    route: '/employees',
  },
  {
    icon: <NotifsIcon width={iconSize} height="auto" />,
    text: 'Уведомления',
    route: '/notifications',
  },
];

export const SideBar: FC = () => {
  const navigate = useNavigate();

  return (
    <Box px={2} py={4}>
      <Logo width={144} height={'100%'} style={{marginBottom: 16}} />

      <Stack py={2} spacing={2}>
        {menuItems.map(({text, route, icon}) => (
          <Button
            key={text}
            variant="outlined"
            startIcon={icon}
            onClick={() => {
              navigate(route);
            }}
          >
            {text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
