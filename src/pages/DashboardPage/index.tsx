import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';

import {SideBar} from './SideBar';

export const DashboardPage: FC = () => {
  return (
    <Box display="flex" height="100dvh">
      <Box flex="0 1 240px">
        <SideBar />
      </Box>

      <Box flex="1 1 0" sx={{backgroundColor: '#F6F6F6'}}>
        <Outlet />
      </Box>
    </Box>
  );
};
