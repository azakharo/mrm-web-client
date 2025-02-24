import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Stack, Typography} from '@mui/material';

import AllTasksIcon from './icons/allTasks.svg?react';
import DashboardIcon from './icons/dashboard.svg?react';
import EmployeesIcon from './icons/employees.svg?react';
import MyTasksIcon from './icons/myTasks.svg?react';
import NotifsIcon from './icons/notifications.svg?react';
import {SideBarMenuItem} from './types';

import Logo from '@/pages/LoginPage/logo.svg?react';
import {COLOR__MAIN_BLACK} from '@/theme/colors';

const iconSize = 24; // px

const commonIconProps = {width: iconSize, height: '100%'};

const menuItems: SideBarMenuItem[] = [
  {
    icon: <DashboardIcon {...commonIconProps} />,
    text: 'Дашборд',
    route: '/',
  },
  {
    icon: <MyTasksIcon {...commonIconProps} />,
    text: 'Мои задачи',
    route: '/my-tasks',
  },
  {
    icon: <AllTasksIcon {...commonIconProps} />,
    text: 'Все задачи',
    route: '/tasks',
  },
  {
    icon: <EmployeesIcon {...commonIconProps} />,
    text: 'Сотрудники',
    route: '/employees',
  },
  {
    icon: <NotifsIcon {...commonIconProps} />,
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
            onClick={() => {
              navigate(route);
            }}
            sx={{
              padding: '12px 16px',
              justifyContent: 'flex-start',
            }}
          >
            <Box display="flex" gap={1} alignItems="center">
              {icon}

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '20px',
                  color: COLOR__MAIN_BLACK,
                }}
              >
                {text}
              </Typography>
            </Box>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
