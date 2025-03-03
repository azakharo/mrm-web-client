import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';
import {TasksForToday} from './TasksForToday';
import {TkIndex} from './TkIndex';

export const Dashboard: FC = () => {
  return (
    <>
      <Header title="Дашборд" />

      <Box px={4}>
        <Box display="flex" gap={4} flexWrap="wrap">
          <TkIndex />
          <TasksForToday />
        </Box>
      </Box>
    </>
  );
};
